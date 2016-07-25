function getTweets(){
  var url = "/search";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send(null);

  request.onload = function(){
    getImages(request.responseText)
  }
}

function getImages(responseText) {
  var tweets = JSON.parse(responseText);
  tweets = tweets.statuses

  var data = [];
  for(tweet of tweets){
    if (tweet.entities.media) {
      data.push(tweet.entities.media[0].media_url_https);
    }
  }
  createImages(data)
}

function createImages(imageData) {
  var ul = document.getElementById('image-list');
  imageData.forEach(function (image) {
      var li = document.createElement("li");
      li.innerHTML = '<img src="' + image + '">';
      // option.value = index.toString();
      // option.text = item.name;
      ul.appendChild(li);
  });
}

window.onload = getTweets
