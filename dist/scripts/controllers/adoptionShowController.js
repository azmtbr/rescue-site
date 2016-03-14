(function() {
  function adoptionShowController($scope, Restangular) {


    $scope.isCollapsed = true;
    $scope.adoptions = Restangular.all('adoptions').getList().$object;
    $scope.adoption = Restangular.one('adoptions', 2).get().$object;


    $scope.printTo = function (printSection) {

      var innerContents = document.getElementById('printSection').innerHTML;
      var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      popupWinindow.document.write('<html>' +
                                      '<head>' +
                                        '<link rel="stylesheet" type="text/css" href="print.css" />' +
                                      '</head>' +
                                      '<body onload="window.print()">' +
                                        '<img class="panel-image" src="/assets/images/fkr-logo.jpg" height="75" width="auto" />' +
                                        innerContents +
                                    '</html>');
      popupWinindow.document.close();
    }

    // $scope.download = function(printSection) {
    //   var form = document.body.appendChild(document.createElement("form"));
    //
    //   form.download = "adoption-form.html";
    //   form.href = "data:text/html," + document.getElementById('printSection').innerHTML;
    // }


  }


  angular
		.module('rescueSite')
		.controller('adoptionShowController', ['$scope', 'Restangular', adoptionShowController]);
})();
