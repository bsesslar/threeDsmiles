import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterLinkActive } from '@angular/router';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';


import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SubscibeModalComponent } from './navigation/subscibe-modal/subscibe-modal.component';





@NgModule({
  declarations:
  [
    NavigationComponent,
    LandingPageComponent,
    SubscibeModalComponent,

  ],
  imports: [
    RouterLinkActive,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
  ],
  exports: [
    NavigationComponent,
    LandingPageComponent,
    SubscibeModalComponent,
  ],
  entryComponents: [ SubscibeModalComponent ],
  providers: [MDBSpinningPreloader],
  bootstrap: [CoreModule],
  schemas:   [ NO_ERRORS_SCHEMA ]
})
export class CoreModule { }
export const coreComponents = [NavigationComponent, SubscibeModalComponent, LandingPageComponent ];
