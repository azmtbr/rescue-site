(function() {
  function landingController($scope) {
    $scope.siteTitle = "Fearless Kitty Rescue";
    $scope.welcomeText = "Welcome!";
  }


  angular
		.module('rescueSite')
		.controller('landingController', ['$scope', landingController]);
})();
