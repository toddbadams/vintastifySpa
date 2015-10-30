(function() {
  'use strict';

  angular.module('vt-tastings')
    .controller('TastingController', [
      'tastingsService', '$mdSidenav',
      TastingController
    ]);

  function TastingController(tastingsService, $mdSidenav) {
    var self = this;

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
      });

    // Load the Systematic Approach to Tasking Wine (SAT) options
    tastingsService
      .loadOptions()
      .then(function(options) {
        self.options = options;
      })

    function selectWine(wine) {
      self.selected = angular.isNumber(wine) ? $scope.wines[wine] : wine;
      $mdSidenav('left').close();
    }

    function toggleWineList() {
        $mdSidenav('left').toggle();
    }
  }
})();