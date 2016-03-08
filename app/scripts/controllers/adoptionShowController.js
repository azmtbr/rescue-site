(function() {
  function adoptionShowController($scope, Restangular, $stateParams) {

    // Restangular.one('adoptions', $stateParams['id']).get().then(function(adoption) {
    //   $scope.adoption = adoption;
    // })
    $scope.selectedForm = false;

    $scope.openForm = function() {
      $scope.selectedForm = true;
    }

    $scope.adoptions = Restangular.all('adoptions').getList().$object;

    // $scope.adoption = Restangular.one('adoptions', 2).get().$object;

  }


  angular
		.module('rescueSite')
		.controller('adoptionShowController', ['$scope', 'Restangular', '$stateParams', adoptionShowController]);
})();
