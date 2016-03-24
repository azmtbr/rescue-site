(function() {
  function profileController($scope, $location, Restangular, FileUploader, $stateParams) {

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      // $scope.uploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/1/animals/" + animal.slug,
      //                                     method: 'PATCH'});
      $scope.animal = animal;

      Restangular.one('galleries', animal.gallery_id).get().then(function(gallery) {
        $scope.gallery = gallery;
        $scope.uploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/1/galleries/" + animal.gallery_id + "/photos",
                                            method: 'POST',
                                            alias: "photo[gallery_image]"});
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

    $scope.isAdmin = true;



  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', 'Restangular', 'FileUploader', '$stateParams', profileController]);
})();
