import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { loadserverData, serverDataFailed, serverDataSuccess } from "../actions/server.actions";
import { catchError, switchMap } from "rxjs/operators";
import {of} from 'rxjs'
import { ServiceServerService } from "src/app/core/services/service-server.service";
import {mergeMap} from 'rxjs/operators'
import { map } from "rxjs/operators";
import { Item } from "src/app/models/ItemTestM";

import * as DataActions from '../actions/server.actions'


@Injectable()
export class ServerEffects{

    getVideos$ = createEffect(() => {
        return this.actions$.pipe(ofType(DataActions.getVideos),
            mergeMap(() => {
                return this.serverService.getListTest().pipe(
                    map((authDate) => DataActions.serverDataSuccess({ authDate })),
                    catchError(error => of(DataActions.serverDataFailed(error.message)))
                )
            }
            
            )
        
        )
    });


    constructor(private actions$:Actions,private serverService:ServiceServerService ) {
     console.log(this.getVideos$, 'This Data')
    }

}