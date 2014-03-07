Bundle.controller('CreateCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        $scope.items = null;
        $scope.appReady = false;
        $scope.id = $location.path().split('/')[1]
        $scope.token = $location.path().split('/')[2];
        $scope.fullPath = $location.$$host + '/' + $scope.id;
        $scope.saving = false;
        $scope.bundleActivated = false;
        $scope.totalPrice = 500;
        $scope.bundlePrice = 1000;

        var fetchItems = function() {
            $http.get('/api/transactions/'+$scope.id+'/'+$scope.token).success(function(data){
                $scope.appReady = true;
                $scope.items = data.items;
            }).error(function(data){
                $location.path("/");
            });
        };

        $scope.addItem = function(files) {
            //Create some new form data to submit
            var fd = new FormData();

            //Grab the first selected file
            fd.append("image", files[0]);

            $http.post('/transactions/'+$scope.id+'/'+$scope.token, fd, {
                withCredentials: true,
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity
            }).success(function(data) {
                debugger
            }).error(function(data) {
                console.log('IMG upload failure: ', data);
            })
        };

        $scope.updateItems = function() {
            console.log("saving");
            $scope.saving = true;
            $scope.saving = false;
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
