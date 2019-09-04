import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';
import { LongModal } from './long-modal/long-modal.component';


@NgModule({
    declarations: [
        LongModal
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
        LongModal
    ],
    entryComponents: [ LongModal ],
    providers: [MDBSpinningPreloader],
    bootstrap: [modalModule],
    schemas:   [ NO_ERRORS_SCHEMA ]
  })
  export class modalModule { }
  export const modalComponets = [ LongModal ];
