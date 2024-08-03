import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';

export const getDashboardMetrics = async (req: Request, res: Response): Promise<void> => {
	try {
		// Get popular products
		const popularProducts = await prisma.products.findMany({
			take: 15,
			orderBy: { stockQuantity: 'desc' },
		});
		// Get sales summary
		const salesSummary = await prisma.salesSummary.findMany({ take: 5, orderBy: { date: 'desc' } });
		// Get purchase summary
		const purchaseSummary = await prisma.purchaseSummary.findMany({
			take: 5,
			orderBy: { date: 'desc' },
		});
		// Get expenses summary
		const expenseSummary = await prisma.expenseSummary.findMany({
			take: 5,
			orderBy: { date: 'desc' },
		});
		// Get expense by category summary raw
		const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
			take: 5,
			orderBy: { date: 'desc' },
		});
		// Get expense by category summary
		const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => ({
			...item,
			amount: item.amount.toString(),
		}));
		res.json({
			expenseSummary,
			expenseByCategorySummary,
			popularProducts,
			purchaseSummary,
			salesSummary,
		});
	} catch (error) {
		res.status(500).json({ message: 'Error fetching dashboard metrics' });
	}
};
