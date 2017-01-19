import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LandingPage from './components/landingPage';
import {Text} from 'react-native';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop:65 }}>
			<Scene 
				key="landing"
				component={LandingPage}
				title="Reactive Weather"
					/>
		</Router>
		);

};

export default RouterComponent;