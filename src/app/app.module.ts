import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteFirstComponent } from './components/route-first/route-first.component';
import { RouteSecondComponent } from './components/route-second/route-second.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouteFirstComponent,
    RouteSecondComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
