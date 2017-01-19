import React, {Component} from 'react';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

class App extends Component {
	componentWillMount() {
		  const config = {
		    apiKey: 'AIzaSyBbtStjUjpK3rmCD8Z0LYDssBNNJqAL2rM',
		    authDomain: 'manager-afa51.firebaseapp.com',
		    databaseURL: 'https://manager-afa51.firebaseio.com',
		    storageBucket: 'manager-afa51.appspot.com',
		    messagingSenderId: '60676620467'
		  };
		  firebase.initializeApp(config);
		}
	render() {
		return (
			<Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
			);
	}
}

export default App;