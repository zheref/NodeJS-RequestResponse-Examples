exports.logon = function(request, response)
{
	var credenciales = require("./authdata");

	var usuario = request.param('username');
	var contrasena = request.param('password');

	console.log('Parametro por post ' + usuario  + ' ' + contrasena);

	if(usuario == credenciales.USERNAME && contrasena == credenciales.PASSWORD)
	{
		request.session =
		{
			username : usuario,
			islogged : true
		};
		response.render( 'index', request.session );
	}
	else
	{
		response.render('logon');
	}
};

exports.logoff = function(request, response)
{
	request.session =
	{
		username : '',
		islogged : false
	};
	response.render( 'logon', request.session );
};