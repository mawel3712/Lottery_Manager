//Variable Declarations
var arrayPos1= [];
var arrayPos2= [];
var arrayPos3= [];
var arrayPos4= [];
var arrayPos5= [];
var arrayPos6= [];

var arrayDate= [];

// NOTES FOR REFERENCE******************************************************
// function createElementTable() {
//     var txt1 = "<b>I </b>";                   // Create element with HTML
//     var txt2 = $("<i></i>").text("love");    // Create with jQuery
//     var txt3 = document.createElement("b");   // Create with DOM
//     txt3.innerHTML = "jQuery!";
//     $("img").after(txt1, txt2, txt3);      // Insert new elements after img
// }
// createElementTable();
// $("<div id='container'></div>").text("love");

// function updateNumbers(){
$('#dateId').append('Date');
$('#numbersId').append('Numbers');

	 $(document).ready(function() {
	 // *********** Act on the event **************/
	   $.getJSON("http://data.ny.gov/resource/d6yy-54nr.json", function(obj){

console.log(obj);
				//Loop to Save Json winning_numbers data
				for (var i =0; i <obj.length; i++) {

					//Loop to Save in array. position 1 in arrayPos1
					for(j=0;j<=1;j=j+2){
						arrayPos1[i] =obj[i].winning_numbers[j]+obj[i].winning_numbers[j+1];			
						}

					for(j=3;j<=4;j=j+2){
						arrayPos2[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];		
						}

					for(j=6;j<=7;j=j+2){
						arrayPos3[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];		
						}

					for(j=9;j<=10;j=j+2){
						arrayPos4[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];		
						}	

					for(j=12;j<=13;j=j+2){
						arrayPos5[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];		
						}

					for(j=15;j<=16;j=j+2){
						arrayPos6[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];		
						}
	

	// Brings Current Date from API (http://data.ny.gov/resource/d6yy-54nr.json) and append it to #tCol1
	arrayDate= obj[i].draw_date;
	$('#tCol1').append(arrayDate, "<br>");

	// Brings all lottery numbers from API (http://data.ny.gov/resource/d6yy-54nr.json) and append it to #tCol2
	$('#tCol2').append(arrayPos1[i]+ " ", arrayPos2[i]+ " ", arrayPos3[i]+ " ", arrayPos4[i]+ " ", arrayPos5[i]+ " ", arrayPos6[i]+ " ", "<br>");}					

		});
	   });