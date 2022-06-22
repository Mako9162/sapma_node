const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
require ('dotenv').config();

//Inicializar
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
//Middlewares
app.use(morgan('dev'));

//Variables Globales


//Rutas
app.use(require('./routes'));

//Archivos Publicos


//Iniciar Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
    
