(function () {
    "use strict";

    var weatherService = function (h, r) {

        var get5DayForecast = function (city, days) {

            //return h.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&cnt=" + days + "&appid=4d177a38b3de5ab4acc064cfab19cfcf").then(function (response) {
            //return response.data;
            //});

            var weatherAPI = r("http://api.openweathermap.org/data/2.5/forecast/daily", {
                callback: "JSON_CALLBACK"
            }, {
                get: {
                    method: "JSONP"
                }
            });

            return weatherAPI.get({
                q: city,
                cnt: days,
                appid: "4d177a38b3de5ab4acc064cfab19cfcf"
            });

        };

        return {
            get5DayForecast: get5DayForecast
        };
    };

    var module = angular.module("weatherApp");
    module.factory("weatherService", ['$http', '$resource', weatherService]);
})();