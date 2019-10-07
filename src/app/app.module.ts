import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PersonalInfoComponent } from './components/my-account/personal-info/personal-info.component';
import { BikeComponent } from './components/my-account/bikes-info/bike/bike.component';
import { BikesInfoComponent } from './components/my-account/bikes-info/bikes-info.component';
import { HistoryComponent } from './components/my-account/history/history.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

/* SearchPage - InstaSearch */
import { NgAisModule } from 'angular-instantsearch';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { MatCardModule } from '@angular/material';
import { AuthGuardService } from './services/auth-guard.service';
import { LoggedNavbarComponent } from './components/navigation/logged-navbar/logged-navbar.component';
import { GuestNavbarComponent } from './components/navigation/guest-navbar/guest-navbar.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PersonalInfoService } from './services/personal-info.service';
import { OrderPageComponent } from './components/order-page/order-page.component';


firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MyAccountComponent,
    SearchPageComponent,
    RegisterComponent,
    LoggedNavbarComponent,
    GuestNavbarComponent,
    MainPageComponent,
    PersonalInfoComponent,
    BikeComponent,
    BikesInfoComponent,
    HistoryComponent,
    ContactUsComponent,
    OrderPageComponent,
  ],
  imports: [
    NgAisModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatCardModule,
    MatSnackBarModule,
    MatCarouselModule.forRoot(),
    FormsModule,
  ],
  providers: [AuthGuardService, PersonalInfoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
