var $ = require('jquery');
var fullpage = require('fullpage.js');


$(document).ready(function() {

    $('#fullpage').fullpage({
        verticalCentered: true,
        lockAnchors: true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        navigation: true,
        navigationTooltips: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'Footer'],
        showActiveTooltip: true,
        menu: '#menu',
        sectionsColor: ['#fff',  '#f5f5f5', '#e5e5e5', '#fff', '#0d0d0d']
    });
});


