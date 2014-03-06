Bundle.controller('HomeCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        // initializing scope variables
        $scope.email = "";
        $scope.inputError = false;
        $scope.loading = false;

        // get started
        $scope.proceed = function() {
            if ($scope.loading) return;

            $scope.inputError = false;

            if ($scope.email_form.$valid) {
                $scope.loading = true;
                $http.post('/api/transactions', {transaction: {email: $scope.email}}).success(function(data){
                    $scope.loading = false;
                    $location.path('/create/'+data.id);
                }).error(function(data){
                    $scope.loading = false;
                    console.log("HTTP Error");
                });
            } else {
                $scope.inputError = true;
            }
        };

        // carousel

        $scope.moveLeft = function() {


        };

        $scope.moveRight = function() {



        };


}]);
