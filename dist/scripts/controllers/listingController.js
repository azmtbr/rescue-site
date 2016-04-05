(function() {
  function listingController($scope, Restangular, $stateParams) {

    Restangular.one('rescues', slug).all('animals').getList().then(function(animals) {
      $scope.animals = animals;
    })
  }


  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', 'Restangular', '$stateParams', listingController]);
})();
