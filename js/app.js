var myApp = angular.module('myApp', [
	'ngRoute',
	'modelsControllers'
	]);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/models/:itemId/', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'AboutController'
	}).
	otherwise({
		redirectTo: '/list'
	});

}]);




 $(document).ready(function(){


	$('body').on('click','#redx',function(){
		$("#other").hide();
		$(".info").show();
		$(".athleteinfo2").show();
		$(".athleteinfo1").show();
		$(".bannerad").show();
	})

	$('body').on('click','#pic1',function(){
		$("#other").show();
		$(".info").hide();
		$(".athleteinfo2").hide();
		$(".athleteinfo1").hide();
		$(".bannerad").hide();
	})
});


 

