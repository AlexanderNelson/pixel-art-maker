//  Select color input
// console.log($("#colorPicker").val());
//  Select size input
// console.log($("#inputHeight").val());
// console.log($("#inputWidth").val());

$("input[type='submit']").on("click", function(evt) {
	event.preventDefault();
	//console.log("watchuwant"); 
	$("#pixelCanvas").empty();
	const height = $("#inputHeight").val();
	const width = $("#inputWidth").val();
	makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	//for grid height input
	for (let h = 0; h < height; h++) {
		//create number of blocks in column
		$("#pixelCanvas").append($("<tr></tr>"));
		//console.log("input----height" + " " + h);
		//for grid width input
		for (let w = 0; w < width; w++) {
			// create table of width
			$("tr").last().append($("<td></td>"));
			//console.log("input width" + " " + w);
		}
	}

	//change background color when clicked
	$("#pixelCanvas").on("click", "td", function() {
		$(this).css("background-color", $("#colorPicker").val());
	});
}