/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '../interests/interest.component.ngfactory';
import * as i2 from '../interests/interest.component';
import * as i3 from '../interests/interest.service';
import * as i4 from './myup.component';
import * as i5 from '@angular/forms';
import * as i6 from '@angular/common';
import * as i7 from '../_services/alert.service';
var styles_MyUpComponent = [];
export var RenderType_MyUpComponent = i0.ɵcrt({ encapsulation: 2,
    styles: styles_MyUpComponent, data: {} });
function View_MyUpComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'app-interest', [], null, null, null, i1.View_InterestComponent_0, i1.RenderType_InterestComponent)), i0.ɵdid(49152, null, 0, i2.InterestComponent, [i3.InterestService], { interest: [0, 'interest'] }, null), (_l()(), i0.ɵted(null, ['\n     ']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
export function View_MyUpComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 52, 'div', [['class',
                'col-md-8 col-md-offset-2']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵeld(0, null, null, 41, 'form', [['ngNativeValidate', '']], [[2, 'ng-untouched',
                null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
            [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                null], [2, 'ng-pending', null]], [[null, 'ngSubmit'],
            [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i0.ɵnov(_v, 3).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i0.ɵnov(_v, 3).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.onSubmit(i0.ɵnov(_v, 3)) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, [['f', 4]], 0, i5.NgForm, [[8, null],
            [8, null]], null, { ngSubmit: 'ngSubmit' }), i0.ɵprd(2048, null, i5.ControlContainer, null, [i5.NgForm]), i0.ɵdid(16384, null, 0, i5.NgControlStatusGroup, [i5.ControlContainer], null, null), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 32, 'div', [['class', 'form-group']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'label', [['for', 'number']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['매칭시킬 관심사 개수를 선택하세요'])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵeld(0, null, null, 26, 'select', [['class', 'form-control'],
            ['id', 'number'], ['name', 'number'], ['ngModel', '']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'change'], [null,
                'blur']], function (_v, en, $event) {
            var ad = true;
            if (('change' === en)) {
                var pd_0 = (i0.ɵnov(_v, 13).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i0.ɵnov(_v, 13).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(16384, null, 0, i5.SelectControlValueAccessor, [i0.Renderer2, i0.ElementRef], null, null), i0.ɵprd(1024, null, i5.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i5.SelectControlValueAccessor]), i0.ɵdid(671744, null, 0, i5.NgModel, [[2, i5.ControlContainer], [8, null], [8, null], [2, i5.NG_VALUE_ACCESSOR]], { name: [0, 'name'], model: [1, 'model'] }, null), i0.ɵprd(2048, null, i5.NgControl, null, [i5.NgModel]), i0.ɵdid(16384, null, 0, i5.NgControlStatus, [i5.NgControl], null, null), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 3, 'option', [['value', '2']], null, null, null, null, null)), i0.ɵdid(147456, null, 0, i5.NgSelectOption, [i0.ElementRef,
            i0.Renderer2, [2, i5.SelectControlValueAccessor]], { value: [0, 'value'] }, null),
        i0.ɵdid(147456, null, 0, i5.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, 'value'] }, null), (_l()(), i0.ɵted(null, ['2'])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 3, 'option', [['value', '3']], null, null, null, null, null)), i0.ɵdid(147456, null, 0, i5.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i5.SelectControlValueAccessor]], { value: [0,
                'value'] }, null), i0.ɵdid(147456, null, 0, i5.ɵq, [i0.ElementRef,
            i0.Renderer2, [8, null]], { value: [0, 'value'] }, null), (_l()(),
            i0.ɵted(null, ['3'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'option', [['value', '4']], null, null, null, null, null)), i0.ɵdid(147456, null, 0, i5.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i5.SelectControlValueAccessor]], { value: [0, 'value'] }, null), i0.ɵdid(147456, null, 0, i5.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, 'value'] }, null),
        (_l()(), i0.ɵted(null, ['4'])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 3, 'option', [['value', '5']], null, null, null, null, null)), i0.ɵdid(147456, null, 0, i5.NgSelectOption, [i0.ElementRef, i0.Renderer2, [2, i5.SelectControlValueAccessor]], { value: [0, 'value'] }, null), i0.ɵdid(147456, null, 0, i5.ɵq, [i0.ElementRef, i0.Renderer2, [8, null]], { value: [0, 'value'] }, null),
        (_l()(), i0.ɵted(null, ['5'])), (_l()(), i0.ɵted(null, ['\n            '])),
        (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n     '])), (_l()(), i0.ɵeld(0, null, null, 1, 'button', [['class',
                'btn btn-primary'], ['type', 'submit']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['내 업 발견하기'])),
        (_l()(), i0.ɵted(null, ['\n    '])), (_l()(), i0.ɵted(null, ['\n    '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'hr', [], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n'])), (_l()(), i0.ɵeld(0, null, null, 4, 'div', [['class',
                'col-md-8 col-md-offset-2']], null, null, null, null, null)), (_l()(), i0.ɵted(null, [' \n    '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MyUpComponent_1)), i0.ɵdid(802816, null, 0, i6.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i0.ɵted(null, [' \n'])),
        (_l()(), i0.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_14 = 'number';
        var currVal_15 = '';
        _ck(_v, 15, 0, currVal_14, currVal_15);
        var currVal_16 = '2';
        _ck(_v, 20, 0, currVal_16);
        var currVal_17 = '2';
        _ck(_v, 21, 0, currVal_17);
        var currVal_18 = '3';
        _ck(_v, 25, 0, currVal_18);
        var currVal_19 = '3';
        _ck(_v, 26, 0, currVal_19);
        var currVal_20 = '4';
        _ck(_v, 30, 0, currVal_20);
        var currVal_21 = '4';
        _ck(_v, 31, 0, currVal_21);
        var currVal_22 = '5';
        _ck(_v, 35, 0, currVal_22);
        var currVal_23 = '5';
        _ck(_v, 36, 0, currVal_23);
        var currVal_24 = _co.interests;
        _ck(_v, 50, 0, currVal_24);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i0.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i0.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i0.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i0.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i0.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i0.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = i0.ɵnov(_v, 17).ngClassUntouched;
        var currVal_8 = i0.ɵnov(_v, 17).ngClassTouched;
        var currVal_9 = i0.ɵnov(_v, 17).ngClassPristine;
        var currVal_10 = i0.ɵnov(_v, 17).ngClassDirty;
        var currVal_11 = i0.ɵnov(_v, 17).ngClassValid;
        var currVal_12 = i0.ɵnov(_v, 17).ngClassInvalid;
        var currVal_13 = i0.ɵnov(_v, 17).ngClassPending;
        _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13);
    });
}
export function View_MyUpComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 1, 'app-myup', [], null, null, null, View_MyUpComponent_0, RenderType_MyUpComponent)),
        i0.ɵdid(49152, null, 0, i4.MyUpComponent, [i3.InterestService, i7.AlertService], null, null)], null, null);
}
export var MyUpComponentNgFactory = i0.ɵccf('app-myup', i4.MyUpComponent, View_MyUpComponent_Host_0, {}, {}, []);
