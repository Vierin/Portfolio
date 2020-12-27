$(function(){
//progressbar animation
var bar1 = new ProgressBar.Line('#progressbar1', {easing: 'easeInOut', color: '#FF4900', svgStyle: {width: '100%', height: '100%'}});
var bar2 = new ProgressBar.Line('#progressbar2', {easing: 'easeInOut', color: '#FF7004', svgStyle: {width: '100%', height: '100%'}});
var bar3 = new ProgressBar.Line('#progressbar3', {easing: 'easeInOut', color: '#FF9809', svgStyle: {width: '100%', height: '100%'}});
var bar4 = new ProgressBar.Line('#progressbar4', {easing: 'easeInOut', color: '#FFBF0D', svgStyle: {width: '100%', height: '100%'}});
var bar5 = new ProgressBar.Line('#progressbar5', {easing: 'easeInOut', color: '#FF4900', svgStyle: {width: '100%', height: '100%'}});
var bar6 = new ProgressBar.Line('#progressbar6', {easing: 'easeInOut', color: '#FF7004', svgStyle: {width: '100%', height: '100%'}});
var bar7 = new ProgressBar.Line('#progressbar7', {easing: 'easeInOut', color: '#FF9809', svgStyle: {width: '100%', height: '100%'}});
var bar8 = new ProgressBar.Line('#progressbar8', {easing: 'easeInOut', color: '#FFBF0D', svgStyle: {width: '100%', height: '100%'}});

$(document).ready(function() {
    var windowHeight = $(window).height();

    $(document).on('scroll', function() {
        $('.skills-wrap').each(function() {
            var self = $(this),
            height = self.offset().top + self.height();
            if ($(document).scrollTop() + windowHeight >= height) {
                
                bar1.animate(.75);
                bar2.animate(.85);
                bar3.animate(.5);
                bar4.animate(.3);
                bar5.animate(.45);
                bar6.animate(.6);
                bar7.animate(.4);
                bar8.animate(.2);
            }
        });
    });
});
//progressbar animation end



//header hide
let header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
//end header hide


//works filter
let fActive;
 
function filterColor(tech){
 if(fActive != tech){
 $('div.project').filter('.'+tech).slideDown();
 $('div.project').filter(':not(.'+tech+')').slideUp();
 fActive = tech;
 }
}
 
$('.f-web').click(function(){ 
    filterColor('web'); 
    $('.works-category').removeClass('works__active');
    $(this).addClass('works__active');
});
$('.f-sandbox').click(function(){ 
    filterColor('sandbox'); 
    $('.works-category').removeClass('works__active');
    $(this).addClass('works__active');
});
 
$('.f-all').click(function(){
 $('div').slideDown();
 $('.works-category').removeClass('works__active');
 $(this).addClass('works__active');
 fActive = 'all';
});

// burger menu
$('.btn-menu').on('click', function() {
    $(this).toggleClass('btn-active');
    $('.menu').toggleClass('menu-active');
    if(this.classList.contains('btn-active')){
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
});

$('.menu-link').on('click', function() {
    $('.btn-menu').toggleClass('btn-active');
    $('.menu').toggleClass('menu-active');
    if(this.classList.contains('btn-active')){
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    }
});

//ajax send 
 
	$('#form-ask-us').submit(function(e){
    e.preventDefault();
	$.ajax({
	url: "/mail.php",
	type: "POST",
    data: $('#form-ask-us').serialize()
    }).done(function() {
        $('.form-inp').val("");
        $('.contact-modal').addClass('show');
        setTimeout(function() {
        $('.contact-modal').removeClass('show');

        }.bind('.contact-modal'), 3000);
    });
    return false;
	 
	});
 


});

