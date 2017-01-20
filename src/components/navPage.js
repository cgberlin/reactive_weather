import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Text, View, Image} from 'react-native';
import {Button, CardSection} from './common';

class NavPage extends Component {
	render() {
		return (
			<Image style = {styles.backgroundImageStyle} source = {require('../images/rain.jpeg')}>
				<View style={styles.sectionStyle}>
					<Button onPress={() => Actions.currentConditions()}>
						Current Conditions
					</Button>
				</View>

				<View style={styles.sectionStyle}>
					<Button>
						3 Day Forecast
					</Button>
				</View>
				
				<View style={styles.sectionStyle}>
					<Button>
						10 Day Forecast
					</Button>
				</View>
			</Image>
		);	
	}
};	

const styles = {
	backgroundImageStyle: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)'
	},
	sectionStyle: {
		backgroundColor:'rgba(0,0,0,0)',
		margin:20,
		height:50,
		padding:4,
		width: 300,
		justifyContent: 'flex-start',
		flexDirection:'row'
	}
};

export default NavPage;