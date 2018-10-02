$(document).ready(function(){

	// select all the slides (array)
	var slides = $(".slide");
	// set a index slide (number); where we start
	var slideIndex = 0;
	// what's the current slide? (indexing into an array)
	var currentSlide = slides[slideIndex];

	// hide all slides with the hide() method
	slides.hide();
	// this is the equivalent to saying 
	// $(".slide").hide();
	// console.log("There are this many slides: " + slides.length);

	// show the first one
	slides.first().show();

	$(".next").click(function(){
		$(currentSlide).hide();
		slideIndex++;
		if(slideIndex > 4){
			slideIndex=0;
		}
	currentSlide = slides [slideIndex];
	$(currentSlide).show();
	});
	$(".previous").click(function(){
		$(currentSlide).hide();
		slideIndex--;
		if (slideIndex < 0){
			slideIndex = 4;
		}
		currentSlide = slides [slideIndex]
		$(currentSlide).show();
	})

	

	});

