(function () {
	function config($stateProvider, $locationProvider, RestangularProvider) {

		RestangularProvider.setBaseUrl('http://127.0.0.1:4000/api');

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
			})

			.state('contact', {
				url: '/contact',
				controller: 'contactController as contact',
				templateUrl: '/templates/contact.html'
			})

			.state('contact-form', {
				url: '/contact-form',
				controller: 'contactFormController as contactForm',
				templateUrl: '/templates/contact-form.html'
			});
	}

	angular
		.module('rescueSite', ['ui.router', 'ui.bootstrap', 'restangular'])
		.config(config)
})();
