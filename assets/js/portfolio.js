var app = angular.module('portApp', []);
app.controller('portCtrl', function($scope){
   $scope.portfolio = [
       {
           info: 'Personal Website',
           img: '..//assets/css/'
       }
   ] 
});