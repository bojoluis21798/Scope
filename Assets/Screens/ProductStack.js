import React, {Component} from 'react';
import {
	StackNavigator,
} from 'react-navigation';

import {Product} from './Product.js';
import {NewProduct} from './ProductDetails.js';

export const ProductStack = StackNavigator({
		Product: {screen: Product},
		Details: {screen: NewProduct},
	},
	{
		headerMode: 'none',
		initialRouteName: 'Product',
	}
);  