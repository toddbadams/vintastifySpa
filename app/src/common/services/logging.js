(function() {
    'use strict';

    angular.module('vt-common')
        .factory('vtLog', ['$log',
            logFactory
        ]);

    function logFactory($log) {

        function logDebug(message, data, source) {
            $log.debug(buildMessage(message, data, source));
        }

        function logError(message, data, source) {
            $log.error(buildMessage(message, data, source));
        }

        function buildMessage(message, data, source) {
            return {
                message: message,
                data: data,
                source: source
            };
        }

        function logger(source) {
            var _source = source;
            return {
                debug: function(message, data){
                    return logDebug(message, data, _source);
                },
                error: function(message, data){
                    return logError(message, data, _source);
                }
            };
        }

        return {
            logger: logger
        }
    }
})();