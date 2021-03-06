(function() {
  function contactController($scope, $location, $anchorScroll, Restangular) {

    $scope.contact = {name: "", email: "", message: ""};
    $scope.contactFormOpen = false;
    $scope.messageSent = false;

    $scope.sendContactForm = function(contact) {
      Restangular.one('').post('contacts', $scope.contact);
      $scope.contact = {name: "", email: "", message: ""};
      $scope.toggleContactForm();
      $scope.messageSent = true;
    }

    $scope.toggleContactForm = function() {
      $scope.contactFormOpen = $scope.contactFormOpen === false ? true: false;
      if ($scope.contactFormOpen) {
        $scope.messageSent = false;

        $(".contact-form").fadeIn(function(){
          var sendButtonPosition = $('form#contact-form button').position();
            $(window).scrollTop(sendButtonPosition.top);
        });
      } else {
        $(".contact-form").fadeOut();
      }

    }
  }



  angular
		.module('rescueSite')
		.controller('contactController', ['$scope','$location', '$anchorScroll', 'Restangular', contactController]);
})();
