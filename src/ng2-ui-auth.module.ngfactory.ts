/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './ng2-ui-auth.module';
import * as import2 from '@angular/http/src/http_module';
import * as import3 from '@angular/http/src/backends/browser_xhr';
import * as import4 from '@angular/http/src/base_response_options';
import * as import5 from '@angular/http/src/backends/xhr_backend';
import * as import6 from '@angular/http/src/base_request_options';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/http/src/interfaces';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/i18n/tokens';
class Ng2UiAuthModuleInjector extends import0.NgModuleInjector<import1.Ng2UiAuthModule> {
  _HttpModule_0:import2.HttpModule;
  _Ng2UiAuthModule_1:import1.Ng2UiAuthModule;
  __BrowserXhr_2:import3.BrowserXhr;
  __ResponseOptions_3:import4.BaseResponseOptions;
  __XSRFStrategy_4:any;
  __XHRBackend_5:import5.XHRBackend;
  __RequestOptions_6:import6.BaseRequestOptions;
  __Http_7:any;
  __LOCALE_ID_8:any;
  __TRANSLATIONS_FORMAT_9:any;
  constructor(parent:import7.Injector) {
    super(parent,[],[]);
  }
  get _BrowserXhr_2():import3.BrowserXhr {
    if ((this.__BrowserXhr_2 == (null as any))) { (this.__BrowserXhr_2 = new import3.BrowserXhr()); }
    return this.__BrowserXhr_2;
  }
  get _ResponseOptions_3():import4.BaseResponseOptions {
    if ((this.__ResponseOptions_3 == (null as any))) { (this.__ResponseOptions_3 = new import4.BaseResponseOptions()); }
    return this.__ResponseOptions_3;
  }
  get _XSRFStrategy_4():any {
    if ((this.__XSRFStrategy_4 == (null as any))) { (this.__XSRFStrategy_4 = import2._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_4;
  }
  get _XHRBackend_5():import5.XHRBackend {
    if ((this.__XHRBackend_5 == (null as any))) { (this.__XHRBackend_5 = new import5.XHRBackend(this._BrowserXhr_2,this._ResponseOptions_3,this._XSRFStrategy_4)); }
    return this.__XHRBackend_5;
  }
  get _RequestOptions_6():import6.BaseRequestOptions {
    if ((this.__RequestOptions_6 == (null as any))) { (this.__RequestOptions_6 = new import6.BaseRequestOptions()); }
    return this.__RequestOptions_6;
  }
  get _Http_7():any {
    if ((this.__Http_7 == (null as any))) { (this.__Http_7 = import2.httpFactory(this._XHRBackend_5,this._RequestOptions_6)); }
    return this.__Http_7;
  }
  get _LOCALE_ID_8():any {
    if ((this.__LOCALE_ID_8 == (null as any))) { (this.__LOCALE_ID_8 = (null as any)); }
    return this.__LOCALE_ID_8;
  }
  get _TRANSLATIONS_FORMAT_9():any {
    if ((this.__TRANSLATIONS_FORMAT_9 == (null as any))) { (this.__TRANSLATIONS_FORMAT_9 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_9;
  }
  createInternal():import1.Ng2UiAuthModule {
    this._HttpModule_0 = new import2.HttpModule();
    this._Ng2UiAuthModule_1 = new import1.Ng2UiAuthModule();
    return this._Ng2UiAuthModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.HttpModule)) { return this._HttpModule_0; }
    if ((token === import1.Ng2UiAuthModule)) { return this._Ng2UiAuthModule_1; }
    if ((token === import3.BrowserXhr)) { return this._BrowserXhr_2; }
    if ((token === import4.ResponseOptions)) { return this._ResponseOptions_3; }
    if ((token === import8.XSRFStrategy)) { return this._XSRFStrategy_4; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_5; }
    if ((token === import6.RequestOptions)) { return this._RequestOptions_6; }
    if ((token === import9.Http)) { return this._Http_7; }
    if ((token === import10.LOCALE_ID)) { return this._LOCALE_ID_8; }
    if ((token === import10.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_9; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const Ng2UiAuthModuleNgFactory:import0.NgModuleFactory<import1.Ng2UiAuthModule> = new import0.NgModuleFactory(Ng2UiAuthModuleInjector,import1.Ng2UiAuthModule);