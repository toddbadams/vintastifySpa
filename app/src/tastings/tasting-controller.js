(function() {
  'use strict';
  var _moduleName = 'vt-tastings',
    _controllerName = 'TastingController';

  angular.module(_moduleName)
    .controller(_controllerName, [
      'tastingsService', '$mdSidenav', 'vtLog',
      TastingController
    ]);

  function TastingController(tastingsService, $mdSidenav, log) {
    var self = this,
      _log = log.logger(_moduleName + '.' + _controllerName);

    self.options = null;
    self.selected = null;
    self.wines = [];
    self.selectWine = selectWine;
    self.toggleList = toggleWineList;

    // Load all tasted wines
    tastingsService
      .loadWines()
      .then(function(wines) {
        self.wines = [].concat(wines);
        self.selected = wines[0];
        _log.debug('set wine list on scope', self);
      });

    // Load the Systematic Approach to Tasking Wine (SAT) options
    tastingsService
      .loadOptions()
      .then(function(options) {
        self.options = options;
        _log.debug('set wine tasting options to scope', self);
      })

    function selectWine(wine) {
      self.selected = angular.isNumber(wine) ? $scope.wines[wine] : wine;
      _log.debug('set selected wine on scope', self);
      $mdSidenav('left').close();
    }

    function toggleWineList() {
      $mdSidenav('left').toggle();
    }
  }
})();