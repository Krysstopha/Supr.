var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.intro = 'Price guide for my personalised Web Services.';
  $scope.product = [
    {
      name: 'Website Package',
      price: 329.99,
      item1: 'Full functionality website',
      item2: 'Responsive Design',
      item3: 'CMS',
    },
    {
      name: 'Blogger Package',
      price: 489.99,
      item1: 'Full functionality website',
      item2: 'Responsive Design',
      item3: 'CMS',
      item4: 'Help with deployment and domain',
    },
    {
      name: 'Business Package',
      price: 649.99,
      item1: 'Full functionality website',
      item2: 'Responsive Design',
      item3: 'CMS',
      item4: 'Help with deployment and domain',
      item5: 'Online Shopping Integration',
    }
  ];
});
