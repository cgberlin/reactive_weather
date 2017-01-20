import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Input, CardSection} from './common';
import {cityChanged} from '../actions';

class CurrentConditions extends Component {
	onCityChange(text) {
		this.props.cityChanged(text);
	}
	render() {
		return (
			<Image style = {styles.containerStyle} source = {require('../images/city.jpeg')}>
				<Input 
					label="City:"
					placeholder="Los Angeles"
					onChangeText={this.onCityChange.bind(this)}
					value={this.props.city}
				/>
				<TouchableOpacity>
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
		justifyContent:'center',
		width:null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)'
	},
	searchStyle: {
		color:'white',
		fontSize:25,
		backgroundColor: '#007aff',
		padding:15,
		marginBottom:10
	}
}

const mapStateToProps = (state) => {
	return {
		city: state.main.city
	};
};

export default connect(mapStateToProps, {cityChanged})(CurrentConditions);