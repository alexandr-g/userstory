angular.module('MyApp', ['appRoutes', 'mainCrtl', 'authService', 'userCrtl', 'userService'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');

})

