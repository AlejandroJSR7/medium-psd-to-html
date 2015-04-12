/*
	JS
	Julian Alejandro Sosa
	ja5054r@gmail.com
	ja5054r
*/

$('.header_image').parallax({imageSrc: 'images/slider/principal-1.jpg'});
$('.share-article').parallax({imageSrc: 'images/design/bg/bg-footer.jpg'});


$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.backToTop').fadeIn();
		} else {
			$('.backToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.backToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});