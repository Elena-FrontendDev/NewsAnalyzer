import "./pages-css/about.css";

import 'flickity'

var Flickity = require('flickity');

var flkty = new Flickity( '.comments__carousel', {

    'wrapAround': true,
    
    'contain': true,
    
    'freeScroll': true,
    'cellAlign': 'center',
    'groupCells': 1,
}); 
