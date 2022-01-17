import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { PostComponent } from './components/post/post.component';
import { LoginModalComponent } from './components/navbar/login-modal/login-modal.component';
import { EmailLoginModalComponent } from './components/navbar/email-login-modal/email-login-modal.component';
import { VipCodeModalComponent } from './components/navbar/vip-code-modal/vip-code-modal.component';
import { WelcomeVipModalComponent } from './components/navbar/welcome-vip-modal/welcome-vip-modal.component';
import { ReserveUsernameModalComponent } from './components/home/reserve-username-modal/reserve-username-modal.component';
import { WaitlistModalComponent } from './components/home/waitlist-modal/waitlist-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    BlogComponent,
    EquipmentComponent,
    PostComponent,
    LoginModalComponent,
    EmailLoginModalComponent,
    VipCodeModalComponent,
    WelcomeVipModalComponent,
    ReserveUsernameModalComponent,
    WaitlistModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
