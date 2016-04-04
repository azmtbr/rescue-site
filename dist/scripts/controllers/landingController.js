(function() {
  function landingController($scope, $auth, Upload, Restangular, $stateParams) {



      Restangular.one('landing_galleries', 1).get().then(function(landing_gallery) {
        $scope.landing_gallery = landing_gallery;

        $scope.landingGalleryPicSubmit = function() {
            $scope.landingGalleryPicUpload($scope.files);
        };

        $scope.landingGalleryPicUpload = function (files) {
          Restangular.one('landing_galleries', 1).all('landing_images').getList().then(function(landing_images) {
            $scope.landing_images = landing_images;
          });

          for (var i = files.length - 1; i >= 0; i--)

            Upload.upload({
                url: "http://127.0.0.1:4000/api/rescues/1/landing_galleries/" + 1 + "/landing_images",
                headers: $auth.retrieveData('auth_headers'),
                method: 'POST',
                data: {"landing_image[landing_image]": files[i]}
              }).then(function() {
                  Restangular.one('landing_galleries', 1).all('landing_images').getList().then(function(landing_images) {
                      $scope.landing_images = landing_images;
                  })
                }, function (response) {
                  if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                  }
                }, function (evt) {
                    $scope.progress =
                      Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
        };
      });

      Restangular.one('landing_galleries', 1).all('landing_images').getList().then(function(landing_images) {
        $scope.landing_images = landing_images;
      });

      $scope.deletePic = function(landing_image) {
        Restangular.one('landing_galleries', 1).one('landing_images', landing_image.id).remove().then(function(){
          $scope.landing_images = _.without($scope.landing_images, landing_image);
        });
      }




  }


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', '$auth', 'Upload', 'Restangular', '$stateParams', landingController]);
})();
