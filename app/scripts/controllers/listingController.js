(function() {
  function listingController($scope, Fetch, Animals ) {
    $scope.animals = Fetch.index();

  }


  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', 'Fetch', 'Animals', listingController]);
})();
