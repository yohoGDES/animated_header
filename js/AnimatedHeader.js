var AnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.header' ),
        didScroll = false,
        changeHeaderOn = 100;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'header-sm' );
        }
        else {
            classie.remove( header, 'header-sm' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();

var nav = document.querySelector('.menu-trigger');
var toggleState = function (elem, one, two) {
  var elem = document.querySelector(elem);
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

nav.onclick = function (e) {
  toggleState('.menu-wrap', 'closed', 'open');
  e.preventDefault();
};