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

modelsControllers.directive('customLightbox', function () {
    return {
        link: function (scope,telement, tattrs) {

            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'setHeight': '100',  //Values in percent
                'setWidth': 'auto',
                'fitImagesInViewport': true,
                'thumbnails':true
            });
        }
    };
});