const INITIAL_STATE = {
	city: '', 
	stateInitials: '', 
	tempF: null, 
	tempC: null, 
	feelsLikeF: null, 
	feelsLikeC: null,
	weather: '',
	windSpeed: null,
	windDirection: '',
	rainTodayInches: null,
	searchLocation: '',
	typeOfSearch: ''
};
import { CITY_CHANGED, STATE_INITIAL, GET_CURRENT_SUCCESS, SELECTED_SEARCH
} from '../actions/types';


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CITY_CHANGED:
			return {...state, city: action.payload, searchLocation: action.payload};
		case STATE_INITIAL:
			return {...state, stateInitials: action.payload};
		case GET_CURRENT_SUCCESS:
			return {...state, 
				tempF: action.payload.temp_f,
				tempC: action.payload.temp_c,
				feelsLikeF: action.payload.feelslike_f,
				feelsLikeC: action.payload.feelslike_c,
				weather: action.payload.weather,
				windSpeed: action.payload.wind_mph,
				windDirection: action.payload.wind_dir,
				rainTodayInches: action.payload.precip_today_in,
				city: '',
				stateInitials: ''
			};
		case SELECTED_SEARCH:
			return {...state, typeOfSearch: action.payload};
		default: 
			return state;
	}
};