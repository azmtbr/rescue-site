(function() {
  function adoptionFormController($scope, $http) {



    $scope.sendAdoptionForm = function() {
      console.log("posting data...");

      var data = {
        adopterName: $scope.adopterName,
        animalName: $scope.animalName
      };
      // $http.post("https://", data)
      //   .success(function(data) {
      //     console.log('All set');
      //   })
      //   .error(function(data) {
      //     console.log('Nice try');
      //   });
    };


  }



  angular
		.module('rescueSite')
		.controller('adoptionFormController', ['$scope', '$http', adoptionFormController]);
})();
