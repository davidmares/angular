

(function(){
	
	"use strict";

	var app = angular.module('app', []);


	app.controller('mainCtrl', function($scope, userService){
		$scope.titulo = 'Hola mundo';
		$scope.limpiar = function(){
			$scope.titulo = 'Hola';
		}
	});


	app.service('userService', function(){
		this.users = [{
			nobre: 'david',
			edad: '15'
		},
		{
			nombre: 'mariano',
			edad: '27'
		}];
	});





})();

