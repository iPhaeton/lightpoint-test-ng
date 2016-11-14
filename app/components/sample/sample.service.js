'use strict';

angular.
    module('sample').
    factory('Sample', ['$resource',
        function($resource) {
            return $resource('app/sample.json', {}, {
                query: {
                    method: 'GET',
                    isArray: false
                }
            });
        }
    ]);