import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { AssesmentComponent } from './Component/assesment/assesment.component';
import { RightsectionComponent } from './Component/rightsection/rightsection.component';
import { RnavbarComponent } from './Component/rnavbar/rnavbar.component';
import { RightmidComponent } from './Component/rightmid/rightmid.component';
import { RightbottomComponent } from './Component/rightbottom/rightbottom.component';
import { ScrollerComponent } from './Component/scroller/scroller.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssesmentComponent,
    RightsectionComponent,
    RnavbarComponent,
    RightmidComponent,
    RightbottomComponent,
    ScrollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
