(function() {
  function adoptionFormController($scope, $location, $stateParams, Restangular) {

    Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
      return $scope.animal = animal;
    })

    $scope.adoptionFormSent = false;
    $scope.adoptionNotice = {message: "You have a new adoption form to review. Click the link below to view the form in the admin section of your website",
                             link: "localhost:3000/adoption-forms"};

    $scope.clearForm = function() {
      $scope.adoption = {name: "", email: "", age: false, street_address: "", mailing_address: "",
                       city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                       work_phone: "", desired_animal: ""};
    }



    $scope.sendAdoptionForm = function(contact, form) {
      Restangular.one('').post('adoptionnotices', $scope.adoptionNotice);
      Restangular.one('').post('adoptions', $scope.adoption);
      $scope.clearForm();
      $scope.adoptionFormSent = true;
      var successAlert = $('.page-content').position();
        $(window).scrollTop(successAlert.top);
        // $(window).animate({
        //   scrollTop: $(successAlert)
        // }, 1500)
    }
}




  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', '$location', '$stateParams', 'Restangular', adoptionFormController]);
})();
