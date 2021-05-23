import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HouseComponent} from './house/house.component';
import { HousesComponent } from './houses/houses.component';

const routes: Routes = [
  {path: 'houses', component: HousesComponent},
  {path: 'houses/:id', component: HouseComponent},
  {path: '', redirectTo: '/houses', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
