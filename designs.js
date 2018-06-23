// Select color input
console.log($("#colorPicker").val());//test
// Select size input
console.log($("#inputHeight").val());//test
console.log($("#inputWidth").val());//test

$("input[type='submit']").on("click", function(evt) {
	event.preventDefault();
	console.log("watchuwant"); //test

	const height = $("#inputHeight").val();
	const width = $("#inputWidth").val();
	console.log(height, width); //test

	makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

// Your code goes here!
console.log("tapptapp"); //test
console.log(height, width); //test
}
