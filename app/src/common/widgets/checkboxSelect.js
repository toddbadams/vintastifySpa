(function() {
  'use strict';

	angular.module('vt-common')
		.directive('tbCheckboxSelect',
			function() {
				return {
					restrict: 'E',
					replace: true,
					require: 'ngModel',
					scope: { 
						options: '=',
						model: '=ngModel'
					},
					templateUrl: 'src/common/widgets/views/checkboxSelect.html',
					link: function ($scope, element, attrs, controller) {}
				};
			}
		);
})();