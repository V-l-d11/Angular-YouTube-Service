import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { SERVER_FEATURE_NAME, ServerState } from "../reducers/ServerReducer";


const getServerFeature = createFeatureSelector<ServerState>(SERVER_FEATURE_NAME);


export const getLoading = createSelector(getServerFeature,
 state=> state.loading
)

export const getLoaded = createSelector(getServerFeature,
   state=>state.loaded
)
 
export const getServerError = createSelector(getServerFeature,
  state=>state.serverError
)
 

export const getData = createSelector(getServerFeature,
 state=>state.authData
)



export const selectFeature = (state: ServerState) => state.authData
export const isLoadingSelector = createSelector(getServerFeature, (state) => state.loading)


export const videosSelector = createSelector(
  getServerFeature, 
  (state)=> state.authData
)

export const errorSelector = createSelector(
  getServerFeature,
  (state)=>state.serverError
)

