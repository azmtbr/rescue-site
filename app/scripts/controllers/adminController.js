(function() {
  function adminController($scope, $rootScope, $auth, ipCookie) {
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
         alert("you are logged in");
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
      $auth.signOut($rootScope.user)
        .then(function(resp) {
          alert('you are logged out')
          $rootScope.isAdmin = false;
        })
        .catch(function(resp) {
          alert('logout not successful')
        });
    };
  }


  angular
		.module('rescueSite')
		.controller('adminController', ['$scope', '$rootScope', '$auth', 'ipCookie', adminController]);
})();
