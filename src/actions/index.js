import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {CITY_CHANGED, GET_CURRENT_SUCCESS, STATE_INITIAL, SELECTED_SEARCH, THREE_DAY_SUCCESS, TEN_DAY_SUCCESS
} from './types';

export const cityChanged = (text) => {
	return {
		type: CITY_CHANGED,
		payload: text
	};
};

export const selectedAType = (WhichOne) => {
	return {
		type: SELECTED_SEARCH,
		payload: WhichOne
	};
};

export const stateInitialChanged = (text) => {
	return {
		type: STATE_INITIAL,
		payload: text
	};
};

export const getThreeDay = (city, stateInitials) => {
	return (dispatch) => {
		axios.get('https://api.wunderground.com/api/ce6b94f1b0cbafe0/forecast/q/'+stateInitials+'/'+city+'.json')
			.then(response => {
				dispatch({
					type: THREE_DAY_SUCCESS,
					payload: response.data.forecast.simpleforecast
				});
				Actions.threeDayDisplay();
			})
			.catch((error) => alert("something went wrong"));
	};
};

export const getTenDay = (city, stateInitials) => {
	return (dispatch) => {
		axios.get('https://api.wunderground.com/api/ce6b94f1b0cbafe0/forecast10day/q/'+stateInitials+'/'+city+'.json')
			.then(response => {
				dispatch({
					type: TEN_DAY_SUCCESS,
					payload: response.data.forecast.simpleforecast
				});
				Actions.tenDayDisplay();
			})
			.catch((error) => alert("something went wrong"));
	};
};

export const getCurrentCondition = (city, stateInitials) => {
	return (dispatch) => {
		axios.get('https://api.wunderground.com/api/ce6b94f1b0cbafe0/conditions/q/'+stateInitials+'/'+city+'.json')
			.then(response => {
				dispatch({
					type: GET_CURRENT_SUCCESS,
					payload: response.data.current_observation
				});
				Actions.currentConditionDisplay();
			})
			.catch((error) => alert("something went wrong"));
	};
};