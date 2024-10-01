import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountryRoutingModule } from './country.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [

  ]
})
export class CountriesModule { }
