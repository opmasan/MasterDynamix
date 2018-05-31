
var $ = require('jquery');
var fullpage = require('fullpage.js');
// var Barba = require('barba.js');

// variables
var $isAnimatedSecond = $('.second .is-animated'),
    $isAnimatedThird = $('.third .is-animated'),
    $isAnimatedFourth = $('.fourth .is-animated'),
    $isAnimatedFifth = $('.fifth .is-animated');

$('#fullpage').fullpage({
    verticalCentered: true,
    lockAnchors: true,
    anchors: ['1', '2', '3', '4', 'last'],
    navigation: true,
    navigationTooltips: ['MasterDynamix', 'Success Key', 'We Can', 'Our Expertise', 'Reach Us'],
    showActiveTooltip: false,
    menu: '#menu',
    sectionsColor: ['#fff',  '#fff', '#fff', '#fff', '#fff'],
    afterRender: function(){

        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });
    },
    afterLoad: function(anchorLink, index){
        //using anchorLink
        if(anchorLink == 'last'){
            $('*[data-open="popup-trigger"]').addClass('not-active')
        } else {
            $('*[data-open="popup-trigger"]').removeClass('not-active')
        }
        if(index == 3){
            jQuery('.slider').slick({
                dots: true,
                infinite: true,
                speed: 650,
                autoplay: true,
                autoplaySpeed: 4000,

            });
        }
    },
    onLeave: function(index, nextIndex, direction) {


        // first animation
        if( index == 1 && nextIndex == 2 ) {
            $isAnimatedSecond.addClass('animated');
            $isAnimatedSecond.eq(0).addClass('fadeInLeftBig').css('animation-delay', '.1s');
            $isAnimatedSecond.eq(1).addClass('fadeInUpBig').css('animation-delay', '.6s');
            // $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
        }


        // second animation
        else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
            $isAnimatedThird.addClass('animated fadeIn').css('animation-delay', '0.7s');
        }


        // third animation
        else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
            $isAnimatedFourth.eq(0).addClass('animated zoomIn').css('animation-delay', '.1s');
            $isAnimatedFourth.eq(1).addClass('animated zoomIn').css('animation-delay', '.5s');

        }
        // fourth animation
        else if( ( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5 ) {
            $isAnimatedFifth.eq(0).addClass('animated zoomIn').css('animation-delay', '.3s');

        }
    }
});
$('#fullpage-partners').fullpage({
    verticalCentered: false,
    lockAnchors: true,
    anchors: ['FreeHomeRisk', 'HazardHub', 'TrueReviewCasino'],
    navigation: true,
    navigationTooltips: ['FreeHomeRisk', 'HazardHub', 'TrueReviewCasino'],
    showActiveTooltip: true,
    menu: '#menu',
    sectionsColor: ['#fff',  '#f7f7f7', '#fff'],
});
console.log('main');


// Barba.Dispatcher.on('newPageReady', function(current, prev, container) {
//     if ( $( 'html' ).hasClass( 'fp-enabled' ) ) {
//         $.fn.fullpage.destroy('all');
//     }
//
//
// });
//
// $(document).ready(function() {
//     Barba.Pjax.start();
//     var FadeTransition = Barba.BaseTransition.extend({
//         start: function() {
//             /**
//              * This function is automatically called as soon the Transition starts
//              * this.newContainerLoading is a Promise for the loading of the new container
//              * (Barba.js also comes with an handy Promise polyfill!)
//              */
//
//             // As soon the loading is finished and the old page is faded out, let's fade the new page
//             Promise
//                 .all([this.newContainerLoading, this.fadeOut()])
//                 .then(this.fadeIn.bind(this));
//         },
//
//         fadeOut: function() {
//             /**
//              * this.oldContainer is the HTMLElement of the old Container
//              */
//
//             return $(this.oldContainer).animate({ opacity: 0 }).promise();
//         },
//
//         fadeIn: function() {
//             /**
//              * this.newContainer is the HTMLElement of the new Container
//              * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
//              * Please note, newContainer is available just after newContainerLoading is resolved!
//              */
//
//             var _this = this;
//             var $el = $(this.newContainer);
//
//             $(this.oldContainer).hide();
//
//             $el.css({visibility : 'visible',
//                 opacity : 0
//             });
//
//             $el.animate({ opacity: 1 }, 400, function() {
//                 /**
//                  * Do not forget to call .done() as soon your transition is finished!
//                  * .done() will automatically remove from the DOM the old Container
//                  */
//
//                 _this.done();
//             });
//         }
//     });
//
//     /**
//      * Next step, you have to tell Barba to use the new Transition
//      */
//
//     Barba.Pjax.getTransition = function() {
//         /**
//          * Here you can use your own logic!
//          * For example you can use different Transition based on the current page or link...
//          */
//
//         return FadeTransition;
//     };
//
// });
//
//
