(function() {
  function profileController($scope, $location, Restangular, $stateParams) {

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      $scope.animal = animal;
    })

  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', 'Restangular', '$stateParams', profileController]);
})();
