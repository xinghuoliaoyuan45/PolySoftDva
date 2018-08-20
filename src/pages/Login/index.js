import React, {Component, PureComponent} from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Button
} from "react-native";

import {connect} from "react-redux";

class Login extends Component {
	static navigationOptions = {
		header: null
	};
	render(){
		return (
			<View>
				<View>
					<TextInput onChangeText={(text) => this.setState({username: text})}/>
				</View>
				<View>
					<TextInput onChangeText={(text) => this.setState({password: text})}/>
				</View>
				<TouchableOpacity onPress={()=>{
					// this.doLogin(this.state.username, this.state.password)
				}} style={{alignItems: 'center'}}>
					<Text>登录</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		app: state.app
	}
}
export default connect(mapStateToProps)(Login);