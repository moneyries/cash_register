// HINT:
//
// When you press Enter to submit a new cash register entry, the form will 
// actually submit data and reload the page. You don't want to reload the page. It 
// messes up the running tab. So in order to prevent normal form submission, 
// make sure your form submit handler looks like this:
//
	// $('#entry').submit(function(e) {
	// 		e.preventDefault();
	//      .... do other stuff here ....
	// 
	// });


var total = 0;

$(document).ready(function() {

	$('#entry').submit(function(event){
		event.preventDefault();

		//get input value
		var newPrice = $('#newEntry').val();
		//console.log(newPrice);

		//convert input value (string) to float
		var newPriceFloat = parseFloat(newPrice);
		//console.log(newPriceFloat);

		//add number to total
		total = total + newPriceFloat;
		//console.log(total);

		//format input to currency text
		var priceText = convertNum(newPrice);
		console.log(priceText);

		//append new item line to entries
		$('#entries').append('<p>' + priceText + '</p>');

		//convert total number into currency text 
		var totalText = convertNum(total);

		//render new total value
		$('#total').html(totalText);

		//clear entry input
		$('#newEntry').val(''); 

	});

	function convertNum(numInput) {
		var currencyString = "$ " + numInput + ".00";
		//console.log(currencyString);
		return currencyString;

	}

});