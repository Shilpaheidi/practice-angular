import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'child1',
        loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module)
      },
      {
        path: 'child2',
        loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module)
      },
      { path: '', redirectTo: 'child1', pathMatch: 'full' } // default redirect
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
