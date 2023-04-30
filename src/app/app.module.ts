import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { RouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { HeadersComponent } from './core/components/headerM/header.component';
import { SearchComponent } from './core/components/search/search.component';
import { SortComponent } from './core/components/sort/sort.component';

import {ContentPartCardComponent} from './core/components/main/contentPartCard/contentPartCard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterInputPipe } from './core/pipes/filter-input.pipe';
import { FilterDatePipe } from './core/pipes/filter-date.pipe';
import { ColorDirectDirective } from './core/directives/color-direct.directive';
import { LoginComponent } from './core/pages/login/login.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { DetailPageComponent } from './core/components/detail-page/detail-page.component';
import { VideoCardComponent } from './core/components/main/videoCard/videoCard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPanelComponent } from './core/pages/admin-panel/admin-panel.component';
import { StoreModule } from '@ngrx/store';
import { AdminStoreModule } from './redux/admin-store/admin-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TransformPipePipe } from './core/pipes/transform-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  
  declarations: [
    AppComponent,
    HeadersComponent,
    SearchComponent,
    SortComponent,
    VideoCardComponent,
    ContentPartCardComponent,
    FilterInputPipe,
    FilterDatePipe,
    ColorDirectDirective,
    LoginComponent,
    PageNotFoundComponent,
    DetailPageComponent,
    AdminPanelComponent,
    TransformPipePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialExampleModule,
    FormsModule,
    RouteModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgbModule,
    NgxPaginationModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  
  
export class AppModule { }
