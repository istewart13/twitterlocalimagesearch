function getTweets(){
  var url = "/search";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send(null);

  request.onload = function(){
    // console.log(request.responseText)
    // createMap(request.responseText)
    getPoints(request.responseText)
  }
}

// function createMap(responseText){
//   var tweets = JSON.parse(responseText);

//   var center = {lat: 51.507351, lng: -0.127758};
//   var zoom = 2;
//   var map = new Map(center, zoom);
// }

// var map, heatmap;

// function createMap(responseText) {
//  map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 13,
//    center: {lat: 51.507351, lng: -0.127758},
//    mapTypeId: google.maps.MapTypeId.SATELLITE
//  });

//  heatmap = new google.maps.visualization.HeatmapLayer({
//    data: getPoints(responseText),
//    map: map
//  });
// }

function getPoints(responseText) {
  var tweets = JSON.parse(responseText);
  tweets = tweets.statuses
  console.log(tweets);

  var data = [];

  for(tweet of tweets){
    
    if (tweet.entities.media) {
      console.log(tweet.entities.media[0].media_url_https);
      data.push(tweet.entities.media[0].media_url_https);
    }
    }

    // countryPopulationData.push({
    //   name: country.name,
    //   y: country.population
    // });


  // console.log(data);

  // var string = data.join(" ");
  // var words = string.split(" ");

  // // var wordCount = { };
  // // console.log(words);
  // // for(var i = 0; i < words.length; i++) {
  // //   wordCount[words[i]] = (wordCount[words[i]] || 0) + 1;
  // // }

  // var images  = [];

  // for (var word of words) {
  //   if (word.substring(0, 13) === "https://t.co/") {
  //     images.push(word);
  //   }
  // }
  // console.log(images);
}

window.onload = getTweets
