(function() {
  function profileController($scope, Restangular, $stateParams) {

    $scope.animal = Restangular.one('rescues/1/animals/', $stateParams['slugged']).get().$object;


  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', 'Restangular', '$stateParams', profileController]);
})();
