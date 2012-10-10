exports.general =  function (request, response)
{
	var logged = (request.session.username != undefined);
	response.render
	(
		request.params.id,
		{
			username : request.session.username,
			islogged : logged
		}
	);
};

exports.root = function (request, response) // Asignamos accion de enrutamiento a root
{
	var logged = (request.session.username != undefined);
    response.render
    (
    	'index',
    	{
    		username : request.session.username,
    		islogged : logged
    	}
    );
};