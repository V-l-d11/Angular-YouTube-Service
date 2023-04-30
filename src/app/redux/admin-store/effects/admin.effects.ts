import { Injectable} from '@angular/core'
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { addVideo } from '../actions/admin.actions';
import {switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

@Injectable()

export class AdminEffects{
  

    addVideo$ = createEffect(() => this.actions$.pipe(
        ofType(addVideo),
        switchMap(action => of(addVideo({
            title: action.title,
            url: action.url,
            description: action.description,
            linkVideo: action.linkVideo,
            date:action.date
        })))
    ));

    constructor(
        private actions$:Actions,
    ) {
        
    }
}