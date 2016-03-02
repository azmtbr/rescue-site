(function() {
  function profileController($scope, Restangular) {
    $scope.animal = Restangular.one('rescues/1/animals/', 4).get().$object;


  }


  angular
		.module('rescueSite')
		.controller('profileController', ['$scope', 'Restangular', profileController]);
})();
