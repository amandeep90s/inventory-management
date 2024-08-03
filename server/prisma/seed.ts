import { PrismaClient } from '@prisma/client';
import path from 'path';
import * as fs from 'node:fs';

const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
	const modelNames = orderedFileNames.map((fileName) => {
		const modelName = path.basename(fileName, path.extname(fileName));
		return modelName.charAt(0).toUpperCase() + modelName.slice(1);
	});

	await Promise.all(
		modelNames.map(async (modelName) => {
			const model: any = prisma[modelName as keyof typeof prisma];
			if (model) {
				await model.deleteMany({});
				console.log(`Cleared data from ${modelName}`);
			} else {
				console.error(
					`Model ${modelName} not found. Please ensure the model name is correctly specified`,
				);
			}
		}),
	);
}

async function main() {
	const dataDirectory = path.join(__dirname, 'seedData');

	const orderedFileNames = [
		'products.json',
		'expenseSummary.json',
		'sales.json',
		'salesSummary.json',
		'purchases.json',
		'purchaseSummary.json',
		'users.json',
		'expenses.json',
		'expenseByCategory.json',
	];

	await deleteAllData(orderedFileNames);

	await Promise.all(
		orderedFileNames.map(async (fileName) => {
			const filePath = path.join(dataDirectory, fileName);
			const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
			const modelName = path.basename(fileName, path.extname(fileName));
			const model: any = prisma[modelName as keyof typeof prisma];

			if (!model) {
				console.error(`No Prisma model matches the file name: ${fileName}`);
				return;
			}

			await Promise.all(
				jsonData.map(async (data: any) => {
					await model.create({ data });
				}),
			);

			console.log(`Seeded ${modelName} with data from ${fileName}`);
		}),
	);
}

main()
	.catch((error) => console.error(error))
	.finally(async () => prisma.$disconnect());
