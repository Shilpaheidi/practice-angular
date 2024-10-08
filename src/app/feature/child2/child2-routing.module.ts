import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from './child2.component';

const routes: Routes = [    {path: '',
  component: Child2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child2RoutingModule { }
