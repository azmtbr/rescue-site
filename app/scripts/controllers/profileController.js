(function() {
  function profileController($scope, $location, Restangular, FileUploader, $stateParams) {

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      // $scope.uploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/$RESCUE_ID/animals/" + animal.slug,
      //                                     method: 'PATCH'});
      $scope.animal = animal;
    })

    $scope.isAdmin = true;

    Restangular.one('galleries', 1).get().then(function(gallery) {
      return $scope.gallery = gallery;
    })

    Restangular.one('photos', 1).get().then(function(photos) {
      $scope.uploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/$RESCUE_ID/animals/" + photos.gallery_id,
                                          method: 'PATCH'});
    })



  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', 'Restangular', 'FileUploader', '$stateParams', profileController]);
})();
