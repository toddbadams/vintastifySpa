(function() {
  'use strict';

    angular.module('vt-common')
        .factory('log', ['$log',
            logFactory]);

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

        return {
            debug: logDebug,
            error: logError
        }
    }
})();