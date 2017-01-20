import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style = {containerStyle}> 
			<Text style = {labelStyle}>{props.label}</Text>
			<TextInput
				placeholder={props.placeholderText}
				autoCorrect={false}
				style = {inputStyle}
				value={props.value}
				onChangeText={props.onChangeText}
				secureTextEntry = {props.secureTextEntry}
			/>
		</View>
		);
};

const styles = {
	inputStyle: {
		color: 'white',
		paddingRight: 5,
		paddingLeft: 1,
		fontSize: 40,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 40,
		paddingLeft: 20,
		flex: 1,
		color:'white'
	},
	containerStyle: {
		height:40,
		flex: 1,
		flexDirection:'row',
		alignItems:'center'
	}
};

export { Input };