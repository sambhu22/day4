import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [
  {
    path:"home",component:HomeComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"district",component:DistrictComponent
  },
    {path:"signin",component:SigninComponent
    },
    {
      path:"signup",component:SignupComponent
    },
    {
      path:"contactus",component:ContactusComponent
    },
    {
      path:"single",component:SinglepageComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
