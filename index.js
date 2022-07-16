const express = require('express');
const app = express();
const { create } = require('express-handlebars');

const hbs = create({
	extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/login', (req, res) => {
	// tenemos una especie de base de datos
	const datos = [
		{
			url: 'www.google.com/devschool1',
			uelShort: 'sasdsad1',
		},
		{
			url: 'www.google.com/devschool2',
			uelShort: 'sasdsad2',
		},
		{
			url: 'www.google.com/devschool3',
			uelShort: 'sasdsad3',
		},
	];
	// cuando renderizamos, tambien le pasamos los datos, esto va a ir a la pagina y de ahi lo podemos utilizar
	res.render('login', { datos });
});

app.use(express.static(__dirname + '/public'));
app.listen(5000, console.log('server funcionando'));
