exports.auth = function(request, response)
{
	var usuario = request.param('username');
	var contrasena = request.param('password');

	console.log('Parametro por post ' + usuario  + ' ' + contrasena);

	if(usuario == "zheref" && contrasena == "Altairis")
	{
		request.session.username = usuario;
		request.session.password = contrasena;
		global.session = request.session;
		console.log('Parametro por post ' + request.session.usuario  + ' ' + request.session.contrasena);
		var logged = (request.session.username != undefined);
		response.render
		(
			'index',
			{
				username: request.session.username,
				islogged: logged
			}
		);
	}
	else
	{
		response.render('logon');
	}
};

exports.authoff = function(request, response)
{
	global.session = undefined;
	request.session = undefined;
	var logged = false;
	response.render
	(
		'logon',
		{
			islogged: logged
		}
	);
};