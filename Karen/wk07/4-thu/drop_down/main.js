document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[id=city-type]').onchange=changeEventHandler;
},false);

/*function changeEventHandler(event) {
    if(!event.target.value) alert('Please Select One');
    else if (event.target.value == "Austin") {
        document.body.style.background = "url(../drop_down/images/austin.jpg) no-repeat center center fixed";
    }
    else if (event.target.value == "LA") {
        document.body.style.background = "url(../drop_down/images/la.jpg) no-repeat center center fixed";
    }
    else if (event.target.value == "NYC") {
        document.body.style.background = "url(../drop_down/images/nyc.jpg) no-repeat center center fixed";
    }
    else if (event.target.value == "SF") {
        document.body.style.background = "url(../drop_down/images/sf.jpg) no-repeat center center fixed";
    }
    else {
      document.body.style.background = "url(../drop_down/images/sydney.jpg) no-repeat center center fixed";
    }
}
*/



function changeEventHandler(event) {
  //remove the class if another city is already being displayed
  //css reads through top to bottom
  if (document.body.classList.length >= 1){
    document.body.className = "";
  }

  switch(event.target.value){
    case "Austin":
    document.body.classList.add("austin");
    break;

    case "LA":
    document.body.classList.add("la");
    break;

    case "NYC":
    document.body.classList.add("nyc");
    break;

    case "SF":
    document.body.classList.add("sf");
    break;

    case "Sydney":
    document.body.classList.add("sydney");
    break;
  }

}
