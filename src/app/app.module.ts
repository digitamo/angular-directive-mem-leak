import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RulesComponent } from './rules/rules.component';
import { HomeComponent } from './home/home.component';
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule
  ],
  providers: [],
  exports: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
