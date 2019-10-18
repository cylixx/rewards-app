import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRewardsComponent } from './list-rewards/list-rewards.component';

const routes: Routes = [
  { path:'', component: ListRewardsComponent },  //default path
  { path:'rewards/:id', component: ListRewardsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
