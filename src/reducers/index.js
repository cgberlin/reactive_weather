import {combineReducers} from 'redux';
import MainReducer from './mainReducer';
import threeDayReducer from './threeDayReducer';

export default combineReducers({
	main: MainReducer,
	threeDay: threeDayReducer
});