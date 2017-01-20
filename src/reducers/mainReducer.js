const INITIAL_STATE = {city: '', stateInitials: ''};
import { CITY_CHANGED, STATE_INITIAL
} from '../actions/types';


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CITY_CHANGED:
			return {...state, city: action.payload};
		case STATE_INITIAL:
			return {...state, stateInitials: action.payload};
		default: 
			return state;
	}
};