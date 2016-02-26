(function() {
	function Animals() {

		var caramel = {
       id: 1,
			 name: 'Caramel',
       breed: 'DSH',
       sex: 'Female'
    };

    var fido = {
      id : 2,
      name: 'Fido',
      breed: 'Dog',
      sex: 'Male'
    };

		return {
      getCollection: function() {
  				return [fido, caramel];
  		},
			getAnimal: function() {
					return caramel;
			}

    };
	}

	angular
		.module('rescueSite')
		.factory('Animals', Animals);
})();
