(function () {
    "use strict";

    var app = angular.module("weatherApp");

    var mainController = function (s, loc) {

        s.getForecast = function () {
            loc.path("/weather/city/" + s.city + "/days/" + s.days);
        };

        s.city = "Canton, Oh";
        s.days = 2;
    };


    app.controller("mainController", ["$scope", '$location', mainController]);

})();