(function() {
  function contactController($scope, Restangular) {

    $scope.contact = {name: "", email: "", message: ""};
    $scope.contactFormOpen = false;
    $scope.messageSent = false;

    $scope.sendContactForm = function(contact) {
      Restangular.one('').post('contacts', $scope.contact);
      $scope.contact = {name: "", email: "", message: ""};
      $scope.contactFormOpen = false;
      $scope.messageSent = true;
    }

    $scope.toggleContactForm = function() {
      $scope.messageSent = false
      $scope.contactFormOpen = $scope.contactFormOpen === false ? true: false;
    }

  }



  angular
		.module('rescueSite')
		.controller('contactController', ['$scope', 'Restangular', contactController]);
})();
