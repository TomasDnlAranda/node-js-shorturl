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

app.use(express.static(__dirname + '/public'));
app.listen(5000, console.log('server funcionando'));
