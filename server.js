const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.send('hi im a server')
})


app.listen(3000, () => {
	console.log('server is listening on Port 3000');
})