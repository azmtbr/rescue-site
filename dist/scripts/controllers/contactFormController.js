(function() {
  function contactFormController($scope, Restangular) {

    $scope.contact = {name: "", email: "", message: ""};

    $scope.sendContactForm = function(contact) {
      Restangular.one('/rescues/1/').post('contacts', $scope.contact);
      $scope.contact = {name: "", email: "", message: ""};
      console.log('message sent');
    }

  }



  angular
		.module('rescueSite')
		.controller('contactFormController', ['$scope', 'Restangular', contactFormController]);
})();
