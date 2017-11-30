import React, {Component} from 'react';
import {
	StackNavigator,
} from 'react-navigation';

import {Product} from './Product.js';
import {ProductDetails} from './Product.js';

export const ProductStack = StackNavigator.create({
		Product: {screen: Product},
		Details: {screen: ProductDetails},
	},
	{
		headerMode: 'none',
		initialRouteName: 'Product',
	}
);  