import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRewardsComponent } from './list-rewards/list-rewards.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

const routes: Routes = [
  { path:'', component: ListCustomersComponent },  //default path
  { path:'customers', component: ListCustomersComponent },
  { path:'rewards/:id', component: ListRewardsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
