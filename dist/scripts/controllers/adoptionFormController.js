(function() {
  function adoptionFormController($scope, Restangular) {

    $scope.adoption = {name: "", email: "", age: false, street_address: "", mailing_address: "",
                       city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                       work_phone: "", desired_animal: ""};

    $scope.adoptionNotice = {message: "You have a new adoption form to review. Click the link below to view the form in the admin section of your website",
                             link: "localhost:3000/adoption-forms"};


    $scope.sendAdoptionForm = function(contact) {
      Restangular.one('').post('adoptionnotices', $scope.adoptionNotice);
      Restangular.one('').post('adoptions', $scope.adoption);
      $scope.adoption = {name: "", email: "", age: false, street_address: "", mailing_address: "",
                         city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                         work_phone: "", desired_animal: ""};
    }
}




  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', 'Restangular', adoptionFormController]);
})();
