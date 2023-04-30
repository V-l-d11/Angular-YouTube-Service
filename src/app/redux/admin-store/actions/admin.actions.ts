import {createAction, props} from '@ngrx/store'


export const addVideo = createAction('[Admin] addVideo', props<{
    title: string
    description?: string
    url: string
    linkVideo: string 
    date:string 
}>());
