//Variable Declarations
var arrayPos1= [];
var arrayPos2= [];
var arrayPos3= [];
var arrayPos4= [];
var arrayPos5= [];
var arrayPos6= [];

var arrayDate= [];

var compareArray=[];

var arrayPos1counter=[];
var arrayPos2counter=[];
var arrayPos3counter=[];
var arrayPos4counter=[];
var arrayPos5counter=[];
var arrayPos6counter=[];


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


// compareArray populate function
compareArrayPopulate(50); //call to function compareArrayPopulate(){} to populate array that compares numbers 1 - elements
function compareArrayPopulate(elements){
	for (var i = 1; i <= elements; i++) {
		compareArray[i] = i;	 
	}
}






// function updateNumbers(){} to update lottery numbers from API
$('#dateId').append('Date');
$('#numbersId').append('Numbers');

var objectArray;

	 $(document).ready(function() {
	 // *********** Act on the event **************/
	 jsonObj=$.getJSON("http://data.ny.gov/resource/d6yy-54nr.json", function(obj){



				//Loop to Save Json winning_numbers data
				for (var i =0; i <obj.length; i++) {

					//Loop to Save in array. position 1 in arrayPos1
					for(j=0;j<=1;j=j+2){
						arrayPos1[i] =obj[i].winning_numbers[j]+obj[i].winning_numbers[j+1];
						arrayPos1[i]= parseInt(arrayPos1[i]);
						}


					for(j=3;j<=4;j=j+2){
						arrayPos2[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];		
						arrayPos2[i]= parseInt(arrayPos2[i]);
						}

					for(j=6;j<=7;j=j+2){
						arrayPos3[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];	
						arrayPos3[i]= parseInt(arrayPos3[i]);	
						}

					for(j=9;j<=10;j=j+2){
						arrayPos4[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];	
						arrayPos4[i]= parseInt(arrayPos4[i]);	
						}	

					for(j=12;j<=13;j=j+2){
						arrayPos5[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];	
						arrayPos5[i]= parseInt(arrayPos5[i]);	
						}

					for(j=15;j<=16;j=j+2){
						arrayPos6[i] = obj[i].winning_numbers[j] + obj[i].winning_numbers[j+1];	
						arrayPos6[i]= parseInt(arrayPos6[i]);	
						}
	

					// Brings Current Date from API (http://data.ny.gov/resource/d6yy-54nr.json) and append it to #tCol1
					arrayDate= obj[i].draw_date;
					$('#tCol1').append(arrayDate, "<br>");

					// Brings all lottery numbers from API (http://data.ny.gov/resource/d6yy-54nr.json) and append it to #tCol2
					$('#tCol2').append(arrayPos1[i]+ " ", arrayPos2[i]+ " ", arrayPos3[i]+ " ", arrayPos4[i]+ " ", arrayPos5[i]+ " ", arrayPos6[i]+ " ", "<br>");
							

				}					



// for (var i = 0; i < compareArray.length; i++) {
// 	expression
// }


for(var index= 0;index<=arrayPos1.length;index++){ 
//Function Repeated_Numbers to find more commun number in designate place
 arrayPos1counter[index] = jQuery.grep(arrayPos1, function(numbers, i){
	return ( numbers == compareArray[index]);
});	

console.log("arrayPos1counter"+"["+index+"]"+": " +arrayPos1counter[index].length);
}







//Function Repeated_Numbers to find more commun number in designate index
var compare_25 = jQuery.grep(arrayPos1, function(numbers, index){
	return ( numbers == compareArray[25]);
});	
console.log("compare_25: " +compare_25.length);



		});
	   });










 





// //Function Generate_Numbers to Generate a number according to parameters.
// var generateNumbers = function Generate_Numbers(){

// }



