(function() {
  'use strict';
  var _moduleName = 'vt-tastings',
    _serviceName = 'tastingsService';

  angular.module(_moduleName)
    .service(_serviceName, ['Restangular', 'vtLog',
      tastingsService
    ]);

  function tastingsService(Restangular, log) {
    var _log = log.logger(_moduleName + '.' + _serviceName);

    function loadJsonFile(filename) {
      var response = Restangular.one(filename).get().then(function(data) {
        _log.debug('loaded json file', data);
        return data;
      })
      return response;
    }

    return {
      loadWines: function() {
        return loadJsonFile('/src/tastings/data/wines.json');
      },
      loadOptions: function() {
        return loadJsonFile('/src/tastings/data/options.json');
      }
    };
  }
})();