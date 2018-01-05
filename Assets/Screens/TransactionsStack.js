import {StackNavigator} from 'react-navigation';
import {Logs} from './TransactionLog.js';
import {NewTransaction} from './NewTransaction.js';
import {Order} from './Order.js';

export const TransactionsStack = StackNavigator({
	Log: {
		screen: Logs,
	},
	New: {
		screen: NewTransaction,
		navigationOptions: {
			drawerLockMode: "locked-closed",
		},
	},
	Order: {
		screen: Order,
		navigationOptions: {
			drawerLockMode: "locked-closed",
		},
	},
}, {headerMode: 'none'});