(function(){
	"use strict";
	
	var app = angular.module('app');

	app.controller('mainCtrl', function($scope, userService){
		$scope.titulo = 'Hola mundo';

		$scope.usuarios = userService.users;

		$scope.limpiar = function(){
			$scope.titulo = 'Hola';
		}
	});

})();

