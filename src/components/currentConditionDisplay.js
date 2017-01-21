import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Image} from 'react-native';

class CurrentConditionDisplay extends Component {
	render() {
		return (
			<Image style = {styles.containerStyle} source = {require('../images/sky.jpg')}>
				
					<Text style={styles.headTextStyle}>{this.props.searchLocation}</Text>

					<View>
						<Text style={styles.secondHeadStyle}>Weather</Text>
						<Text style={styles.tempTextStyle}>{this.props.weather}</Text>
					</View>

					<View>
						<Text style={styles.secondHeadStyle}>Temperature</Text>
						<View style={styles.tempStyle}>
							<Text style={styles.tempTextStyle}>{this.props.tempF} F</Text>
							<Text style={styles.tempTextStyle}>{this.props.tempC} C</Text>
						</View>
					</View>

					<View>
						<Text style={styles.secondHeadStyle}>Feels Like</Text>
						<View style={styles.tempStyle}>
							<Text style={styles.tempTextStyle}>{this.props.feelsLikeF} F</Text>
							<Text style={styles.tempTextStyle}>{this.props.feelsLikeC} C</Text>
						</View>
					</View>

					<View>
						<Text style={styles.secondHeadStyle}>Wind</Text>
						<View style={styles.tempStyle}>
							<Text style={styles.tempTextStyle}>Direction: {this.props.windDirection}</Text>
							<Text style={styles.tempTextStyle}>Speed: {this.props.windSpeed}mph</Text>
						</View>
					</View>
					

					<Text>{this.props.rainTodayInches}" of rain today</Text>

			</Image>
			);
	}
}

const styles = {
	containerStyle: {
		flex:1,
		alignItems:'center',
		justifyContent: 'space-between',
		width:null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)'
	},
	tempStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center'
	},
	tempTextStyle: {
		margin:5,
		fontSize:20,
		alignSelf:'center',
		color:'#007aff',
		textShadowColor:'white',
		textShadowOffset:{width:.5, height:.5}
	},
	headTextStyle: {
		color:'white',
		fontSize:40,
		alignSelf:'center'
	},
	secondHeadStyle: {
		color:'white',
		fontSize:30,
		alignSelf:'center'
	}
}

const mapStateToProps = (state) => {
	return ({
		tempF: state.main.tempF, 
		tempC: state.main.tempC, 
		feelsLikeF: state.main.feelsLikeF, 
		feelsLikeC: state.main.feelsLikeC,
		weather: state.main.weather,
		windSpeed: state.main.windSpeed,
		windDirection: state.main.windDirection,
		rainTodayInches: state.main.rainTodayInches,
		searchLocation: state.main.searchLocation
		});
};

export default connect(mapStateToProps,{})(CurrentConditionDisplay);