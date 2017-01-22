import React from 'react';
import {Text} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LandingPage from './components/landingPage';
import NavPage from './components/navPage';
import LocationSelector from './components/locationSelector';
import CurrentConditionDisplay from './components/currentConditionDisplay';
import ThreeDayDisplay from './components/threeDayDisplay';
import TenDayDisplay from './components/tenDayDisplay';


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
				<Scene
					key="locationSelector"
					component={LocationSelector}
					title="Enter Location"
				/>
				<Scene
					key="currentConditionDisplay"
					component={CurrentConditionDisplay}
					title="Current Conditions"
				/>
				<Scene 
					key="threeDayDisplay"
					component={ThreeDayDisplay}
					title="Three Day Forecast"
				/>
				<Scene
					key="tenDayDisplay"
					component={TenDayDisplay}
					title="Ten Day Forecast"
					/>
			</Scene>
		</Router>
		);

};

export default RouterComponent;