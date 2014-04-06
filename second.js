/**
 * @author Prem Khanal
 */



/** This is an array of my all our seven images (in order)*/

var images = ["Mt. Chooyu.png", "Mt. Dhaulagiri.png", "Mt. Everest.png", "Mt. Kanchenjunga.png", "Mt. Lhotse.png", "Fewa Lake.png"];



/* Index of the current image in our images array */

var index = 0;


/* set button events here */

function setNav() {

console.log("setNav");

/* With this commands there should be some changes when buttons are clicked
 * 
 */

$(".button").on("click", function() {



var isNext = $(this).hasClass("next");

	

		if (isNext == true && index != (images.length-1)) {

			index = index + 1;

	} else if (isNext == false && index > 0) {

		index = index - 1;

	}

	

		if (index == 0) {

		$(".button.prev").addClass("disabled");

	} else if (index == (images.length-1)) {

		$(".button.next").addClass("disabled");

	} else {
			$(".button").removeClass("disabled");
		}

		

		

		updateImage();

		

	});



	

}



/* This is the command that ask to change the image */

function updateImage() {

	$(".image-holder").html(

		"<img src='images/"+images[index]+"'/>"

	);

 }




/* This is the comy first command in the jquary since it starts with $ and the command asks to load the first image into my 
 image holder*/

$(document).ready(function() {

	$(".image-holder").html(

		"<img src='images/"+images[index]+"'/>"

	);

	

	$(".button.prev").addClass("disabled");



 setNav();

	

});

