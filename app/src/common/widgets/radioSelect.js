(function() {
  'use strict';

	angular.module('vt-common')
		.directive('tbRadioSelect',
			function() {
				return {
					restrict: 'E',
					replace: true,
					require: 'ngModel',
					scope: { 
						options: '=',
						model: '=ngModel'
					},
					templateUrl: 'src/common/widgets/views/radioSelect.html',
					link: function ($scope, element, attrs, controller) {}
				};
			}
		);
})();