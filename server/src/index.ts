import app from './app';

// Start the server
app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`);
});
