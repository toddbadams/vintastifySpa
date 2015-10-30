(function() {
  'use strict';

  angular.module('vt-tastings')
    .service('tastingsService', ['Restangular', 
      WineService]);

  function WineService(Restangular) {
  

    function loadJsonFile(filename){
      var response = Restangular.one(filename).get();
      return response;
    }

    return {
      loadWines: function() {
        return loadJsonFile('/src/tastings/data/options.json');
      },
      loadOptions: function() {
        return loadJsonFile('/src/tastings/data/options.json');
      }
    };
  }
})();