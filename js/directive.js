var modelsControllers = angular.module('modelsControllers');

modelsControllers.directive('initCarousel', function () {
    return {
        scope: false,
        link: function (scope) {
            $('.carousel').carousel({
                interval: 5000,
                hover: 'static'
            })
        }
    };
});