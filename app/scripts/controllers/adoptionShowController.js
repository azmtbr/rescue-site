(function() {
  function adoptionShowController($scope, $stateParams, Restangular) {

    $scope.isCollapsed = true;
    $scope.adoptions = Restangular.all('/animals/animal_id/adoptions').getList().$object;

    // $scope.animals = Restangular.all('animals').getList().$object;

    Restangular.all('animals').getList().then(function(animals) {
      $scope.animal = animals[0];
    })

    // Restangular.all('animals').one('', $stateParams['slug']).get().then(function(animals) {
    //   $scope.animal = animals;
    // })

    // Restangular.one('animals', $stateParams['slug']).get().then(function(animal) {
    //   $scope.animal = animal;
    // })

    $scope.printTo = function (adoption) {
      var popupWindow = window.open('adoption-forms/' + adoption.id, '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    }



  }


  angular
		.module('rescueSite')
		.controller('adoptionShowController', ['$scope', '$stateParams', 'Restangular', adoptionShowController]);
})();
