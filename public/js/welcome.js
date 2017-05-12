var app = angular.module('hfhp.welcome', []);


app.controller('welcomeController', function($scope) {
    $scope.topics = [
        {
            topic: 'Tobacco Cessation',
            url: 'http://assets4.lbc.co.uk/2016/49/cigarettes-1481043352-herowidev4-0.jpg'
        },
        {
            topic: 'A Fine Time For Wine',
            url: 'http://charlestonwineandfood.com/wp-content/uploads/2016/09/Master-ing-Wine-101.jpg'
        },
        {
            topic: 'Apple Cider Vinegar: The Real Deal',
            url: 'http://cdn-img.health.com/sites/default/files/styles/small_850/public/1479140700/GettyImages-614444404.jpg?itok=hEJrW310'
        },
        {
            topic: 'Headphones: How Loud is Too Loud?',
            url: 'http://www.usa.philips.com/c-dam/b2c/category-pages/sound-and-vision/headphones/master/fidelio/introduction/Fidelio-headphones-M1-black-edited.jpg'
        }
    ]
})

