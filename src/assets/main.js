
var $ = require('jquery');
var fullpage = require('fullpage.js');
// var Barba = require('barba.js');


$('#fullpage').fullpage({
    verticalCentered: true,
    lockAnchors: true,
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    navigation: true,
    navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'Reach Us'],
    showActiveTooltip: false,
    menu: '#menu',
    sectionsColor: ['#fff',  '#f5f5f5', '#e5e5e5', '#fff', '#fff'],
    afterRender: function(){
        jQuery('.slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    }
});

$('#fullpage-partners').fullpage({
    verticalCentered: true,
    lockAnchors: true,
    anchors: ['FreeHomeRisk', 'HazardHub'],
    navigation: true,
    navigationTooltips: ['FreeHomeRisk', 'HazardHub'],
    showActiveTooltip: true,
    menu: '#menu',
    sectionsColor: ['#fff',  '#f7f7f7']
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
