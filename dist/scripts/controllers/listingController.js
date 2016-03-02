(function() {
  function listingController($scope, Restangular) {

    $scope.animals = Restangular.all('rescues/1/animals').getList().$object;

  }


  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', 'Restangular', listingController]);
})();
