/* global
 Holder:false
 */
(function (window, angular, undefined) {
    'use strict';

    var module = angular.module('ngHolder', []);

    module.directive('holder', ['$timeout',
        function ($timeout) {
            return {
                link: function ($scope, $element, $attrs) {

                    $timeout(function () {
                        Holder.run($element);

                        if ($attrs.holderWatch !== undefined) {
                            $attrs.$observe('src', function () {
                                Holder.run($element);
                            });
                        }
                    });
                }
            };
        }]);

})(window, window.angular);
