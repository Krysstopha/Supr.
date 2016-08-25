var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.intro = 'About the Web Services.';
  $scope.product = [
    {
      name: 'Standard Package',
      price: 329.99,
      itemF: 'Full functionality website',
      itemR: 'Responsive Design',
      itemC: 'CMS',
      itemH: 'Help with deployment',
    },
    {
      name: 'Creative Package',
      price: 489.99,
      itemF: 'Full functionality website',
      itemR: 'Responsive Design',
      itemC: 'CMS',
      itemH: 'Help with deployment',
    },
    {
      name: 'Business Package',
      price: 649.99,
      itemF: 'Full functionality website',
      itemR: 'Responsive Design',
      itemC: 'CMS',
      itemH: 'Help with deployment',
    }
  ];

});
