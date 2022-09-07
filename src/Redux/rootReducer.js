// import { combineReducers } from 'redux';

// import { app } from './app/reducer';
import { dashboardSlice } from '../Views/afterAuth/Dashboard/Redux/reducer';

export const rootReducer = {
	// app,
	dashboard: dashboardSlice.reducer,
};
