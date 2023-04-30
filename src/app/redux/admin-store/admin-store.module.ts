import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import {ADMIN_FEATURE_NAME, adminReducer } from "./reducers/adminReducer";
import { reducers } from './Reducers';
import { EffectsModule } from '@ngrx/effects';
import { ServerEffects } from './effects/server.effects';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability:true,
      }
    }),
    EffectsModule.forRoot([ServerEffects])
   // StoreModule.forFeature(ADMIN_FEATURE_NAME,adminReducer)
  ]
})

export class AdminStoreModule { }
