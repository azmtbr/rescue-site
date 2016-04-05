(function() {
  function landingController($scope, $auth, Upload, Restangular, $stateParams) {


   Restangular.one('rescues', slug).get().then(function(rescue) {
     $scope.rescue = rescue


        // Restangular.one('rescues', ).one('landing_galleries', 1).get().then(function(landing_gallery) {
        // $scope.landing_gallery = landing_gallery;

        $scope.landingGalleryPicSubmit = function() {
            $scope.landingGalleryPicUpload($scope.files);
        };

        $scope.landingGalleryPicUpload = function (files) {
          Restangular.one('landing_galleries', rescue.landing_gallery_id).all('landing_images').getList().then(function(landing_images) {
            $scope.landing_images = landing_images;
          });

          for (var i = files.length - 1; i >= 0; i--)

            Upload.upload({
                url: "https://rescue-site-api.herokuapp.com/api/landing_galleries/" + landing_gallery + "/landing_images",
                headers: $auth.retrieveData('auth_headers'),
                method: 'POST',
                data: {"landing_image[landing_image]": files[i]}
              }).then(function() {
                  Restangular.one('landing_galleries', rescue.landing_gallery_id).all('landing_images').getList().then(function(landing_images) {
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
      // });

      Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery_id).all('landing_images').getList().then(function(landing_images) {
        $scope.landing_images = landing_images;
      });

      $scope.deletePic = function(landing_image) {
        Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery_id).one('landing_images', landing_image.id).remove().then(function(){
          $scope.landing_images = _.without($scope.landing_images, landing_image);
        });
      }

    });

      // CAROUSEL
      $scope.myInterval = 3000;
      $scope.active = 1;




  }


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', '$auth', 'Upload', 'Restangular', '$stateParams', landingController]);
})();
