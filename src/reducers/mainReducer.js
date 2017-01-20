const INITIAL_STATE = {city: ''};
import { CITY_CHANGED
} from '../actions/types';


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CITY_CHANGED:
			console.log(state);
			return {...state, city: action.payload};
		default: 
			return state;
	}
};