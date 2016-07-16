(function(){
	"use strict";

	var app = angular.module('app');

	app.service('userService', function(){
		this.users = [
		{
			nombre: 'david',
			edad: '15'
		}
		,
		{
			nombre: 'mariano',
			edad: '27'
		}

		];
	});
	
})();
