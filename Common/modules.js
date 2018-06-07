(function() {
	'use strict';
	angular.module('ngApp.directive', []);
	angular.module('ngApp.services', []);
    angular.module('ngApp.controllers', [ 'ngApp.services', 'ngApp.directives']);
}());