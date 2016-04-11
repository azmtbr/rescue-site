(function() {
	function slider($timeout, Restangular) {

		return {
			templateUrl: '/templates/directives/slider.html',
			replace: true,
			restrict: 'AE',
			scope: {
  				landing_images: '=bind'
						},
			link: function (scope, element, attrs){
				scope.animate = true;

        Restangular.one('rescues', slug).get().then(function(rescue) {
          scope.rescue = rescue

          Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery.id).all('landing_images').getList().then(function(landing_images) {
            scope.landing_images = landing_images;
          });



				scope.landing_images[scope.currentIndex] = 0; // starts slider with first image in array

				scope.setCurrentSlideIndex = function(index) {
		       scope.currentIndex = index;
	      };

		    scope.isCurrentSlideIndex = function(index) {
		       return scope.currentIndex === index;
		    };


        scope.next = function() {
        scope.currentIndex < scope.landing_images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.landing_images.length - 1;
        };


				scope.userSignedIn = true

				scope.deletePic = function(landing_image) {
	        Restangular.one('rescues', slug).one('landing_galleries', rescue.landing_gallery.id).one('landing_images', landing_image.id).remove().then(function(){
	          scope.landing_images = _.without(scope.landing_images, landing_image);
	        });
	      };


	        scope.$watch('currentIndex', function() {
	          scope.landing_images.forEach(function(landing_image) {
	            landing_image.visible = false; // make every image invisible
	          });

	          scope.landing_images[scope.currentIndex].visible = true; // make the current image visible
	        });
				});

        // Slider Animation
        var timer;
        var sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 3000);
          }, 300);
        };

        sliderFunc();

        scope.$on('$destroy', function() {
          $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
        });
	     }
     }
   }
angular
		.module('rescueSite')
		.directive('slider', ['$timeout', 'Restangular', slider]);
})();
