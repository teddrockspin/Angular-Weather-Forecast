(function () {

    var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);


    weatherApp.config(function ($routeProvider) {
        $routeProvider.when("/main", {
                templateUrl: "pages/main.html",
                controller: "mainController"
            })
            .when("/weather/city/:city/days/:days", {
                templateUrl: "pages/weather.html",
                controller: "weatherController"
            })
            .otherwise({
                redirectTo: "/main"
            });
    });


    weatherApp.directive("weatherReport", function () {
        return {
            restrict: 'E',
            templateUrl: 'directives/weatherReport.html',
            replace: true,
            scope: {
                weatherDay: "=",
                convertToStandard: "&",
                convertToDate: "&",
                dateFormat: "@"
            }
        }
    });

})();