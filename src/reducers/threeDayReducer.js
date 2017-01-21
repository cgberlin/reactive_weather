const INITIAL_STATE = {
	currentDay: {
		conditions: '',
		high: null,
		low: null
	},
	firstDay: {
		conditions: '',
		high: null,
		low: null
	},
	secondDay: {
		conditions: '',
		high: null,
		low: null
	},
	thirdDay: {
		conditions: '',
		high: null,
		low: null
	}
};

import {THREE_DAY_SUCCESS} from '../actions/types';

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case THREE_DAY_SUCCESS:
			console.log(state);
			let currentDayInfo = action.payload.forecastday[0];
			let firstDayInfo = action.payload.forecastday[1];
			let secondDayInfo = action.payload.forecastday[2];
			let thirdDayInfo = action.payload.forecastday[3];
			return {...state, 
				currentDay: {
					conditions: currentDayInfo.conditions,
					high: currentDayInfo.high,
					low: currentDayInfo.low
				},
				firstDay: {
					conditions: firstDayInfo.conditions,
					high: firstDayInfo.high,
					low: firstDayInfo.low
				},
				secondDay: {
					conditions: secondDayInfo.conditions,
					high: secondDayInfo.high,
					low: secondDayInfo.low
				},
				thirdDay: {
					conditions: thirdDayInfo.conditions,
					high: thirdDayInfo.high,
					low: thirdDayInfo.low
				}

			};
		default:
			return state;
	}
};