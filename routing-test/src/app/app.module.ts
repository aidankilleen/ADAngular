import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { UserComponent } from './user/user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainNavBsComponent } from './main-nav-bs/main-nav-bs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    UsersPageComponent,
    UserDetailPageComponent,
    UserComponent,
    MainNavComponent,
    MainNavBsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
