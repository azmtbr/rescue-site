(function() {
  function adoptionFormController($scope, $http, adoptionForm) {
    $scope.isAdmin = true;
    // $scope.composeForm = {};
    // $scope.sentForms = [];


    $scope.sendAdoptionForm = function() {
      // $scope.sentForms.push($scope.composeForm);
      adoptionForm.send();
      console.log("Send Button Working");
    };



  }



  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', '$http', 'adoptionForm', adoptionFormController]);
})();
