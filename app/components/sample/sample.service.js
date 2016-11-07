'use strict';

angular.
    module('sample').
    factory('Sample', ['$resource',
        function($resource) {
            return $resource('sample.json', {}, {
                query: {
                    method: 'GET',
                    //params: {phoneId: 'phones'},
                    isArray: false
                }
            });
        }
    ]);