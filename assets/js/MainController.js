/* START OF MY APP MODULE */
var app = angular.module('serviceData', []);
app.controller('myCtrl', function($scope) {
    $scope.intro = 'A plan right for you.';
    /* SERVICE ANGULAR DATA */
  $scope.product = [
    // {
    //   name: 'Standard Package',
    //   price: 329.99,
    //   item1: 'Full functionality website',
    //   item2: 'Responsive Design',
    //   item3: 'CMS',
    // },
    {
      name: 'A little something',
     // price: 399.99,
    //   item1: 'Functionality',
    //   item2: 'Responsive Design',
    //   item3: 'CMS',
    //   item4: 'Help with deployment and domain',
      desc: 'A package for anyone with a bright idea, created for any occassion or startup.'
    },
    {
      name: 'Personal',
    // price: 649.99,
    //   item1: 'Extended Functionality',
    //   item2: 'Responsive Design',
    //   item3: 'CMS',
    //   item4: 'Help with deployment and domain',
    //   item5: 'Online Shopping Integration',
    desc: 'Perfect for any blogger type role, a personalised website centred around agile functionality, and tailored operation.'
    },
    {
      name: 'Business oriented',
    //  price: 749.99,
    //   item1: 'Specific Functionality',
    //   item2: 'Responsive Desgin',
    //   item3: 'CMS',
    //   item4: 'Help with deployment and domain',
    //   item5: 'Specifics you wish to be implemented',
    desc: 'A package that goes a little deeper, includes greater functionality with integrated shopping support.',
    }
];
  // /* PORTFOLIO ANGULAR DATA */
  // $scope.portfolio = [
  //   {
  //     title: 'Personal Website',
  //     image: 'imgs/kryssdesign.JPG',
  //     para: 'Designed to advertise myself, Khryss\' Designs is a personal website to display my portfolio. It has been entirely built by me, as a meetng point for customers to understand what it is that I can achieve.',
  //   },
  //   {
  //     title: 'Cooking Creations',
  //     image: 'imgs/kryssdesign.jpg',
  //     para: '',
  //   }
  // ];
//   // Skills container
//   $scope.skill = [
//       {
//         skill: 'Learning',
//
//       }
//   ]
}); // DON'T FORGET THIS!!!
