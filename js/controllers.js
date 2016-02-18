var ctrls = angular.module('controllers', []);

ctrls.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.phone = "Click to reveal";
	$scope.email = "Click to reveal";
	$scope.revealPhone = function() {
		$scope.phone = '416 897 1656';
  	ga('send', 'event', 'revealPhone', 'click', window.location.hash);
	}
	$scope.revealEmail = function() {
		$scope.email = 'saichaitanya88@gmail.com';
  	ga('send', 'event', 'revealEmail', 'click', window.location.hash);
	}
  angular.element(document).ready(function(){
  	// if ($(window).width() > 1024){
  	// 	$(".flow-text").removeClass("flow-text");
  	// }
  	$('.collapsible').collapsible();
  	ga('send', 'event', window.location.hash, 'click', window.location.hash);
  });
}]);
