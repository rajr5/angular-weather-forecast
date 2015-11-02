// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', '$location', 'cityService', function($scope, $log, $location, cityService) {
	
	$scope.city = cityService.city;
	
	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});
	
	$scope.submit = function() {
		$location.path("/forecast");
	};
		
}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', 'cityService', 'weatherService', function($scope, $log, $routeParams, cityService, weatherService) {
	
	$scope.city = cityService.city;
	
	$scope.days = $routeParams.days || '5';
	
//	$scope.weatherAPI =
//		$resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
//		callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
//	
//	$scope.weatherResult = $scope.weatherAPI.get(
//		{ 
//			q: $scope.city, 
//			cnt: $scope.days,
//			appid: 'bd82977b86bf27fb59a04b61b657fb6f' 
//		});
	
	$scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
	
	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}
	
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}
	
	$log.info($scope.weatherResult);
	
}]);
