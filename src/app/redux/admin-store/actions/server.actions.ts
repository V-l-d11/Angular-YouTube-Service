import { createAction, props } from '@ngrx/store'
import { Item } from '../../../models/ItemTestM'


export const loadserverData = createAction('[Server Data] serverData success')


export const serverDataSuccess = createAction('[Server Data] serverData success',props<{
    authDate: Item[]
}>())

export const serverDataFailed = createAction('[Server Data] serverDate failed', props<{
    serverError:string
}>())


export const getVideos = createAction('[Server Data] get Data')

