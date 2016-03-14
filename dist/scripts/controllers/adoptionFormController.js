(function() {
  function adoptionFormController($scope, $location, Restangular) {

    

    $scope.adoption = {desired_animal: "{{animal.name}}"}

    $scope.clearForm = function() {
      $scope.adoption = {name: "", email: "", age: false, street_address: "", mailing_address: "",
                       city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                       work_phone: "", desired_animal: ""};
    }

    $scope.adoptionNotice = {message: "You have a new adoption form to review. Click the link below to view the form in the admin section of your website",
                             link: "localhost:3000/adoption-forms"};


    $scope.sendAdoptionForm = function(contact, form) {

      Restangular.one('').post('adoptionnotices', $scope.adoptionNotice);
      Restangular.one('').post('adoptions', $scope.adoption);
      $scope.clearForm();
      $location.path('/animals');
    }
}




  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', '$location', 'Restangular', adoptionFormController]);
})();
