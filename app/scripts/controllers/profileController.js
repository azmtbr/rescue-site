(function() {
  function profileController($scope, $location, $state, Restangular, FileUploader, $stateParams) {

    $scope.isAdmin = true;

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      $scope.animal = animal;
      $scope.profileUploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/$RESCUE_ID/animals/" + animal.slug,
                                                 method: 'PATCH'});
      $scope.profileUploader.onSuccessItem = function() {
        console.log('we have something at least');
        Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
        $scope.animal = animal;
        })
      };

      Restangular.one('galleries', animal.gallery_id).get().then(function(gallery) {
        $scope.gallery = gallery;
        $scope.galleryUploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/$RESCUE_ID/galleries/" + animal.gallery_id + "/photos",
                                            method: 'POST',
                                            alias: "photo[gallery_image]"});
        $scope.galleryUploader.onSuccessItem = function() {
          console.log('we have something at least');
          Restangular.one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
            $scope.photos = photos;
          })
          };
      })

      Restangular.one('galleries', animal.gallery_id).all('photos').getList().then(function(photos) {
        $scope.photos = photos;
      })

      $scope.deletePic = function(photo) {
        Restangular.one('galleries', animal.gallery_id).one('photos', photo.id).remove().then(function(){
          $scope.photos = _.without($scope.photos, photo);
        });
      }
    });




  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', '$state', 'Restangular', 'FileUploader', '$stateParams', profileController]);
})();
