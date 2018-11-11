var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function ($scope, $http) {
        console.log("hello world from controller");

        $http.get('/contactlist').
            then(function (response) {
                //success code
                console.log("Requested Data Received");
                console.log(response);
                $scope.contactlist = response;
            });
    }]);
