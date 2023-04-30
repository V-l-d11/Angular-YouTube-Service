import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ADMIN_FEATURE_NAME, AdminState } from '../reducers/adminReducer';


const getFeature = createFeatureSelector<AdminState>(ADMIN_FEATURE_NAME);


export const getUrl = createSelector(
    getFeature,
     state=> state.url
)


export const getTitle = createSelector(
    getFeature,
    state=>state.title
)

export const getDate = createSelector(
    getFeature,
    state=>state.date
)

export const getLinkVideo = createSelector(
    getFeature,
    state=>state.linkVideo
)

export const getDescription = createSelector(
    getFeature,
    state=>state.description
)

