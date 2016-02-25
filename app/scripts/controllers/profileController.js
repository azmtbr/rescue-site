(function() {
  function profileController($scope, $state, Animals ) {
    $scope.animals = Animals.getCollection();
    $scope.id = $state.params.id;

  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', '$state', 'Animals', profileController]);
})();
