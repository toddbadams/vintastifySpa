(function() {
  'use strict';

	angular.module('vt-tastings')
		.directive('tbTastingAppearance',
			function() {
				return {
					restrict: 'E',
					replace: true,
					require: 'ngModel',
					scope: { 
						options: '=',
						model: '=ngModel'
					},
					templateUrl: 'src/tastings/views/appearance.html',
					link: function ($scope, element, attrs, controller) {
						
					}
				};
			}
		);
})();