(function() {
  function adoptionForm($http) {
    return {
      send: function(api_user, api_key, to, toname, subject, text, from) {
        var method = 'POST';
        var url = "https://api.sendgrid.com/api/mail.send.json";
        $http({
            method: method,
            url: url + "api_user=azmtbr1128" +
                "&api_key=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" +
                "&to=monkeydogphotography@gmail.com" +
                "&subject=Hello" +
                "&text=There" +
                "&from=koni@mydog.com"
        }).
        success(function(data, status) {}).
        error(function(data, status) {});
      }
    };
  }

  angular
		.module('rescueSite')
		.factory('adoptionForm', ['$http', adoptionForm]);
})();
