import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {Text, View, Image} from 'react-native';
import {Button, CardSection} from './common';
import {selectedAType} from '../actions';

class NavPage extends Component {
	selectedCurrent() {
		Actions.locationSelector();
		this.props.selectedAType("current");
	}

	selectedThreeDay() {
		Actions.locationSelector();
		this.props.selectedAType("threeDay");
	}

	selectedTenDay() {
		Actions.locationSelector();
		this.props.selectedAType("tenDay");
	}

	render() {
		return (
			<Image style = {styles.backgroundImageStyle} source = {require('../images/rain.jpeg')}>
				<View style={styles.sectionStyle}>
					<Button onPress={this.selectedCurrent.bind(this)}>
						Current Conditions
					</Button>
				</View>

				<View style={styles.sectionStyle}>
					<Button onPress={this.selectedThreeDay.bind(this)}>
						3 Day Forecast
					</Button>
				</View>
				
				<View style={styles.sectionStyle}>
					<Button onPress={this.selectedTenDay.bind(this)}>
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

export default connect(null, {selectedAType})(NavPage);