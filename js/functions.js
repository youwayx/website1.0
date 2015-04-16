$(document).ready(function(){
	// $('.banner-title').addClass("animated fadeIn");
	// $('.banner-subtitle').addClass("animated fadeIn");

});
$(window).scroll(function(){

	// var wScroll = $(this).scrollBottom();
	// var op = 0;
	if (isScrolledIntoView(".fade-area")){
		$('.fade-area').addClass("animated fadeIn");
	}
	if (isScrolledIntoView(".responsive-img")){
		$('.responsive-img').addClass("animated fadeIn");
	}
});

function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height()/2;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}