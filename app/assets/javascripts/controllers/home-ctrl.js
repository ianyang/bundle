Bundle.controller('HomeCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        // initializing scope variables
        $scope.email = "";
        $scope.inputError = false;
        $scope.loading = false;
        var currentTutorial = 1;

        // get started
        $scope.proceed = function() {
            if ($scope.loading) return;

            $scope.inputError = false;

            if ($scope.email_form.$valid) {
                $scope.loading = true;
                $http.post('/api/transactions', {transaction: {email: $scope.email}}).success(function(data){
                    $scope.loading = false;
                    $location.path('/'+data.id+'/'+data.token);
                }).error(function(data){
                    $scope.loading = false;
                    console.log("HTTP Error");
                });
            } else {
                $scope.inputError = true;
            }
        };

        // carousel
        var moveTutorial = function(direction) {
        
            if (direction=='right'){
                if (currentTutorial==1){
                    //alert(currentTutorial)
                    $(card2).addClass("active");
                    $(card1).removeClass("active");
                    $(card1).addClass("left");
                    $(arrow1).removeClass("end");
                     currentTutorial=2;
                }

                else if (currentTutorial==2){
                    $(card3).addClass("active");
                    $(card2).removeClass("active");
                    $(arrow2).addClass("end");
                    currentTutorial=3;

                }

                else if (currentTutorial==3){
                 /*   alert("well that should not have happened");*/
                }

            } else if (direction=='left'){
                if (currentTutorial==3){
                    $(card2).addClass("active");
                    $(card3).removeClass("active");
                    $(arrow2).removeClass("end");
                    currentTutorial= 2;
                }

                else if (currentTutorial==2){
                    $(card1).addClass("active");
                    $(card2).removeClass("active");
                    $(arrow1).addClass("end");
                    currentTutorial=1;

                }

                else if (currentTutorial==1){
                   /* alert("nope, cant go left zoolander")*/
                }
            }
        };

        $scope.moveLeft = function() {
            moveTutorial('left');
        };

        $scope.moveRight = function() {
            moveTutorial('right');
        };

}]);
