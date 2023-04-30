import {
    ActionReducerMap, MetaReducer
} from '@ngrx/store';
import { ADMIN_FEATURE_NAME, AdminState, adminReducer } from './reducers/adminReducer';
import { SERVER_FEATURE_NAME, ServerState, serverReducer } from './reducers/ServerReducer';
  

export interface State{
    [ADMIN_FEATURE_NAME]: AdminState
    [SERVER_FEATURE_NAME]:ServerState
}

export const reducers: ActionReducerMap<State> = {
    [ADMIN_FEATURE_NAME]: adminReducer,
    [SERVER_FEATURE_NAME]:serverReducer,
}