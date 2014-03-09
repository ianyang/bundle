Bundle.controller('CreateCtrl', ['$scope', '$http', '$location', '$upload',
    function($scope, $http, $location, $upload) {

        // declaring scope variables
        $scope.items = null;
        $scope.appReady = false;
        $scope.fullPath = $location.$$host + '/' + $scope.id;
        $scope.saving = false;
        $scope.bundleActivated = false;
        $scope.totalPrice = 500;
        $scope.bundlePrice = 1000;

        // declaring local variables
        var path = $location.$$path;

        // function to verify that url is valid
        var fetchItems = function() {
            $http.get('/api/transactions'+path).success(function(data){
                $scope.appReady = true;
                $scope.items = data.items;
            }).error(function(data){
                $location.path("/");
            });
        };

        $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '/api/transactions'+path,
                    method: 'PUT',
                    headers: {'Content-Type': undefined},
                    withCredentials: true,
                    data: {transactions: $scope.item},
                    file: file,
                    // file: $files, //upload multiple files, this feature only works in HTML5 FromData browsers
                    /* set file formData name for 'Content-Desposition' header. Default: 'file' */
                    //fileFormDataName: myFile, //OR for HTML5 multiple upload only a list: ['name1', 'name2', ...]
                    /* customize how data is added to formData. See #40#issuecomment-28612000 for example */
                    //formDataAppender: function(formData, key, val){} //#40#issuecomment-28612000
                }).progress(function(evt) {
                    console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                }).success(function(data, status, headers, config) {
                    // file is uploaded successfully
                    console.log(data);
                }).error(function() {
                    console.log('error');
                });
                //.error(...)
                //.then(success, error, progress); 
            }
            // $scope.upload = $upload.upload({...}) alternative way of uploading, sends the the file content directly with the same content-type of the file. Could be used to upload files to CouchDB, imgur, etc... for HTML5 FileReader browsers. 
          };

        $scope.updateItems = function() {
            console.log("saving");
            $scope.saving = true;
            $scope.saving = false;
        };


        // execution
        new QRCode(document.getElementById("qrcode"), $scope.fullPath);
        fetchItems();

}]);
