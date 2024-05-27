import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RequestInfoComponent } from './components/request-info/request-info.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Component } from '@angular/core';
import { PortfolioInfoComponent } from './components/portfolio-info/portfolio-info.component';
import { CommonFaqComponent } from './components/common-faq/common-faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'requestInfo',
    component: RequestInfoComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'commonfaq',
    component: CommonFaqComponent,
  },
  {
    path: 'portfolioinfo',
    component: PortfolioInfoComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  { path:"**",
  component:PageNotFoundComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
