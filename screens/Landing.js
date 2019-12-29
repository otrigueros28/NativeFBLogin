import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'

class Landing extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Logged in with: {this.props.user.email}</Text>
				<Text>GPS will page will need to populate here</Text>
				<TouchableOpacity style={styles.button} onPress={this.handleSignout}>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 5,
		alignItems: 'center',
		backgroundColor: 'blue',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 5,
		width: 75
	},
	buttonText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#fff'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Landing)
