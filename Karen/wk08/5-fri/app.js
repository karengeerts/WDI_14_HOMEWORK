var $container = $('.container');
var $addBtn = $('button');


$addBtn.on('click', function(){
  var $searchQuery = $('input').val();
  var result = sendRequest($searchQuery,10,0);
});

var sendRequest = function(search,limit,offset){
  var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=7eCT7nVYLMI5hX7zZxuP8TgmHLJ672iy&limit=" + limit + "&offset=" + offset;
  var xhr = $.get(url);
  xhr.done(function(result) {
    addImages(result);
  });
};

var addImages = function(result){
  console.log(result);
  for (var i = 0; i < result.data.length; i++){
    var newImgUrl = result.data[i].embed_url;
    var $newImg = $('<iframe>');
    $newImg.attr("src", newImgUrl);
    $newImg.attr("width", 480);
    $newImg.attr("height", 460);
    $container.append($newImg);
  }
  /*$('.container').infiniteScroll({
    // options
    path: function(){

    },
    append: '.post',
    history: false,
  });*/
};
