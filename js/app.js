$(function(){
	
	$(".toggle-main-nav").click(function(e){
		e.preventDefault();

		$(".main-nav").slideToggle(300);


	});


	$(".home-button").click(function(e){
		e.preventDefault();

		$(".phone").toggleClass("animate");
	
	});

});


$(window).load(function(){

	//TMP - set timeout
	setTimeout(function(){
		$('.loader').removeClass('active');
	}, 1000);
	

});