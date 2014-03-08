Bundle.controller('CreateCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {

        // declaring scope variables
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

        fetchItems();

        // photo uploader
        $(".photo-uploader").on("change", function() {
            $scope.addItem(this.files);
        });

        // qr code
        new QRCode(document.getElementById("qrcode"), $scope.fullPath);

        // drag and drop
        if(window.FileReader) { 
            var drop; 

            addEventHandler(window, 'load', function() {
                drop   = document.getElementById('drop');
                
                function cancel(e) {
                  if (e.preventDefault) { e.preventDefault(); }
                  return false;
                }
              
                // Tells the browser that we *can* drop on this target
                addEventHandler(drop, 'dragover', cancel);
                addEventHandler(drop, 'dragenter', cancel);

                addEventHandler(drop, 'drop', function (e) {
                    e = e || window.event; // get window.event if e argument missing (in IE)   
                    if (e.preventDefault) { e.preventDefault(); } // stops the browser from redirecting off to the image.

                    var dt    = e.dataTransfer;
                    var files = dt.files;
                    for (var i=0; i<files.length; i++) {
                        var file = files[i];
                        var reader = new FileReader();

                        //attach event handlers here...

                        reader.readAsDataURL(file);
                        addEventHandler(reader, 'loadend', function(e, file) {
                            $scope.addItem(file);
                        }.bindToEventHandler(file));
                    }
                    return false;
                });

                Function.prototype.bindToEventHandler = function bindToEventHandler() {
                    var handler = this;
                    var boundParameters = Array.prototype.slice.call(arguments);
                    //create closure
                    return function(e) {
                      e = e || window.event; // get window.event if e argument missing (in IE)   
                      boundParameters.unshift(e);
                      handler.apply(this, boundParameters);
                    }
                };
            });
        } else { 
          console.log('Your browser does not support the HTML5 FileReader.');
        }

        function addEventHandler(obj, evt, handler) {
            if(obj.addEventListener) {
                // W3C method
                obj.addEventListener(evt, handler, false);
            } else if(obj.attachEvent) {
                // IE method.
                obj.attachEvent('on'+evt, handler);
            } else {
                // Old school method.
                obj['on'+evt] = handler;
            }
        }

}]);
