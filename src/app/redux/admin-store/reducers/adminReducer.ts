import { createReducer, on } from "@ngrx/store"
import { addVideo } from "../actions/admin.actions";

export const ADMIN_FEATURE_NAME = 'admin';


export interface AdminState{
    title: string
    description?: string
    url: string
    linkVideo: string 
    date:string 
}



const initialState: AdminState = {
    title: '',
    description: '',
    url: '',
    linkVideo: '',
    date: ''
};

export const adminReducer = createReducer(
    initialState,
    on(addVideo, (state, adminState:AdminState) => ({
        ...state,
        adminState 
    }) )
);

