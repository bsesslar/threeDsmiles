import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { from } from 'rxjs';

import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { OrthoComponent } from './pages/ortho/ortho.component';
import { GeneralRestorativeComponent } from './pages/general-restorative/general-restorative.component';
import { SurgicaImplantComponent } from './pages/surgica-implant/surgica-implant.component';

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
    component: SurgicaImplantComponent,
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
export const routingComponents = [ LandingPageComponent, OrthoComponent, GeneralRestorativeComponent, SurgicaImplantComponent ];
