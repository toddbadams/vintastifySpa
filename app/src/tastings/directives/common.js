(function() {
	'use strict';
	var _moduleName = 'vt-tastings',
		_directiveName = 'tbTastingCommon';

	angular.module(_moduleName)
		.directive(_directiveName, ['vtLog',
			directive
		]);

	function directive(log) {

    var _log = log.logger(_moduleName + '.' + _directiveName);

		return {
			restrict: 'E',
			replace: true,
			require: 'ngModel',
			scope: {
				options: '=',
				model: '=ngModel'
			},
			templateUrl: 'src/tastings/views/common.html',
			link: function($scope, element, attrs, controller) {
				_log.debug('link function started', $scope)

			}
		};
	}
})();