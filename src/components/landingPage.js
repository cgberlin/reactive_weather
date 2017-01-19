import React, {Component} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';


class LandingPage extends Component {
	render() {
		return (
			<Image style = {styles.backgroundImageStyle} source = {require('../images/main_background.jpeg')}>
				<TouchableOpacity onPress={() => {Actions.mainBucket()}}>
					<Text style={styles.textStyle}>Lets Go!</Text>
				</TouchableOpacity>
			</Image>
			);
	}
}

const styles = {
	backgroundImageStyle: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)'
	},
	textStyle: {
		fontSize:30,
		textAlign:'center',
		color:'white'
	}
};
export default LandingPage;