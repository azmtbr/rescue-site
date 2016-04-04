(function() {
  function profileController($scope, $auth, Upload,  Restangular, $stateParams) {



    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      $scope.animal = animal;


      $scope.profilePicSubmit = function() {
          $scope.profilePicUpload($scope.file);
      };

      $scope.profilePicUpload = function (file) {

          Upload.upload({
              url: "http://127.0.0.1:4000/api/animals/" + animal.slug,
              headers: $auth.retrieveData('auth_headers'),
              method: 'PATCH',
              file: file
            }).then(function() {
              Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
                $scope.animal = animal;
            })
          });
        };

      Restangular.one('galleries', animal.gallery_id).get().then(function(gallery) {
        $scope.gallery = gallery;

        $scope.galleryPicSubmit = function() {
            $scope.galleryPicUpload($scope.files);
        };

        $scope.galleryPicUpload = function (files) {
          Restangular.one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
            $scope.photos = photos;
          });

          for (var i = files.length - 1; i >= 0; i--)

            Upload.upload({
                url: "http://127.0.0.1:4000/api/galleries/" + animal.gallery_id + "/photos",
                headers: $auth.retrieveData('auth_headers'),
                method: 'POST',
                data: {"photo[gallery_image]": files[i]}
              }).then(function() {
                  Restangular.one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
                      $scope.photos = photos;
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

      Restangular.one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
        $scope.photos = photos;
      });

      $scope.deletePic = function(photo) {
        Restangular.one('galleries', animal.gallery_id).one('photos', photo.id).remove().then(function(){
          $scope.photos = _.without($scope.photos, photo);
        });
      }
    });



  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$auth', 'Upload', 'Restangular', '$stateParams', profileController]);
})();
