(function() {
  function adoptionShowController($scope, Restangular) {

    $scope.isCollapsed = true;

    Restangular.one('rescues', slug).all('adoptions').getList().then(function (adoptions) {
      $scope.adoptions = adoptions;
    });

    $scope.printTo = function (adoption) {
      var popupWindow = window.open('adoption-forms/' + adoption.id, '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    }



  }


  angular
		.module('rescueSite')
		.controller('adoptionShowController', ['$scope', 'Restangular', adoptionShowController]);
})();
