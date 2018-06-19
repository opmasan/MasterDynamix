
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
    navigationTooltips: ['MasterDynamix', 'Your success', 'What we do', 'Our expertise', 'Reach us'],
    showActiveTooltip: false,
    menu: '#menu',
    sectionsColor: ['#fff',  '#fff', '#fff', '#fff', '#fff'],
    afterRender: function(){

        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('callback - particles.js config loaded');
        });

        jQuery('.slider').slick({
            dots: true,
            infinite: true,
            speed: 650,
            autoplay: true,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left fa-2x"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right fa-2x"></i></span>',
            autoplaySpeed: 4000,

        });

    },
    afterLoad: function(anchorLink){
        //using anchorLink
        if(anchorLink == 'last'){
            $('*[data-open="popup-trigger"]').addClass('not-active')

        } else {
            $('*[data-open="popup-trigger"]').removeClass('not-active')

        }
    },
    onLeave: function(index, nextIndex, direction) {


        // first animation
        if( index == 1 && nextIndex == 2 ) {
            $isAnimatedSecond.addClass('animated');
            $isAnimatedSecond.eq(0).addClass('fadeInLeftBig').css('animation-delay', '.2s');
            $isAnimatedSecond.eq(1).addClass('fadeInUpBig').css('animation-delay', '.6s');
            // $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
        }


        // second animation
        else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
            $isAnimatedThird.eq(0).addClass('animated fadeIn').css('animation-delay', '0.2s');
            $isAnimatedThird.eq(1).addClass('animated fadeIn').css('animation-delay', '0.7s');
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

$('#arrowAnim').click(function(){
    $.fn.fullpage.moveSectionDown();
});
$(document).ready(function() {
    $('body').fadeTo( "fast", 1 )
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

function validEmail(email) { // see:
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
        console.log("Robot Detected!");
        return true;
    } else {
        console.log("Welcome Human!");
    }
}

// get all data in form and return object
function getFormData() {
    var form = document.getElementById("gform");
    var elements = form.elements; // all form elements
    var fields = Object.keys(elements).filter(function(k) {
        // the filtering logic is simple, only keep fields that are not the honeypot
        return (elements[k].name !== "honeypot");
    }).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        }else if(elements[k].length > 0){
            return elements[k].item(0).name;
        }
    }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
                      // it to be appended to for each item in the loop
        if(elements[k].type === "checkbox"){ // special case for Edge's html collection
            str = str + elements[k].checked + ", "; // take the string and append
                                                    // the current checked value to
                                                    // the end of it, along with
                                                    // a comma and a space
            data[k] = str.slice(0, -2); // remove the last comma and space
                                        // from the  string to make the output
                                        // prettier in the spreadsheet
        }else if(elements[k].length){
            for(var i = 0; i < elements[k].length; i++){
                if(elements[k].item(i).checked){
                    str = str + elements[k].item(i).value + ", "; // same as above
                    data[k] = str.slice(0, -2);
                }
            }
        }
    });

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(data);
    return data;
}

function handleFormSubmit(event) {  // handles form submit withtout any jquery
    event.preventDefault();           // we are submitting via xhr below
    var data = getFormData();         // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
     if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
     return false;
     }
     */

    if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
        var invalidEmail = document.getElementById("email-invalid");
        if (invalidEmail) {
            invalidEmail.style.display = "block";
            return false;
        }
    } else {
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log( xhr.status, xhr.statusText )
            console.log(xhr.responseText);
            document.getElementById("gform").style.display = "none"; // hide form
            var thankYouMessage = document.getElementById("thankyou_message");
            if (thankYouMessage) {
                thankYouMessage.style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
    }
}
function loaded() {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    var form = document.getElementById("gform");
    form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener("DOMContentLoaded", loaded, false);

// get all data in form and return object
function getFormData2() {
    var form = document.getElementById("gform2");
    var elements = form.elements; // all form elements
    var fields = Object.keys(elements).map(function(k) {
        if(elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
        }else if(elements[k].length > 0){
            return elements[k].item(0).name;
        }
    }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
    });
    var data = {};
    fields.forEach(function(k){
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
                      // it to be appended to for each item in the loop
        if(elements[k].type === "checkbox"){ // special case for Edge's html collection
            str = str + elements[k].checked + ", "; // take the string and append
                                                    // the current checked value to
                                                    // the end of it, along with
                                                    // a comma and a space
            data[k] = str.slice(0, -2); // remove the last comma and space
                                        // from the  string to make the output
                                        // prettier in the spreadsheet
        }else if(elements[k].length){
            for(var i = 0; i < elements[k].length; i++){
                if(elements[k].item(i).checked){
                    str = str + elements[k].item(i).value + ", "; // same as above
                    data[k] = str.slice(0, -2);
                }
            }
        }
    });

    // add form-specific values into the data
    data.formDataNameOrder = JSON.stringify(fields);
    data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    console.log(data);
    return data;
}

function handleFormSubmit2(event) {  // handles form submit withtout any jquery
    event.preventDefault();           // we are submitting via xhr below
    var data = getFormData2();         // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
     if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
     return false;
     }
     */

    if( !validEmail(data.email) ) {   // if email is not valid show error
        document.getElementById('email-invalid2').style.display = 'block';
        return false;
    } else {
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            console.log( xhr.status, xhr.statusText )
            console.log(xhr.responseText);
            document.getElementById('gform2').style.display = 'none'; // hide form
            document.getElementById('thankyou_message2').style.display = 'block';
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
    }
}
function loaded2() {
    console.log('contact form submission handler loaded successfully');
    // bind to the submit event of our form
    var form = document.getElementById('gform2');
    form.addEventListener("submit", handleFormSubmit2, false);
};
document.addEventListener('DOMContentLoaded', loaded2, false);