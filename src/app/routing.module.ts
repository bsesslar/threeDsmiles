import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { from } from 'rxjs';

import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { OrthoComponent } from './pages/ortho/ortho.component';
import { GeneralRestorativeComponent } from './pages/general-restorative/general-restorative.component';
import { SurgicalImplantComponent } from './pages/surgical-implant/surgical-implant.component';

const routes: Routes = [
  { path: 'Home',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  { path: 'Ortho',
    component: OrthoComponent,
    pathMatch: 'full'
  },
  { path: 'GeneralRestorative',
    component: GeneralRestorativeComponent,
    pathMatch: 'full'
  },
  { path: 'SurgicalImplant',
    component: SurgicalImplantComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule,
            RouterLink,
            RouterLinkActive,
          ]

})
export class RoutingModule { }
export const routingComponents = [ LandingPageComponent, OrthoComponent, GeneralRestorativeComponent, SurgicalImplantComponent ];
