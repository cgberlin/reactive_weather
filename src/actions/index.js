import axios from 'axios';
import {CITY_CHANGED, GET_CURRENT_CONDITION, STATE_INITIAL
} from './types';

export const cityChanged = (text) => {
	return {
		type: CITY_CHANGED,
		payload: text
	};
};

export const stateInitialChanged = (text) => {
	return {
		type: STATE_INITIAL,
		payload: text
	};
};

export const getCurrentCondition = (city, stateInitials) => {
	return (dispatch) => {
		axios.get('https://api.wunderground.com/api/ce6b94f1b0cbafe0/conditions/q/'+stateInitials+'/'+city+'.json')
			.then(response => console.log(response))
			.catch((error) => console.log(error));
	}
}