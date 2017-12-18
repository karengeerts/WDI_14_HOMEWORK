console.log('ptplanner');

var alameinLine = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverlyLine = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringhamLine = ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"];

var departStation = prompt("What station are you departing from?");
var arrivalStation = prompt("What station do you need to go to?");

var stationIndex = 0;
var stationLine = [];

var travelArray =[];

console.log("origin " + departStation);
console.log("destination " + arrivalStation);

//determine what lines departStation and arrivalStation are at

var checkStationLocation = function (stationName){
if (alameinLine.includes(stationName)){
    stationIndex = alameinLine.indexOf(stationName);
    stationLine = alameinLine;
    //console.log(stationIndex, stationLine);
  } else if (glenWaverlyLine.includes(stationName)){
    stationIndex = glenWaverlyLine.indexOf(stationName);
    stationLine = glenWaverlyLine;
    //console.log(stationIndex, stationLine);
  } else if(sandringhamLine.includes(stationName)){
    stationIndex = sandringhamLine.indexOf(stationName);
    stationLine = sandringhamLine;
    //console.log(stationIndex, stationLine);
  } else {
    prompt("You did not enter a valid station name. Please refresh the page and try again."); // error handling for user typos
  }
}; //end checkStationLocation function

checkStationLocation(departStation);
var startLine = stationLine;
var startIndex = stationIndex;
checkStationLocation(arrivalStation);
var endIndex = stationIndex;
var endLine = stationLine;

if (startLine == endLine){
  var distance = startIndex - endIndex;  //if negative: travel from left to right
  //lines 50 to 64 handle case where start and end station are on same line
  if (distance < 0){
    for (var i = 0; i <= Math.abs(distance); i++){
        travelArray.push((startLine[startIndex + i]), "  --->  ");
    }
  } else {
      for (var i = 0; i <= Math.abs(distance); i++){
        travelArray.push((startLine[startIndex - i]), "  --->  ");
      }

    }
    travelArray.pop();
    var travelDescription = travelArray.join("");
    //console.log(travelArray);
    console.log(travelDescription);
    console.log(Math.abs(distance) + " stops total");
} else {
  //code if startLine != endLine
  //first: determine journey to Richmond from startStation

  var distance1 = startIndex - startLine.indexOf("Richmond");
  //(distance1 determines how many stations and direction);
  if (distance1 < 0){
    for (var i = 0; i <= Math.abs(distance1); i++){
        travelArray.push((startLine[startIndex + i]), "  --->  ");
    }
  } else {
      for (var i = 0; i <= Math.abs(distance1); i++){
        travelArray.push((startLine[startIndex - i]), "  --->  ");
      }
    }

  //journey to endStation from Richmond
  var distance2 = endIndex - endLine.indexOf("Richmond"); //if negative: travel from left to right

  //console.log(distance2);
  if (distance2 > 0){
    for (var i = 1 ; i <= Math.abs(distance2); i++){
        travelArray.push((endLine[endLine.indexOf("Richmond") + i]), "  --->  ");
    }
  } else {
      for (var i = 1; i <= Math.abs(distance2); i++){
        travelArray.push((endLine[endLine.indexOf("Richmond") - i]), "  --->  ");
      }
    }

  travelArray.pop();
  var travelDescription = travelArray.join("");
  console.log(travelDescription);
  console.log((Math.abs(distance1)+Math.abs(distance2)+1) + " stops total");
}
