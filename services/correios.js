app.service('correios', function($http){
	var obj = {};
	obj.getLocation = function(cep){
		return $http.get('https://maps.google.com/maps/api/geocode/json?address=' + cep + '&sensor=false');
	}
	return obj;
});