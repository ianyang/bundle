Bundle.controller('HomeCtrl', ['$scope',
    function($scope) {

        // initializing scope variables
        $scope.email = "";
        $scope.inputError = false;

        // get started
        $scope.proceed = function() {
            $scope.inputError = false;
            
            if ($scope.email_form.$valid) {
                console.log($scope.email);
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
