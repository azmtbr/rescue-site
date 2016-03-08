(function() {
  function adoptionFormController($scope, Restangular) {

    $scope.adoption = {name: "", email: "", age: false, street_address: "", mailing_address: "",
                       city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                       work_phone: "", desired_animal: ""};

    $scope.sendAdoptionForm = function(contact) {
      Restangular.one('').post('adoptions', $scope.adoption);
      $scope.adoption = {name: "", email: "", age: false, street_address: "", mailing_address: "", 
                         city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                         work_phone: "", desired_animal: ""};
    }



    // $scope.toggleContactForm = function() {
    //   $scope.messageSent = false
    //   $scope.contactFormOpen = $scope.contactFormOpen === false ? true: false;
    // }

  }



  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', 'Restangular', adoptionFormController]);
})();
