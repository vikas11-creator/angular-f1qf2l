import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AppRoutingModule } from '../../app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HistoryPageComponent,
    DashboardComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }