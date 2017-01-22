import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card} from './common';

class TenDayCard extends Component {
	render(props) {
		return (

			<View>
				<Text style={styles.headTextStyle}>{this.props.month} {this.props.date}</Text>
					<Card>	
						<Text style={styles.secondHeadStyle}>Conditions</Text>
						<Text style={styles.tempTextStyle}>{this.props.conditions}</Text>

						<Text style={styles.secondHeadStyle}>Temperature</Text>
						<View style={styles.tempStyle}>
							<View style={{alignItems:'center'}}>
								<Text style={styles.tempTextStyle}>High</Text>
								<Text style={styles.tempTextStyle}>{this.props.highTemp} F</Text>
							</View>
							<View style={{alignItems:'center'}}>
								<Text style={styles.tempTextStyle}>Low</Text>
								<Text style={styles.tempTextStyle}>{this.props.lowTemp} F</Text>
							</View>
						</View>
					</Card>
				</View>
			);
	}
}

const styles = {
	tempStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'center'
	},
	tempTextStyle: {
		margin:5,
		fontSize:10,
		alignSelf:'center',
	},
	headTextStyle: {
		fontSize:18,
		alignSelf:'center',
		color:'white',
		textShadowColor:'#007aff',
		textShadowOffset:{width:.5, height:.5},
		backgroundColor:'rgba(0,0,0,0)'
	},
	secondHeadStyle: {
		fontSize:12,
		alignSelf:'center'
	}
}

export default TenDayCard;
