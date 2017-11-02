import React, {Component} from 'react';
import {
	View,
	StyleSheet,
} from 'react-native';
import {Font} from 'expo';
import {styles} from '../styles.js';
import {Status} from './Status.js';
import {TopBar} from './TopBar.js';

export class TransactionLog extends Component{
	static navigationOptions = {
		header: null,
		drawerLabel: "Transaction Log",
	}

	render(){
		return(
			<View style={styles.container}>
				<Status />
				<TopBar title="Transaction Log" />
				<View style={[styles.body, local.body]}>
					<View style={{
						flex: 1,
					}}>
						<View style={local.status}>
							
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const local = StyleSheet.create({
	body: {
		flexDirection: 'row',
		borderWidth: 2,
	},
	status: {

	},
});
