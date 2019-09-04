
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { RoutingModule } from './routing.module';
import { coreComponents } from './core/core.module';
import { pagesComponents } from './pages/pages.module';
import { modalComponets } from './modals/modal.module';
import { LongModal } from './modals/long-modal/long-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    coreComponents,
    pagesComponents,
    modalComponets,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    RoutingModule,
  ],
  entryComponents: [ LongModal ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:   [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
