var app = angular.module('app', [
  'ngRoute', 'controllers'
]);

app.config(['$routeProvider', '$locationProvider', 
function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/', {
      templateUrl: 'views/index.html',
      controller: 'MainCtrl',
      title: "Sai Chaitanya"
    }).
  	when('/work-experience', {
      templateUrl: 'views/work-experience.html',
      controller: 'MainCtrl',
      title: "Sai Chaitanya - Work Experience"
    }).
    when('/education', {
      templateUrl: 'views/education.html',
      controller: 'MainCtrl',
      title: "Sai Chaitanya - Education"
    }).
    when('/work-samples', {
      templateUrl: 'views/work-samples.html',
      controller: 'MainCtrl',
      title: "Sai Chaitanya - Education"
    }).
    when('/bio', {
      templateUrl: 'views/bio.html',
      controller: 'MainCtrl',
      title: "Sai Chaitanya - Education"
    }).
    when('/hobbies', {
      templateUrl: 'views/hobbies.html',
      controller: 'MainCtrl',
      title: "Sai Chaitanya - Education"
    }).
    otherwise({
      redirectTo: '/'
    });
    // $locationProvider.html5Mode(true).hashPrefix('!');
}]);