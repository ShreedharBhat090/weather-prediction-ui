import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PredictionComponent } from './prediction/prediction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterOutlet} from "@angular/router";
import { MaterialModule } from './material/material.module';
import { SharedComponent } from './shared/shared.component';
import {PredictionService} from "./services/prediction.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    PredictionComponent,
    HeaderComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
