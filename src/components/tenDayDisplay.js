import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card} from './common';
import TenDayCard from './tenDayCard.js';

class TenDayDisplay extends Component {
	createCards() {
		return this.props.tenDayForecastData.map(day => 
			<TenDayCard 
					key={day.date.day}
					month={day.date.monthname} 
					conditions={day.conditions}
					date={day.date.day} 
					highTemp={day.high.fahrenheit} 
					lowTemp={day.low.fahrenheit}
					/>
			);
	}

	render() {
		return (
			<Image style = {styles.containerStyle} source = {require('../images/sky.jpg')}>
				{this.createCards()}
			</Image>
			);
	}
}

const styles = {
	containerStyle: {
		flex:1,
		flexDirection: 'row',
		alignItems:'center',
		justifyContent: 'space-around',
		flexWrap:'wrap',
		width:null,
		height:null
	},
	tempStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center'
	},
	tempTextStyle: {
		margin:5,
		fontSize:18,
		alignSelf:'center',
	},
	headTextStyle: {
		fontSize:30,
		alignSelf:'center',
		color:'white',
		textShadowColor:'#007aff',
		textShadowOffset:{width:.5, height:.5},
		backgroundColor:'rgba(0,0,0,0)'
	},
	secondHeadStyle: {
		fontSize:25,
		alignSelf:'center'
	}
}

const mapStateToProps = (state) => {
	return {
		tenDayForecastData: state.tenDay.tenDayForecastData
	};
};

export default connect(mapStateToProps, null)(TenDayDisplay);