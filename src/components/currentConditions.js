import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
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

const mapStateToProps = (state) => {
	return {
		city: state.main.city
	};
};

export default connect(mapStateToProps, {cityChanged})(CurrentConditions);