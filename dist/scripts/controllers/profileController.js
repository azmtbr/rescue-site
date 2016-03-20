(function() {
  function profileController($scope, $location, Restangular, FileUploader, $stateParams) {

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      $scope.uploader = new FileUploader({url: "http://127.0.0.1:4000/api/rescues/1/animals/" + animal.slug,
                                          method: 'PATCH'});
      $scope.animal = animal;
    })

    $scope.isAdmin = true;

    $scope.gallery = Restangular.one('galleries', 1).get().$object;



  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', 'Restangular', 'FileUploader', '$stateParams', profileController]);
})();
