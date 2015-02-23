(function(window, angular, undefined) {
'use strict';

var module = angular.module('ngHolder', []);

module.directive('holder', [
  function() {
    return {
      link: function(scope, element, attrs) {
        if(attrs.holder)
          attrs.$set('data-src', attrs.holder);
        Holder.run({images:element[0]});
      }
    };
  }]);

})(window, window.angular);
