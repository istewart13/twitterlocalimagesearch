function getTweets(){
  var url = "/search";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send(null);

  request.onload = function(){
    console.log(request.responseText)
    createMap(request.responseText)
  }
}

function createMap(responseText){
  var tweets = JSON.parse(responseText);

  var center = {lat: 51.507351, lng: -0.127758};
  var zoom = 2;
  var map = new Map(center, zoom);
}

window.onload = getTweets
