import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NantesjsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [NantesjsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [NantesjsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NantesjsSharedModule {
  static forRoot() {
    return {
      ngModule: NantesjsSharedModule
    };
  }
}
