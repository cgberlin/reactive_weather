import React, {Component} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Input, CardSection} from './common';
import {cityChanged, getCurrentCondition, stateInitialChanged} from '../actions';

class LocationSelector extends Component {
	onCityChange(text) {
		this.props.cityChanged(text);
	}
	onStateInitialChange(text) {
		this.props.stateInitialChanged(text);
	}
	onGetCurrentWeather(){
		if (!this.props.city) {
			alert('Need to enter a city to search.');
		}
		else if (!this.props.stateInitials) {
			alert('Need to enter state initials to search.');
		}
		else {
			this.props.getCurrentCondition(this.props.city, this.props.stateInitials);
		}
	}
	render() {
		return (
			<Image style = {styles.containerStyle} source = {require('../images/city.jpeg')}>
				<View style = {styles.formStyle}>
					<Input 
						label="City:"
						placeholder="Los Angeles"
						onChangeText={this.onCityChange.bind(this)}
						value={this.props.city}
						capitalize="words"
					/>
					
					<Input
						label="State:"
						placeholder="CA"
						maxLength={2}
						capitalize="characters"
						onChangeText={this.onStateInitialChange.bind(this)}
						value={this.props.stateInitials}
					/>
				</View>
				<TouchableOpacity onPress={this.onGetCurrentWeather.bind(this)}>
					<Text style={styles.searchStyle}>Search</Text>
				</TouchableOpacity>
			</Image>
			);
	}
}
const styles = {
	containerStyle: {
		flex:1,
		alignItems:'center',
		justifyContent: 'center',
		width:null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)'
	},
	searchStyle: {
		color:'white',
		fontSize:25,
		backgroundColor: '#007aff',
		padding:15,
		marginBottom:10,
		marginTop:10
	},
	formStyle: {
		width:400,
		height:200,
	}
}

const mapStateToProps = (state) => {
	return {
		city: state.main.city,
		stateInitials: state.main.stateInitials,
	};
};

export default connect(mapStateToProps, {cityChanged, getCurrentCondition, stateInitialChanged})(LocationSelector);