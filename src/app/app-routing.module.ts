import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'home', component: HomeComponent }
// ];

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'weather', component: WeatherComponent },
//   // { path: 'u', component: UserProfileComponent },
//   // Add a wildcard route for any other paths
//   { path: '**', redirectTo: '' }
// ];


const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  { path: '', redirectTo: '/feature', pathMatch: 'full' }



  // {
  //   path: 'feature/child1',
  //   loadChildren: () => import('./feature/child1/child1.module').then(m => m.Child1Module)
  // },
  // {
  //   path: 'feature/child2',
  //   loadChildren: () => import('./feature/child2/child2.module').then(m => m.Child2Module)
  // },
  // { path: '', redirectTo: '/feature/child1', pathMatch: 'full' } // Redirect to default child route

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
