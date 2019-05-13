import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShiningButtonComponent} from './shining-button/shining-button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { BounceLoaderComponent } from './bounce-loader/bounce-loader.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiningButtonComponent,
    BounceLoaderComponent,
    TrafficLightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
