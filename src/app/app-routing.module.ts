import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { PersonalInfoComponent } from './components/my-account/personal-info/personal-info.component';
import { BikesInfoComponent } from './components/my-account/bikes-info/bikes-info.component';
import { HistoryComponent } from './components/my-account/history/history.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'my-account',
    component: MyAccountComponent,
    children: [
      { path: '', redirectTo: '/my-account/(outlet-my-account:personal-info)', pathMatch: 'full' },
      { path: 'personal-info', component: PersonalInfoComponent, outlet: 'outlet-my-account' },
      { path: 'bikes-info', component: BikesInfoComponent, outlet: 'outlet-my-account' },
      { path: 'history', component: HistoryComponent, outlet: 'outlet-my-account' },
    ],
  },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
