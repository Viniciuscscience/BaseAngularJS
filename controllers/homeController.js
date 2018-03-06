app.controller('homeController', function($scope, correios){
	$scope.homeVariable = "ESTE É A PÁGINA HOME! Digite um CEP e veja o endereço!";
	$scope.getAddres = function(cep){
		correios.getLocation(cep).then(function(response){
			$scope.fullAddress = response.data;
		});
	}
});