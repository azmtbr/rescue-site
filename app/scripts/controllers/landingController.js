(function() {
  function landingController($scope) {
    $scope.isAdmin = true;
  }


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', landingController]);
})();
