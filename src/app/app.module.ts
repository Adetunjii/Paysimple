import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './reusables/navbar/navbar.component';
import { SidebarComponent } from './reusables/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PosComponent } from './views/pos/pos.component';
import { ErrorComponent } from './views/error/error.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './reusables/card/card.component';
import { ChartsModule } from 'ng2-charts';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    PosComponent,
    ErrorComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    ChartsModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
