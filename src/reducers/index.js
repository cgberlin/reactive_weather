import {combineReducers} from 'redux';
import MainReducer from './mainReducer';
import threeDayReducer from './threeDayReducer';
import tenDayReducer from './tenDayReducer';

export default combineReducers({
	main: MainReducer,
	threeDay: threeDayReducer,
	tenDay: tenDayReducer
});