exports.general =  function (request, response)
{
	response.render(request.params.id);
};

exports.root = function (request, response) // Asignamos accion de enrutamiento a root
{
    response.render('index');
};