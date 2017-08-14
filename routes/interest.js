var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Interest = require('../models/interest');
var User = require('../models/user');

router.get('/', function (req, res, next) {
    Interest.find()
        .populate('user', 'firstName')
        .exec(function (err, interests) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: interests
            });
        });
});

router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if(err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            })
        }
        next();
    })
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
        if(err) {
            return res.status(500).json({ //set response and also return in order not to proceed to next line
                title:'An error occured',
                error: err
            });
        }      
        var interest = new Interest({
            content: req.body.content,
            type: req.body.type,
            user: user
        });
        interest.save(function(err, result) {
            if(err) {
                return res.status(500).json({ //set response and also return in order not to proceed to next line
                    title:'An error occured',
                    error: err
                });
            }
            user.interests.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        })
    })
});

router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Interest.findById(req.params.id, function(err, interest) {
        if(err) {
             return res.status(500).json({ //set response and also return in order not to proceed to next line
                title:'An error occured',
                error: err
            });
        }
        if(!interest) {
            return res.status(500).json({ //set response and also return in order not to proceed to next line
                title:'No Interest Found!',
                error: {message: 'Interest not found'}
            });
        }
        if(interest.user != decoded.user._id) {
             return res.status(401).json({
                 title: 'Not Authenticated',
                 error: {interest: 'Users do not match'}
             })
        }
        interest.content = req.body.content;
        interest.save(function(err, result) {
            if(err) {
                return res.status(500).json({ //set response and also return in order not to proceed to next line
                    title:'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        })
    });
});

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Interest.findById(req.params.id, function(err, interest) {
        if(err) {
             return res.status(500).json({ //set response and also return in order not to proceed to next line
                title:'An error occured',
                error: err
            });
        }
        if(!interest) {
            return res.status(500).json({ //set response and also return in order not to proceed to next line
                title:'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if(interest.user != decoded.user._id) {
             return res.status(401).json({
                 title: 'Not Authenticated',
                 error: {message: 'Users do not match'}
             })
        }
        interest.remove(function(err, result) {
            if(err) {
                return res.status(500).json({ //set response and also return in order not to proceed to next line
                    title:'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        })
    });   
});

module.exports = router;