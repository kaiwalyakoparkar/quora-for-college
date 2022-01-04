const express = require('express');
const app = express();

app.listen(3000,() => {
	console.log('Server has started on http://localhost:3000/');
});