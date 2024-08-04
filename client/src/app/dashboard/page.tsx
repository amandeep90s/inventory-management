'use client';

import React from 'react';
import CardPopularProducts from '@/app/dashboard/CardPopularProducts';
import CardSalesSummary from '@/app/dashboard/CardSalesSummary';
import CardPurchaseSummary from '@/app/dashboard/CardPurchaseSummary';
import CardExpenseSummary from '@/app/dashboard/CardExpenseSummary';
import StatCard from '@/app/dashboard/StatCard';
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from 'lucide-react';

const Dashboard = () => {
	return (
		<div
			className={
				'custom-grid-rows grid grid-cols-1 gap-10 pb-4 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto'
			}
		>
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchaseSummary />
			<CardExpenseSummary />
			<StatCard
				title={'Customer & Expenses'}
				primaryIcon={<Package className={'h-6 w-6 text-blue-600'} />}
				dateRange={'22 -29 October 2023'}
				details={[
					{
						title: 'Customer Growth',
						amount: '175.00',
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: 'Expenses',
						amount: '10.00',
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
			/>
			<StatCard
				title={'Dues & Pending Orders'}
				primaryIcon={<CheckCircle className={'h-6 w-6 text-blue-600'} />}
				dateRange={'22 -29 October 2023'}
				details={[
					{
						title: 'Dues',
						amount: '250.00',
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: 'Pending Orders',
						amount: '147',
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
			/>
			<StatCard
				title={'Sales & Discount'}
				primaryIcon={<Tag className={'h-6 w-6 text-blue-600'} />}
				dateRange={'22 -29 October 2023'}
				details={[
					{
						title: 'Sales',
						amount: '1000.00',
						changePercentage: 20,
						IconComponent: TrendingUp,
					},
					{
						title: 'Discount',
						amount: '200.00',
						changePercentage: -10,
						IconComponent: TrendingDown,
					},
				]}
			/>
		</div>
	);
};

export default Dashboard;
