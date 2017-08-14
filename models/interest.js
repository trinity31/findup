var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    type: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function(interest) {
    User.findById(interest.user, function(err, user) {
        user.interests.pull(interest);
        user.save();
    });
});

module.exports = mongoose.model('Interest', schema);