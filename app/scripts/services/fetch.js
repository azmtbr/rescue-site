(function() {
  function Fetch($resource) {
    return $resource("/api/rescues/:rescue_id/animals", { id: "@id" },
      {
        'index':  { method: 'GET', isArray: true },
        'show':   { method: 'GET', isArray: false },
      }
    );
  }


  angular
		.module('rescueSite')
		.factory('Fetch', ['$resource', Fetch]);
})();
