(function() {
  function profileController($scope, $location, Restangular, $stateParams) {

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      return $scope.animal = animal;
    })



    $scope.openAdoptionForm = function (animal) {
      $location.path('/adoption-form');
    };
  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', 'Restangular', '$stateParams', profileController]);
})();
