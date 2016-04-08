(function() {
  function landingController($scope, $auth, Upload, SliderAnimate, Restangular, $stateParams) {

    $scope.landing_images = [];

   Restangular.one('rescues', slug).get().then(function(rescue) {
     $scope.rescue = rescue



        $scope.landingGalleryPicSubmit = function() {
            $scope.landingGalleryPicUpload($scope.files);
        };

        $scope.landingGalleryPicUpload = function (files) {
          Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery.id).all('landing_images').getList().then(function(landing_images) {
            $scope.landing_images = landing_images;
          });

          for (var i = files.length - 1; i >= 0; i--)

            Upload.upload({
                url: "https://rescue-site-api.herokuapp.com/api/rescues/" + slug + "/landing_galleries/" + rescue.landing_gallery.id + "/landing_images",
                headers: $auth.retrieveData('auth_headers'),
                method: 'POST',
                data: {"landing_image[landing_image]": files[i]}
              }).then(function() {
                  Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery.id).all('landing_images').getList().then(function(landing_images) {
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

      Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery.id).all('landing_images').getList().then(function(landing_images) {
        $scope.landing_images = landing_images;
      });

      $scope.deletePic = function(landing_image) {
        Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery.id).one('landing_images', landing_image.id).remove().then(function(){
          $scope.landing_images = _.without($scope.landing_images, landing_image);
        });
      };


    // CAROUSEL
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function(index) {
      $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function(index) {
      return $scope.currentIndex === index;
    };

    $scope.prevSlide = function() {
      $scope.currentIndex = ($scope.currentIndex < $scope.landing_images.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function() {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.landing_images.length - 1;
    }

  })
}


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', '$auth', 'Upload', 'SliderAnimate', 'Restangular', '$stateParams', landingController]);
})();
