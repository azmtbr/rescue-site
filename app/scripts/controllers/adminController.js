(function() {
  function adminController($scope, $rootScope, $timeout, $auth, ipCookie) {
    $scope.isAdmin = false;
    $scope.logoutSuccess = false;
    $scope.loginForm = "";


    // Login
    $scope.handleLoginBtnClick = function() {
     $auth.submitLogin($scope.loginForm)
       .then(function(resp) {
         $rootScope.isAdmin = true;
         $scope.isAdmin = true;
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
          $scope.isAdmin = false;
          $scope.logoutSuccess = true;
          $timeout(function () {
            $scope.logoutSuccess = false;
          }, 5000);
        })
        .catch(function(resp) {
          alert('You are not logged in')
        });
    };
  }


  angular
		.module('rescueSite')
		.controller('adminController', ['$scope', '$rootScope', '$timeout', '$auth', 'ipCookie', adminController]);
})();
