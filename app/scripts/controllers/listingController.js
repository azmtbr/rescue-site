(function() {
  function listingController($scope, $timeout, Restangular, $stateParams) {

    Restangular.one('rescues', slug).all('animals').getList().then(function(animals) {
      $scope.animals = animals;
    })



    Restangular.one('rescues', slug).get().then(function(rescue) {
      $scope.rescue = rescue

      Restangular.one('rescues', slug).one('animals', $stateParams['slug']).get().then(function(animal) {
        $scope.animal = {rescue_id: rescue.id};
      })

      $scope.clearForm = function() {
        $scope.animal = {name: "", breed: "", email: "", sex: "", dob: "", short_bio: "",
                         long_bio: ""};
      }


      $scope.addAnimal = function() {
        Restangular.one('').post('rescues/' + rescue.id + '/animals', $scope.animal).then(function(response) {
          $scope.animals.push(response);
        })
        $scope.animalCreated = true;
        $scope.clearForm();

        $timeout(function () {
          $scope.animalCreated = false;
        }, 5000);
      }

      $scope.deleteAnimal = function(animal) {
        Restangular.one('rescues', slug).one('animals', animal.id).remove().then(function(){
          $scope.animals = _.without($scope.animals, animal);
        });
      }
    })


  }

  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', '$timeout', 'Restangular', '$stateParams', listingController]);
})();
