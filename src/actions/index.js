import {CITY_CHANGED
} from './types';

export const cityChanged = (text) => {
	return {
		type: CITY_CHANGED,
		payload: text
	};
};