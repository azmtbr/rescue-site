(function() {
  function adminController($scope, $auth) {
    $scope.isAdmin = false;


    // Admin Register
    $scope.handleRegBtnClick = function() {
     $auth.submitRegistration($scope.registrationForm)
       .then(function(resp) {
         // handle success response
       })
       .catch(function(resp) {
         // handle error response
       });
     };




    // Login
    $scope.handleLoginBtnClick = function() {
     $auth.submitLogin($scope.loginForm)
       .then(function(resp) {
         // handle success response
       })
       .catch(function(resp) {
         // handle error response
       });
     };

    //  Logout
    $scope.handleSignOutBtnClick = function() {
      $auth.signOut()
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
		.controller('adminController', ['$scope', '$auth', adminController]);
})();
