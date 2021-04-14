import React from 'react';

export const totalPriceItems = order => order.price * order.count;

export function formatCurrency(prices) {

	const formatPrice = prices.toLocaleString('ru-RU',
		{ style: 'currency', currency: 'RUB' })

	return (formatPrice);
};