(function() {
  function landingController($scope, $auth, Upload, Restangular, $stateParams) {

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
                url: "https://rescue-site.herokuapp.com/api/rescues/" + slug + "/landing_galleries/" + rescue.landing_gallery.id + "/landing_images",
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

  })
}


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', '$auth', 'Upload', 'Restangular', '$stateParams', landingController]);
})();
