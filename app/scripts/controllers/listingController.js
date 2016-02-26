(function() {
  function listingController($scope, Animals ) {
    $scope.animals = Animals.getCollection();

  }


  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', 'Animals', listingController]);
})();
