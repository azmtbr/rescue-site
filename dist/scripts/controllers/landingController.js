(function() {
  function landingController($scope) {
    $scope.siteTitle = "My Rescue Site";
    $scope.welcomeText = "Welcome! Let's make My Rescue Site into Your Rescue Site";
  }


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', landingController]);
})();
