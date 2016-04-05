(function() {
  function adoptionPrintController($scope, $location, $stateParams, Restangular) {

    Restangular.one('adoptions', $stateParams['id']).get().then(function(adoption) {
      $scope.adoption = adoption;
    })

    $scope.printForm = function() {
      window.print();
    };
  }

  angular
		.module('rescueSite')
		.controller('adoptionPrintController', ['$scope', '$location', '$stateParams', 'Restangular', adoptionPrintController]);
})();
