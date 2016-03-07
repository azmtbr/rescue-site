(function() {
  function listingController($scope, Restangular, $stateParams) {

    // $scope.animals = Restangular.one('rescues/', $stateParams['rescue_id']).getList('animals').$object;

    Restangular.one('rescues').getList().then(function(rescues) {
      $scope.rescue = rescues[0];
    })


    $scope.animals = $scope.rescue.getList('animals').$object;
    debugger
  }


  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', 'Restangular', '$stateParams', listingController]);
})();
