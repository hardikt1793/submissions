import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { PagesComponent } from './pages.component';
import { AgmCoreModule } from '@agm/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CardComponent } from './submissions/component/card/card.component';
import { FiltersComponent } from './submissions/component/filters/filters.component';


@NgModule({
  declarations: [
    SubmissionsComponent, 
    PagesComponent, 
    CardComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvWBmF4biee4XgHItzEpHOv6DtuM8MsCo'
    }),
  ]
})
export class PagesModule { }
