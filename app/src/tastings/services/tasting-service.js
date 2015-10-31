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

    function loadWines() {
      return Restangular
        .one('/src/tastings/data/wines.json')
        .get()
        .then(function(data) {
          angular.forEach(data, function(value, key){
            value.model = {
            common: commonModel(value)
          };
          });
          
          _log.debug('loaded wines json file', data);
          return data;
        });
    }

    function commonModel(data){
      if(!data.propertyGroups) return null;
      var group = findFirst(data.propertyGroups,"name","common");
      var results = {
        country: findFirst(group.properties,"name","country")
      }

      return results;
    }

    function loadOptions() {
      return Restangular
        .one('/src/tastings/data/options.json')
        .get()
        .then(function(data) {
          _log.debug('loaded tastings options json file', data);
          return data;
        });
    }

    function findFirst(arr, prop, value){
      var filteredArr = arr.filter(function(obj){
        return obj[prop] === value;
      })

      if(filteredArr.length<1) return null;
      return filteredArr[0];
    }

    return {
      loadWines: loadWines,
      loadOptions: loadOptions
    };
  }
})();