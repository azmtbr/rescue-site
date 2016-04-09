(function () {
		function config($stateProvider, $locationProvider, $authProvider, RestangularProvider) {
    window.slug = location.hostname.substring(0,location.hostname.indexOf("."));
		RestangularProvider.setBaseUrl('https://rescue-site.herokuapp.com/api');


		$authProvider.configure({
			apiUrl: 'https://rescue-site.herokuapp.com/api'
		});



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
				url: '/animals/:slug',
				controller: 'profileController as profile',
				templateUrl: '/templates/profile.html'
			})

			.state('adoption', {
				url: '/animals/:slug/adoption',
				controller: 'adoptionFormController as adoptionForm',
				templateUrl: '/templates/adoption.html'
			})

			.state('adoption-show', {
				url: '/adoption-forms',
				controller: 'adoptionShowController as adoptionShow',
				templateUrl: '/templates/adoption-show.html'
			})

			.state('adoption-print', {
				url: '/adoption-forms/:id',
				controller: 'adoptionPrintController as adoptionPrint',
				templateUrl: '/templates/adoption-print.html'
			})

			.state('contact', {
				url: '/contact',
				controller: 'contactController as contact',
				templateUrl: '/templates/contact.html'
			})

			.state('admin', {
				url: '/admin',
				controller: 'adminController as admin',
				templateUrl: '/templates/admin.html'
			});
	}

	angular
		.module('rescueSite', ['ui.router', 'ui.bootstrap', 'restangular', 'ngFileUpload', 'ngAnimate', 'ng-token-auth', 'ipCookie'])
		.config(config)
		.run(function($auth) {
			$auth.validateUser();
		});
})();
