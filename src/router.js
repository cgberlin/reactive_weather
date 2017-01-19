import React from 'react';
import {Text} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LandingPage from './components/landingPage';
import NavPage from './components/navPage';


const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop:65 }}>
			<Scene key="initialBucket">
				<Scene 
					key="landing"
					component={LandingPage}
					title="Reactive Weather"
					initial
						/>
			</Scene>
			<Scene key="mainBucket">
				<Scene
					key="navPage"
					component={NavPage}
					title="Choose Service"
					initial
					/>
			</Scene>
		</Router>
		);

};

export default RouterComponent;