Bundle.controller('CreateCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.items = null;
        $scope.appReady = false;
        $scope.UUID = $location.path().split('/')[2];

        var fetchItems = function() {
            $http.get('/api/transactions/'+$scope.UUID).success(function(data){
                $scope.appReady = true;
                $scope.items = data;
            }).error(function(data){
                $location.path("/");
            });
        };

        var init = function() {
            fetchItems();
        };

        init();

}]);
