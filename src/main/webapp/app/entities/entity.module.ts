import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#NantesjsRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#NantesjsCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#NantesjsLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#NantesjsDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#NantesjsTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#NantesjsEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#NantesjsJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#NantesjsJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NantesjsEntityModule {}
