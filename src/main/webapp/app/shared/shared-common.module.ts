import { NgModule } from '@angular/core';

import { NantesjsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [NantesjsSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [NantesjsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NantesjsSharedCommonModule {}
