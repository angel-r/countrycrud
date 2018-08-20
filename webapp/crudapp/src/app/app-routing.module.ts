import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';


const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':id',
    component: CountryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

