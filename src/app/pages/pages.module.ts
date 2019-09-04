import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';

import { OrthoComponent } from './ortho/ortho.component';
import { SurgicalImplantComponent } from './surgical-implant/surgical-implant.component';
import { GeneralRestorativeComponent } from './general-restorative/general-restorative.component';





@NgModule({
  declarations: 
  [   
    
    
  ],
  imports: [
    OrthoComponent,
    GeneralRestorativeComponent,
    SurgicalImplantComponent,
  
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    
   
  ],
  exports: [
    OrthoComponent,
    GeneralRestorativeComponent,
    SurgicalImplantComponent,
    
       
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [PagesModule],
  schemas:   [ NO_ERRORS_SCHEMA ]
})
export class PagesModule { }
export const pagesComponents = [OrthoComponent, GeneralRestorativeComponent, SurgicalImplantComponent]