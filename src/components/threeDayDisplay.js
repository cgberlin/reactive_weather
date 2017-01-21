import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card} from './common';

class ThreeDayDisplay extends Component {
	render() {
		return (
			<Image style = {styles.containerStyle} source = {require('../images/sky.jpg')}>

				<View style={styles.tempStyle}>
					<View>
						<Text style={styles.headTextStyle}>Current</Text>
						<Card>	
							<Text style={styles.secondHeadStyle}>Conditions</Text>
							<Text style={styles.tempTextStyle}>{this.props.currentDay.conditions}</Text>

							<Text style={styles.secondHeadStyle}>Temperature</Text>
							<View style={styles.tempStyle}>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>High</Text>
									<Text style={styles.tempTextStyle}>{this.props.currentDay.high.fahrenheit} F</Text>
								</View>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>Low</Text>
									<Text style={styles.tempTextStyle}>{this.props.currentDay.low.fahrenheit} F</Text>
								</View>
							</View>
						</Card>
					</View>

					<View>
						<Text style={styles.headTextStyle}>Tomorrow</Text>
						<Card>
							<Text style={styles.secondHeadStyle}>Conditions</Text>
							<Text style={styles.tempTextStyle}>{this.props.firstDay.conditions}</Text>

							<Text style={styles.secondHeadStyle}>Temperature</Text>
							<View style={styles.tempStyle}>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>High</Text>
									<Text style={styles.tempTextStyle}>{this.props.firstDay.high.fahrenheit} F</Text>
								</View>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>Low</Text>	
									<Text style={styles.tempTextStyle}>{this.props.firstDay.low.fahrenheit} F</Text>
								</View>
							</View>
						</Card>
					</View>
				</View>
				<View style={styles.tempStyle}>
					<View>
						<Text style={styles.headTextStyle}>Second Day</Text>
						<Card>
							<Text style={styles.secondHeadStyle}>Conditions</Text>
							<Text style={styles.tempTextStyle}>{this.props.secondDay.conditions}</Text>

							<Text style={styles.secondHeadStyle}>Temperature</Text>
							<View style={styles.tempStyle}>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>High</Text>
									<Text style={styles.tempTextStyle}>{this.props.secondDay.high.fahrenheit} F</Text>
								</View>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>Low</Text>
									<Text style={styles.tempTextStyle}>{this.props.secondDay.low.fahrenheit} F</Text>
								</View>
							</View>
						</Card>
					</View>

					<View>
						<Text style={styles.headTextStyle}>Third Day</Text>
						<Card>
							<Text style={styles.secondHeadStyle}>Conditions</Text>
							<Text style={styles.tempTextStyle}>{this.props.thirdDay.conditions}</Text>

							<Text style={styles.secondHeadStyle}>Temperature</Text>
							<View style={styles.tempStyle}>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>High</Text>
									<Text style={styles.tempTextStyle}>{this.props.thirdDay.high.fahrenheit} F</Text>
								</View>
								<View style={{alignItems:'center'}}>
									<Text style={styles.tempTextStyle}>Low</Text>
									<Text style={styles.tempTextStyle}>{this.props.thirdDay.low.fahrenheit} F</Text>
								</View>
							</View>
						</Card>
					</View>
				</View>
			</Image>
			);
	}
}

const styles = {
	containerStyle: {
		flex:1,
		alignItems:'center',
		justifyContent: 'space-around',
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
		currentDay: state.threeDay.currentDay,
		firstDay: state.threeDay.firstDay,
		secondDay: state.threeDay.secondDay,
		thirdDay: state.threeDay.thirdDay
	};
};

export default connect(mapStateToProps, null)(ThreeDayDisplay);