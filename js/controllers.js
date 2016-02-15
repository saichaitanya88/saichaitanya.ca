var ctrls = angular.module('controllers', []);

ctrls.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.phone = "Click to reveal";
	$scope.email = "Click to reveal";
	$scope.revealPhone = function() {
		$scope.phone = '416 897 1656';
		var eventDate = {
		  hitType: 'click',
		  eventCategory: 'revealPhone',
		  eventAction: 'click',
		  eventLabel: window.location.hash
		};
  	ga('send', eventDate);
	}
	$scope.revealEmail = function() {
		$scope.email = 'saichaitanya88@gmail.com';
		var eventDate = {
		  hitType: 'click',
		  eventCategory: 'revealEmail',
		  eventAction: 'click',
		  eventLabel: window.location.hash
		};
  	ga('send', eventDate);
	}
  // $(document).ready(function(){
  // });
  angular.element(document).ready(function(){
  	$('.collapsible').collapsible();
  	var eventDate = {
		  hitType: 'click',
		  eventCategory: window.location.hash,
		  eventAction: 'click',
		  eventLabel: window.location.hash
		};
		//console.log(eventDate);
  	ga('send', eventDate);
  });
}]);
