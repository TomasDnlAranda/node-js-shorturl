// utilizamos express llamandolo con require
const express = require('express');
// utilizamos el servidor
const app = express();
// utilizamos el create de express handlebars
const { create } = require('express-handlebars');

// cambiamos la extension y la guardamos en variable para despus configurarla
const hbs = create({
	extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

// en la raiz principal lo que va a renderizar es el home, con la configuracion previa buscara en views
app.get('/', (req, res) => {
	res.render('home');
});

// colocamos ultimo el middleware para que lo interecptte antes de dar la respuesta al cliente
app.use(express.static(__dirname + '/public'));
// levantamos el server
app.listen(5000, console.log('server funcionando'));
