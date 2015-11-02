// SERVICES
weatherApp.service('cityService', function() {
	
	this.city = 'Missoula, MT';
	// http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&cnt=2&appid=bd82977b86bf27fb59a04b61b657fb6f
	
	
});

weatherApp.service('weatherService', [ '$resource', function($resource) {
	
	this.getWeather = function(city, days) {
		var weatherAPI =
			$resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
			callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
		
		return weatherAPI.get(
		{
			q: city, 
			cnt: days,
			appid: 'bd82977b86bf27fb59a04b61b657fb6f' 
		});
	};
}]);