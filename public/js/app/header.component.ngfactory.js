/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/router';
import * as i2 from '@angular/common';
import * as i3 from './header.component';
import * as i4 from './auth/auth.service';
import * as i5 from './interests/interest.service';
var styles_HeaderComponent = [];
export var RenderType_HeaderComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_HeaderComponent, data: {} });
function View_HeaderComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'a', [['href', '#']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i0.ɵpad(1), (_l()(), i0.ɵted(null, ['Sign Up']))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 2, 0, '/signup');
        _ck(_v, 1, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 1).target;
        var currVal_1 = i0.ɵnov(_v, 1).href;
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
function View_HeaderComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'a', [['href', '#']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, null, 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i0.ɵpad(1), (_l()(), i0.ɵted(null, ['Sign In']))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 2, 0, '/signin');
        _ck(_v, 1, 0, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 1).target;
        var currVal_1 = i0.ɵnov(_v, 1).href;
        _ck(_v, 0, 0, currVal_0, currVal_1);
    });
}
function View_HeaderComponent_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'a', [['href', '#']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.logout() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['Sign Out']))], null, null);
}
export function View_HeaderComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 124, 'nav', [['class',
                'navbar navbar-default']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n  '])), (_l()(), i0.ɵeld(0, null, null, 121, 'div', [['class', 'container-fluid']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 16, 'div', [['class', 'navbar-header']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n      '])),
        (_l()(), i0.ɵeld(0, null, null, 10, 'button', [['aria-expanded',
                'false'], ['class', 'navbar-toggle collapsed'], ['data-target', '#bs-example-navbar-collapse-1'],
            ['data-toggle', 'collapse'], ['type', 'button']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'sr-only']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Toggle navigation'])), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'icon-bar']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n        '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'icon-bar']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'icon-bar']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n      '])), (_l()(), i0.ɵted(null, ['\n      '])), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [['class', 'navbar-brand'], ['href', '#']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['FindUp'])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵted(null, ['\n\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 98, 'div', [['class', 'collapse navbar-collapse'],
            ['id', 'bs-example-navbar-collapse-1']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n      '])),
        (_l()(), i0.ɵeld(0, null, null, 80, 'ul', [['class', 'nav navbar-nav']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'li', [['routerLinkActive', 'active']], null, null, null, null, null)), i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 1, { links: 1 }), i0.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i0.ɵeld(0, null, null, 3, 'a', [['href', '#']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['About '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'sr-only']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['(current)'])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 7, 'li', [['routerLinkActive',
                'active']], null, null, null, null, null)),
        i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef,
            i0.Renderer2, i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null), i0.ɵqud(603979776, 3, { links: 1 }), i0.ɵqud(603979776, 4, { linksWithHrefs: 1 }),
        (_l()(), i0.ɵeld(0, null, null, 3, 'a', [['href', '#']], [[1, 'target',
                0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i0.ɵnov(_v, 42).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(671744, [[4, 4]], 0, i1.RouterLinkWithHref, [i1.Router, i1.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i0.ɵpad(1), (_l()(), i0.ɵted(null, ['나의 업'])), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 59, 'li', [['class', 'dropdown'], ['routerLinkActive', 'active']], null, null, null, null, null)), i0.ɵdid(1720320, null, 2, i1.RouterLinkActive, [i1.Router, i0.ElementRef, i0.Renderer2,
            i0.ChangeDetectorRef], { routerLinkActive: [0, 'routerLinkActive'] }, null),
        i0.ɵqud(603979776, 5, { links: 1 }), i0.ɵqud(603979776, 6, { linksWithHrefs: 1 }), (_l()(),
            i0.ɵted(null, ['\n          '])), (_l()(), i0.ɵeld(0, null, null, 2, 'a', [['aria-expanded', 'false'], ['aria-haspopup', 'true'],
            ['class', 'dropdown-toggle'], ['data-toggle', 'dropdown'], ['href', '#'],
            ['role', 'button']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 관심사 '])), (_l()(), i0.ɵeld(0, null, null, 0, 'span', [['class', 'caret']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n          '])), (_l()(), i0.ɵeld(0, null, null, 49, 'ul', [['class', 'dropdown-menu']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(),
            i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('click' === en)) {
                    var pd_0 = (_co.onSelect('나의 성과') !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 성과'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('나의 흥미') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 흥미'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('나의 기술') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 기술'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('나의 취미') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 취미'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('나의 경험') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 경험'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('나의 특기') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 특기'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('되고 싶은 것') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['되고 싶은 것'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('내가 좋아하는것') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['내가 좋아하는것'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('배우고 싶은 것') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['배우고 싶은 것'])), (_l()(), i0.ɵted(null, [' \n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('나의 장점') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['나의 장점'])), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('가고 싶은 곳') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['가고 싶은 곳'])), (_l()(), i0.ɵted(null, [' \n            '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onSelect('관심 교육') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵeld(0, null, null, 1, 'a', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['관심 교육'])), (_l()(), i0.ɵted(null, [' \n          '])), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(),
            i0.ɵted(null, ['\n      '])), (_l()(), i0.ɵted(null, ['\n      '])),
        (_l()(), i0.ɵeld(0, null, null, 13, 'ul', [['class', 'nav navbar-nav navbar-right']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HeaderComponent_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HeaderComponent_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 2, 'li', [], null, null, null, null, null)),
        (_l()(), i0.ɵand(16777216, null, null, 1, null, View_HeaderComponent_3)),
        i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n      '])), (_l()(),
            i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n  '])),
        (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'active';
        _ck(_v, 29, 0, currVal_0);
        var currVal_1 = 'active';
        _ck(_v, 38, 0, currVal_1);
        var currVal_4 = _ck(_v, 43, 0, '/myup');
        _ck(_v, 42, 0, currVal_4);
        var currVal_5 = 'active';
        _ck(_v, 47, 0, currVal_5);
        var currVal_6 = !_co.isLoggedIn();
        _ck(_v, 112, 0, currVal_6);
        var currVal_7 = !_co.isLoggedIn();
        _ck(_v, 116, 0, currVal_7);
        var currVal_8 = _co.isLoggedIn();
        _ck(_v, 120, 0, currVal_8);
    }, function (_ck, _v) {
        var currVal_2 = i0.ɵnov(_v, 42).target;
        var currVal_3 = i0.ɵnov(_v, 42).href;
        _ck(_v, 41, 0, currVal_2, currVal_3);
    });
}
export function View_HeaderComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'app-header', [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)),
        i0.ɵdid(49152, null, 0, i3.HeaderComponent, [i4.AuthService, i1.Router, i5.InterestService], null, null)], null, null);
}
export var HeaderComponentNgFactory = i0.ɵccf('app-header', i3.HeaderComponent, View_HeaderComponent_Host_0, {}, {}, []);
