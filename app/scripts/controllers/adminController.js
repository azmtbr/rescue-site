(function() {
  function adminController($scope, $rootScope, $auth) {
    $scope.isAdmin = false;


    // Admin Register
    $scope.handleRegBtnClick = function() {
     $auth.submitRegistration($scope.registrationForm)
       .then(function(resp) {
         console.log('registration successful')
         $scope.registrationForm = {};
       })
       .catch(function(resp) {
         console.log('nope')
         $scope.registrationForm = {};
       });
     };


    // Login
    $scope.handleLoginBtnClick = function() {
     $auth.submitLogin($scope.loginForm)
       .then(function(resp) {
         $rootScope.isAdmin = true;
         $scope.loginForm = "";
       })
       .catch(function(resp) {
         alert('login failed');
         $scope.loginForm = "";
       });
     };

    //  Logout
    $scope.handleSignOutBtnClick = function() {
      $auth.signOut($scope.user)
        .then(function(resp) {
          $rootScope.isAdmin = false;
        })
        .catch(function(resp) {
          alert('logout not successful')
        });
    };
  }


  angular
		.module('rescueSite')
		.controller('adminController', ['$scope', '$rootScope', '$auth', adminController]);
})();
