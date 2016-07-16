(function(){
	"use strict";
	
	var app = angular.module('app');

	app.controller('mainCtrl', function($scope, userService){
		$scope.nombre = '';
		$scope.edad = '';

		$scope.usuarios = userService.users;

		$scope.agregar = function(){
			
			var obj = {
				nombre : $scope.nombre,
			  edad : $scope.edad
			}

			$scope.usuarios.push(obj);

			$scope.nombre = '';
			$scope.edad = '';
		}
		
	});

})();

