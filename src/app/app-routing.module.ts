import { UserComponent } from './user/user.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent},
  {path:'Github search',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
