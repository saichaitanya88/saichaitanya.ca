var ctrls = angular.module('controllers', []);

ctrls.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.phone = "Click to reveal";
	$scope.email = "Click to reveal";
	$scope.revealPhone = function() {
		$scope.phone = '416 897 1656';
	}
	$scope.revealEmail = function() {
		$scope.email = 'saichaitanya88@gmail.com';
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
