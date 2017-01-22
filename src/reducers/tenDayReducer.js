const INITIAL_STATE = {
	tenDayForecastData: []
};

import {TEN_DAY_SUCCESS} from '../actions/types';

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TEN_DAY_SUCCESS:
			console.log(state);
			return {...state, 
				tenDayForecastData: action.payload.forecastday
			};
		default:
			return state;
	}
};