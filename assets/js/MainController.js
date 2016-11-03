
/* START OF MY APP MODULE */
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.intro = 'Price Guide For My Personalised Web Services.';
  /* SERVICE ANGULAR DATA */
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
  /* PORTFOLIO ANGULAR DATA */
  $scope.portfolio = [
    {
      title: 'Personal Website',
      image: 'imgs/kryssdesign.JPG',
      para: 'Designed to advertise myself, Khryss\' Designs is a personal website to display my portfolio. It has been entirely built by me, as a meetng point for customers to understand what it is that I can achieve.',
    },
    {
      title: 'Cooking Creations',
      image: 'imgs/kryssdesign.jpg',
      para: '',
    }
  ];
});
