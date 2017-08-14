/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './alert.component';
import * as i3 from '../_services/alert.service';
const styles_AlertComponent:any[] = ([] as any[]);
export const RenderType_AlertComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_AlertComponent,data:{}});
function View_AlertComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',([] as any[]),
      [[8,'className',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n     ','\n     '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'a',[['class','close']],(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.removeAlert(_v.context.$implicit)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['×'])),(_l()(),
          i0.ɵted((null as any),['\n']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = i0.ɵinlineInterpolate(1,'',_co.cssClass(_v.context.$implicit),
        ' alert-dismissable');
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = _v.context.$implicit.message;
    _ck(_v,1,0,currVal_1);
  });
}
export function View_AlertComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_AlertComponent_1)),i0.ɵdid(802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,
      i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any))],(_ck,
      _v) => {
    var _co:i2.AlertComponent = _v.component;
    const currVal_0:any = _co.alerts;
    _ck(_v,1,0,currVal_0);
  },(null as any));
}
export function View_AlertComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'alert',([] as any[]),
      (null as any),(null as any),(null as any),View_AlertComponent_0,RenderType_AlertComponent)),
      i0.ɵdid(114688,(null as any),0,i2.AlertComponent,[i3.AlertService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AlertComponentNgFactory:i0.ComponentFactory<i2.AlertComponent> = i0.ɵccf('alert',
    i2.AlertComponent,View_AlertComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvVHJpbml0eS9Qcm9qZWN0cy9GaW5kVXAvYXNzZXRzL2FwcC9fZGlyZWN0aXZlcy9hbGVydC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvVHJpbml0eS9Qcm9qZWN0cy9GaW5kVXAvYXNzZXRzL2FwcC9fZGlyZWN0aXZlcy9hbGVydC5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9UcmluaXR5L1Byb2plY3RzL0ZpbmRVcC9hc3NldHMvYXBwL19kaXJlY3RpdmVzL2FsZXJ0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvVHJpbml0eS9Qcm9qZWN0cy9GaW5kVXAvYXNzZXRzL2FwcC9fZGlyZWN0aXZlcy9hbGVydC5jb21wb25lbnQudHMuQWxlcnRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiBjbGFzcz1cInt7IGNzc0NsYXNzKGFsZXJ0KSB9fSBhbGVydC1kaXNtaXNzYWJsZVwiPlxyXG4gICAgIHt7YWxlcnQubWVzc2FnZX19XHJcbiAgICAgPGEgY2xhc3M9XCJjbG9zZVwiIChjbGljayk9XCJyZW1vdmVBbGVydChhbGVydClcIj4mdGltZXM7PC9hPlxyXG48L2Rpdj4iLCI8YWxlcnQ+PC9hbGVydD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7TUFBa0Ysc0RBRTdFO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBaUI7Y0FBQTtjQUFBO1lBQUE7WUFBakI7VUFBQSxnQ0FBOEMsc0NBQVc7aUJBQUE7O0lBRjVCO1FBQUE7SUFBbEMsV0FBa0MsU0FBbEM7SUFBa0Y7SUFBQTs7OztvQkFBbEY7TUFBQSwrQkFBQTt1Q0FBQTs7O0lBQUs7SUFBTCxXQUFLLFNBQUw7Ozs7b0JDQUE7TUFBQTthQUFBO1VBQUE7SUFBQTs7OzsifQ==