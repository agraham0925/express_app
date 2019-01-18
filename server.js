const express = require('express');
const app = express();

const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fetch = require('node-fetch');

// const api = 'https://swapi.co/api/person';


app.get('/', (request, response) => {
	response.send('hi im a server')
})

app.get('/:id', (req, res) => {
	const index = req.params.id

	const url = "https://swapi.co/api/people/" + index

	const getData = async url => {
  		try {
   			const response = await fetch(url);
   			const json = await response.json();
   			console.log(json);
  		} catch (error) {
    	console.log(error);
  	}
};

getData(url);

	// fetch("https://swapi.co/api/person/" + index)
	// 	.then(res => res.json())
 //    	.then(json => console.log(json));

	// res.json(res);
})


app.listen(PORT, () => {
	console.log('server is listening on Port 3000');
})