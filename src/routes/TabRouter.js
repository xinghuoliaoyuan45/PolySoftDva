import React from 'react'
import {Platform} from 'react-native'
import {TabNavigator, TabBarBottom} from 'react-navigation';
import Home from 'src/pages/Home';

let isShow = true;
let jusdagePermision;

if(isShow){
	jusdagePermision = {
		Home: {screen: Home}
	}
}

export default TabNavigator(
	 jusdagePermision
	, {
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			labelStyle: {
				color: 'black'
			},
			showIcon: true,
			showLabel: true,
			indicatorStyle: {backgroundColor: 'transparent'}
		},
		lazy: true,
		swipeEnabled: false,
		animationEnabled: Platform.OS === 'ios'
	}
)