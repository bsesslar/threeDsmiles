
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { RoutingModule } from './routing.module';
import { NavigationComponent } from '../app/core/navigation/navigation.component';
import { LandingPageComponent } from '../app/core/landing-page/landing-page.component';
import { LongModal } from './modals/long-modal/long-modal.component';
import { GeneralRestorativeComponent } from './pages/general-restorative/general-restorative.component';
import { OrthoComponent } from './pages/ortho/ortho.component';
import { SurgicalImplantComponent } from './pages/surgical-implant/surgical-implant.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    SurgicalImplantComponent,
    OrthoComponent,
    GeneralRestorativeComponent,
    LongModal,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // tslint:disable-next-line: deprecation
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
