(function() {
  function adoptionFormController($scope, $location, $stateParams, Restangular) {

    Restangular.one('rescues', slug).one('animals', $stateParams['slug']).get().then(function(animal) {
      $scope.animal = animal;
      $scope.adoption = {animal_id: animal.id};
    });



    $scope.adoptionFormSent = false;
    $scope.adoptionNotice = {message: "You have a new adoption form to review. Click the link below to view the form in the admin section of your website",
                             link: "rescue-site.herokuapp.com/adoption-forms"};


    $scope.clearForm = function() {
      $scope.adoption = {first_name: "", last_name: "", email: "", age: false, street_address: "", mailing_address: "",
                       city: "", state: "", postal_code: "", home_phone: "", cell_phone: "",
                       work_phone: ""};
    }



    $scope.sendAdoptionForm = function(contact, form, rescue) {
      Restangular.one('rescues', slug).get().then(function(rescue) {
        $scope.rescue = rescue;
        Restangular.one('').post('/rescues/' + rescue.id + '/adoptionnotices', $scope.adoptionNotice);
        Restangular.one('').post('/rescues/' + rescue.id + '/adoptions', $scope.adoption);
        $scope.clearForm();
        $scope.adoptionFormSent = true;
        var successAlert = $('.page-content').position();
          $(window).scrollTop(successAlert.top);
      });
    }

  }




  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', '$location', '$stateParams', 'Restangular', adoptionFormController]);
})();
