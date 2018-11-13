var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function ($scope, $http) {
        console.log("hello world from controller");

    var refresh = function(){
        $http.get('/contactlist').
            then(function (response) {
                //success code
                console.log("Requested Data Received");
                console.log(response);
                $scope.contactlist = response.data;
            });
        };
    
        refresh();

        $scope.addContact = function () {
            console.log($scope.contact);
            $http.post('/contactlist', $scope.contact).
            then(function (response){
                console.log(response.data);
                refresh();
            });
        };
    }]);
