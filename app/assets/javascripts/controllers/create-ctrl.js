Bundle.controller('CreateCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.items = null;
        $scope.appReady = false;
        $scope.fullPath = $location.$$absUrl;
        $scope.id = $location.path().split('/')[1]
        $scope.token = $location.path().split('/')[2];
        $scope.totalPrice = 500;
        $scope.bundlePrice = 1000;

        var fetchItems = function() {
            $http.get('/api/transactions/'+$scope.id).success(function(data){
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


        // dom manipulation js

        $(".photo-uploader").on("change", function() {
            $scope.addItem(this.files);
        });

}]);
