Bundle.controller('CreateCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.items = null;
        $scope.appReady = false;
        $scope.UUID = $location.path().split('/')[2];

        var fetchItems = function() {
            $http.get('/api/transactions/'+$scope.UUID).success(function(data){
                $scope.appReady = true;
                $scope.items = data.items;
            }).error(function(data){
                $location.path("/");
            });
        };

        $scope.addItem = function(files) {
            debugger

            //Create some new form data to submit
            // var fd = new FormData();
            // //Grab the first selected file
            // fd.append("image", file[0]);

            // $http.post('/user/profile/photo', fd, {
            //     withCredentials: true,
            //     headers: {
            //         'Content-Type': undefined
            //     },
            //     transformRequest: angular.identity
            // }).success(function(data) {
            //     if (data.Success) {
            //         console.log('PURL:', data.Result);
            //         $scope.user.info.PhotoUrl = data.Result;

            //     }
            // }).error(function(data) {
            //     console.log('IMG upload failure: ', data);
            // }).then(function(data) {
            //     console.log(data);
            // });
        };

        var init = function() {
            fetchItems();
        };

        init();

}]);
