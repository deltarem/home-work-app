import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseListComponent} from './house-list/house-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HouseComponent} from './house/house.component';

const routes: Routes = [
  {path: 'house-list', component: HouseListComponent},
  {path: 'house', component: HouseComponent},
  {path: '', redirectTo: '/house-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
