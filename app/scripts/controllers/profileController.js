(function() {
  function profileController($scope, $auth, $timeout, Upload, Restangular, $stateParams) {


    Restangular.one('rescues', slug).one('animals', $stateParams['slug']).get().then(function(animal) {
      $scope.animal = animal;

      $scope.updateProfile = function(animal) {
        animal.patch(animal);
        $scope.animalUpdated = true;
        console.log(animal);
        $timeout(function () {
          $scope.animalUpdated = false;
        }, 5000);
      }


      $scope.profilePicSubmit = function() {
          $scope.profilePicUpload($scope.file);
      };

      $scope.profilePicUpload = function (file) {
          Upload.upload({
              url: "https://rescue-site-api.herokuapp.com/api/rescues/" + slug + "/animals/" + animal.slug,
              headers: $auth.retrieveData('auth_headers'),
              method: 'PATCH',
              file: file
            }).then(function() {
              Restangular.one('rescues', slug).one('animals', $stateParams['slug']).get().then(function(animal) {
                $scope.animal = animal;
            })
          });
        };

      Restangular.one('rescues', slug).one('galleries', animal.gallery_id).get().then(function(gallery) {
        $scope.gallery = gallery;

        $scope.galleryPicSubmit = function() {
            $scope.galleryPicUpload($scope.files);
        };

        $scope.galleryPicUpload = function (files) {
          Restangular.one('rescues', slug).one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
            $scope.photos = photos;
          });

          for (var i = files.length - 1; i >= 0; i--)

            Upload.upload({
                url: "https://rescue-site-api.herokuapp.com/api/rescues/" + slug + "/galleries/" + animal.gallery_id + "/photos",
                headers: $auth.retrieveData('auth_headers'),
                method: 'POST',
                data: {"photo[gallery_image]": files[i]}
              }).then(function() {
                  Restangular.one('rescues', slug).one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
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

      Restangular.one('rescues', slug).one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
        $scope.photos = photos;


        $scope.setAsMainPhoto = function(photo) {
            Restangular.one('rescues', slug).one('galleries', animal.gallery_id).one('photos', photo.id).get().then(function() {
              var index = $scope.photos.indexOf(photo);
              if (index > -1) {
                $scope.photos.splice(index, 1)
              }
              $scope.photos.unshift(photo);
            });
              photos.patch(photo).then(function() {

              });
        }
      });

      $scope.deletePic = function(photo) {
        Restangular.one('rescues', slug).one('galleries', animal.gallery_id).one('photos', photo.id).remove().then(function(){
          $scope.photos = _.without($scope.photos, photo);
        });
      }
    });

    var text_max = 77;
    $('#count_message').html(text_max + ' remaining');

    $('#short-bio-update').keyup(function() {
      var text_length = $('#short-bio-update').val().length;
      var text_remaining = text_max - text_length;

      $('#count_message').html(text_remaining + ' char remaining');
    });


  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$auth', '$timeout', 'Upload', 'Restangular', '$stateParams', profileController]);
})();
