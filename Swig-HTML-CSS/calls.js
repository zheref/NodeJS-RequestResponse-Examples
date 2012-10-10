exports.auth = function(request, response)
{
	var usuario = request.param('username');
	var contrasena = request.param('password');

	console.log('Parametro por post ' + usuario  + ' ' + contrasena);

	if(usuario == "zheref" && contrasena == "Altairis")
	{
		response.render('index');
	}
	else
	{
		response.render('logon');
	}
};