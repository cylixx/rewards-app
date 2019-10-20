import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   //necesario para tratar los formularios
import { HttpClientModule } from '@angular/common/http'; //necesario para invocar servicios por http (servicio restful)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRewardsComponent } from './list-rewards/list-rewards.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRewardsComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
