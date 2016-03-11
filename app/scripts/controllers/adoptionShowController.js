(function() {
  function adoptionShowController($scope, Restangular, $stateParams) {


    $scope.isCollapsed = true;
    $scope.adoptions = Restangular.all('adoptions').getList().$object;
    $scope.adoption = Restangular.one('adoptions', 2).get().$object;

    $scope.printTo = function (printSection) {

      var innerContents = document.getElementById('printSection').innerHTML;
      var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
      popupWinindow.document.close();
    }


  }


  angular
		.module('rescueSite')
		.controller('adoptionShowController', ['$scope', 'Restangular', '$stateParams', adoptionShowController]);
})();
