(function() {
	function Animals() {

		var caramel = {
       id: 1,
			 name: 'Caramel',
       breed: 'DSH',
       sex: 'female'
    };

    var fido = {
      id : 2,
      name: "Fido",
      breed: 'dog',
      sex: 'male'
    };

		return {
      getCollection: function() {
  				return [fido, caramel];
  		}

    };
	}

	angular
		.module('rescueSite')
		.factory('Animals', Animals);
})();
