var modelsControllers = angular.module('modelsControllers', []);

modelsControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get("js/data.js").success(function (data) {
      $scope.athletes = data;
      $scope.athleteOrder = 'name'; 
  });
}]);

modelsControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get("js/data.js").success(function (data) {
        $scope.athletes = data;
        $scope.whichItem = $routeParams.itemId;
        $scope.currentItem = [];
        $scope.previousModelName;
        $scope.nextModelName;
        angular.forEach(data, function (value, index) {
            if ((value.firstname + value.lastname) == $scope.whichItem) {
                $scope.currentItem = value;
                if (index == 0) {
                    $scope.previousModelName = data[data.length - 1].firstname + data[data.length - 1].lastname;
                }
                else {
                    $scope.previousModelName = data[index - 1].firstname + data[index - 1].lastname;
                }

                if (index == (data.length - 1))
                {
                 $scope.nextModelName = data[0].firstname + data[0].lastname;
                }
                else
                {
                    $scope.nextModelName = data[index + 1].firstname + data[index + 1].lastname;
                }

            }
        });


    });
}]);

modelsControllers.controller('HomeController', function($scope) {
        $scope.message = 'Look! I am home page.';
        $scope.title = 'home';
    });


modelsControllers.controller('ProductsController', function($scope) {
        $scope.message = 'Look! I am products page.';
        $scope.title = 'products';
    });


modelsControllers.controller('AdvertiserController', function($scope) {
        $scope.message = 'Look! I am advertiser page.';
        $scope.title = 'advertiser';
    });


modelsControllers.controller('AboutController', function($scope) {
        $scope.message = 'Look! I am about page.';
        $scope.title = 'about';
    });


modelsControllers.controller('ContactController', function($scope) {
        $scope.message = 'Look! I am advertiser page.';
        $scope.title = 'advertiser';
    });










