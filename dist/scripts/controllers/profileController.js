(function() {
  function profileController($scope, $location, $state, Animals) {
    $scope.animals = Animals.getCollection();
    $scope.animal = Animals.getAnimal();
    $scope.name = $state.params.name;

    






  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$location', '$state', 'Animals', profileController]);
})();
