
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { SurgicaImplantComponent } from './pages/surgica-implant/surgica-implant.component';
import { OrthoComponent } from './pages/ortho/ortho.component';
import { GeneralRestorativeComponent } from './pages/general-restorative/general-restorative.component';
import { longModal } from './modals/long-modal/long-modal.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingPageComponent,
    SurgicaImplantComponent,
    OrthoComponent,
    GeneralRestorativeComponent,
    longModal,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    RoutingModule,
  ],
  entryComponents: [ longModal ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
