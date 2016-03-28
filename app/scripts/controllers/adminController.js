(function() {
  function adminController($scope) {
    $scope.isAdmin = false;

    $scope.handleRegBtnClick = function() {
     $auth.submitRegistration($scope.registrationForm)
       .then(function(resp) {
         // handle success response
       })
       .catch(function(resp) {
         // handle error response
       });
   };
  }


  angular
		.module('rescueSite')
		.controller('adminController', ['$scope', adminController]);
})();
