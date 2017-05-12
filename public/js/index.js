var app = angular.module('hfhp', [
    'ngRoute',
    'hfhp.welcome'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        reditectTo: '/welcome'
    });

    $routeProvider.when('/welcome', {
        templateUrl: 'public/views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});


app.controller('indexController', function($scope) {
    $scope.headerSearchFunc = function() {
        alert('hgfdjskg')
    }
})