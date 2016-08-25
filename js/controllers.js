var modelsControllers = angular.module('modelsControllers', []);

modelsControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: "GET",
        url: "js/data.js",
        cache: false
    }).then(function (response) {
        $scope.athletes = response.data;
        $scope.athleteOrder = 'name'
    });
}]);

modelsControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http({
        method: "GET",
        url: "js/data.js",
        cache:false
    }).then(function (response) {
        successcallback(response.data);
    });

function successcallback(data){
    
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
}
}]);


modelsControllers.controller('AboutController', function ($scope) {
    $scope.message = 'Look! I am an faqs page.';
    $scope.title = 'FAQs';
    $scope.pageClass = 'faqs';
});









