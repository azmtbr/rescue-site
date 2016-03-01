(function() {
  function listingController($scope, $resource, Animals ) {
    return $resource('api/rescues/:id/animals', { id: '@id' },
      {
        'index': { method: 'GET', isArray: true}
      }
    );
  }


  angular
		.module('rescueSite')
		.controller('listingController', ['$scope', 'resource', 'Animals', listingController]);
})();
