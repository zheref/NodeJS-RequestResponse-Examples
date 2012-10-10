var express = require('express'); // El Framework Web como tal
var cons = require('consolidate'); // Libreria que nos permite configurar cualquier Template Engine
var swig = require('swig');

var gets = require('./routes');
var posts = require('./calls');

var app = express(); // Nuestra aplicacion EXPRESS

app.set('port', process.env.PORT || 3000);

app.engine('ntml', cons.swig); // Asignamos el TemplateEngine Swig a los archivos .ntml

app.set('view engine', 'ntml'); // Asigna .ntml como la extension por defecto
app.set('views', __dirname); // Asignamos como carpeta de vistas nuestro project root

swig.init // Importante para que no genere dependencia circular
({ 
	root: __dirname,
	allowErrors: true
});

app.set('view options', { layout: false }); // Configuracion para soportar Template Inheritance

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(__dirname)); // Establecemos directorio root

app.get('/', gets.root);
app.get('/:id.ntml', gets.general);

app.post('/auth', posts.auth);

app.listen(app.get('port'));
console.log('Express server listening on port 3000');