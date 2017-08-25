var app = angular.module('hfhp.welcome', []);


app.controller('welcomeController', function($scope) {
    $(window).scroll(function() {
        if($(window).scrollTop() != 0) {
            $('.header').css({
                'background-color': '#4652CB',
                'opacity': '.9'
            })
        } else {
            $('.header').css({
                'background-color': 'transparent',
                'opacity': '1'
            })
        }
    })




    $scope.topics = [
        {
            topic: 'Tobacco Cessation',
            url: 'http://assets4.lbc.co.uk/2016/49/cigarettes-1481043352-herowidev4-0.jpg'
        },
        {
            topic: 'A Fine Time For Wine',
            url: 'http://assets.bubblear.com/wp-content/uploads/2016/08/01115459/20150909205144-red-wine-classy-evening-dinner.jpeg'
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

