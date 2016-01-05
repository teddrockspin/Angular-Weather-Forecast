(function () {
    "use strict";

    var app = angular.module("weatherApp");

    var weatherController = function (s, rp, ws) {

        var onComplete = function (data) {
            s.forecast = data.list;
            console.log(s.forecast);
        };

        var onError = function (reason) {
            s.error = "Could not fetch data."
        };

        s.convertToFahrenheit = function (degK) {
            return Math.round((1.8 * (degK - 273)) + 32);
        };

        s.convertToDate = function (dt) {
            return new Date(dt * 1000);
        };

        var city = rp.city;
        var days = rp.days;

        s.city = city;
        s.days = days;

        s.forecast = ws.get5DayForecast(city, days);
    };


    app.controller("weatherController", ["$scope", '$routeParams', 'weatherService', weatherController]);

})();