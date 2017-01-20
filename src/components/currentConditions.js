import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Input, CardSection} from './common';

class CurrentConditions extends Component {
	render() {
		return (
			<Image style = {styles.containerStyle} source = {require('../images/city.jpeg')}>
				<Input 
					label="City:"
					placeholder="Los Angeles"
				/>
			</Image>
			);
	}
}
const styles = {
	containerStyle: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)'
	}
}

export default CurrentConditions;