var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.intro = 'Price Guide For My Personalised Web Services.';
  $scope.product = [ 
    {
      name: 'Standard Package',
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
    },
    {
      name: 'Special Package',
      price: 749.99,
      item1: 'Full functionality',
      item2: 'Responsive Desgin',
      item3: 'CMS',
      item4: 'Help with deployment and domain',
      item5: 'Specifics you wish to be implemented',
    }
  ];
  $scope.portfolio = [
    {
      title: 'Personal Website',
      image: 'imgs/kryssdesign.JPG',
      para: '',
    },
    {
      title: 'Cooking Creations',
      image: 'imgs/kryssdesign.jpg',
      para: '',
    }
  ];
});
