exports.general =  function (request, response)
{
	response.render
	(
		request.params.id,
		{
			username : request.session.username,
			islogged : request.session.islogged
		}
	);
};

exports.root = function (request, response) // Asignamos accion de enrutamiento a root
{
    response.render
    (
    	'index',
    	{
    		username : request.session.username,
    		islogged : request.session.islogged
    	}
    );
};