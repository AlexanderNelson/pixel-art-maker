// Select color input
//console.log($("#colorPicker").val());//test
// Select size input
//console.log($("#inputHeight").val());//test
//console.log($("#inputWidth").val());//test

$("input[type='submit']").on("click", function(evt) {
	event.preventDefault();
	//console.log("watchuwant"); //test

	const height = $("#inputHeight").val();
	const width = $("#inputWidth").val();
	//console.log(height, width + " as arguments"); //test

	makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
	//console.log("tapptapp"); //test
	//console.log(height, width + ' in makeGrid function'); //test

	//for grid height input
	for (let h = 0; h < height; h++) {
	
	//create number of blocks in column
	$("#pixelCanvas").append($("<tr></tr>"));
	console.log("input----height" + " " + h);//test

	//for grid width input
	for (let w = 0; w < width; w++) {

	// create table of width
	$("tr").last().append($("<td></td>"));
	console.log("input width" + " " + w);//test
	}
}
}
