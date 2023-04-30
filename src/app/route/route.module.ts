import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AuthlogGuard } from '../core/guards/authlog.guard';
import { ContentPartCardComponent } from '../core/components/main/contentPartCard/contentPartCard.component';
import { PageNotFoundComponent } from '../core/pages/page-not-found/page-not-found.component';
import { LoginComponent } from '../core/pages/login/login.component';
import { DetailPageComponent } from '../core/components/detail-page/detail-page.component';
import { AdminPanelComponent } from '../core/pages/admin-panel/admin-panel.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: ContentPartCardComponent, canActivate: [AuthlogGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'more/:id', component: DetailPageComponent, canActivate: [AuthlogGuard] },
  {path: 'adminPanel' , component: AdminPanelComponent , canActivate: [AuthlogGuard]},
  { path: '**', component: PageNotFoundComponent },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
})
export class RouteModule { }
