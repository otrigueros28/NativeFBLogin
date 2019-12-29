import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Landing from '../screens/Landing'

const SwitchNavigator = createSwitchNavigator(
	{
		Login: {
			screen: Login
		},
		Signup: {
			screen: Signup
		},
		Landing: {
			screen: Landing
		}
	},
	{
		initialRouteName: 'Login'
	}
)

export default createAppContainer(SwitchNavigator)
