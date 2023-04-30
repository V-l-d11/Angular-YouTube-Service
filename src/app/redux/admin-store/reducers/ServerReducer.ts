import { createReducer, on } from "@ngrx/store"
import { Item, Root } from "src/app/models/ItemTestM";
import { getVideos, loadserverData, serverDataFailed, serverDataSuccess } from "../actions/server.actions";
import { getLoading } from "../selectors/server.selector";


export const SERVER_FEATURE_NAME = 'servVideo';


export interface ServerState{
    loading: boolean
    loaded: boolean
    serverError: string 
    authData?:Item[] |null
}


const initialState: ServerState = {
    loaded: true,
    loading: false,
    serverError: '',
    authData: [],
    
}

export const serverReducer = createReducer(
    initialState,
    on(getVideos, (state) =>  state.loaded ? state: ({
        ...state,
        loading:true 
    }))
    ,
    on(loadserverData, (state) => ({
        ...state,
        loading: true
    })),
    on(serverDataSuccess, (state, action ) => ({
        ...state,
        authData:action.authDate,
        loaded: true,
        loading: false,
        serverError: ''
    })), 
    on(serverDataFailed, (state, action) => ({
     ...state,
        serverError:action.serverError
    
    }))

)