(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});

		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'landingController as landing',
				templateUrl: '/templates/landing.html'
			})

			.state('animals', {
				url: '/animals',
				controller: 'listingController as listing',
				templateUrl: '/templates/listing.html'
			})

			.state('profile', {
				url: '/animals/:name',
				controller: 'profileController as profile',
				templateUrl: '/templates/profile.html'
			})

			.state('adoption-form', {
				url: '/adoption-form',
				controller: 'adoptionFormController as adoptionForm',
				templateUrl: '/templates/adoption-form.html'
			});
	}

	angular
		.module('rescueSite', ['ui.router', 'ui.bootstrap'])
		.config(config);
})();
