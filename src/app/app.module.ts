import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    OrderComponent,
    NavbarComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule  {}
