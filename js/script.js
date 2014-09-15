var WorldCtrl = function ($scope) {
	// $scope.population = 7000;

	var countries = [];
	var countCountries = 30;
	for(var n = 0; n < countCountries; n++){
		countries.push({
			name: 'Country '+n, 
			population :  Math.random()*300 + 10 //  Math.rand()*100 +
		});
	}

	$scope.countries = countries;
	$scope.population = function (){
		var population = 0;
		countries.forEach(function(country){
			population += country.population;
		});
		return population;
	};
} 

