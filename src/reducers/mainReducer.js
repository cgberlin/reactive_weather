const INITIAL_STATE = {isRaining: false};
import { check_weather
} from '../actions/types';


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case check_weather:
			return {...state, isRaining:true};
		default: 
			return state;
	}
};