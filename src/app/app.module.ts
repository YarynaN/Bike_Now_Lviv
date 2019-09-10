import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    LoginComponent,
    MyAccountComponent,
    SearchPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
