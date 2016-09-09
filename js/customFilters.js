angular.module("customFilters", [])
    .filter("range", function ($filter) {
    return function (data, limit, begin) {
        if (angular.isArray(data) && angular.isNumber(limit) && angular.isNumber(begin)) {
            return $filter('limitTo')(data, limit, begin)
            
        } else {
            return data;
        }
    }
})
            
            