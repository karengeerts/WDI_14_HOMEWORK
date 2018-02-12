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
};

var infScroll = new InfiniteScroll( '.container', {
  path: sendRequest($('input').val(),10,1),

  append: undefined,
  // REQUIRED for appending content
  // Appends selected elements from loaded page to the container

  checkLastPage: true,
  // Checks if page has path selector element
  // Set to string if path is not set as selector string:
  //   checkLastPage: '.pagination__next'

  prefill: false,
  // Loads and appends pages on intialization until scroll requirement is met.

  responseType: 'document',
  // Sets the type of response returned by the page request.
  // Set to 'text' to return flat text for loading JSON.

  outlayer: false,
  // Integrates Masonry, Isotope or Packery
  // Appended items will be added to the layout

  scrollThreshold: 400,
  // Sets the distance between the viewport to scroll area
  // for scrollThreshold event to be triggered.

  elementScroll: false,
  // Sets scroller to an element for overflow element scrolling

  loadOnScroll: true,
  // Loads next page when scroll crosses over scrollThreshold

  history: 'replace',
  // Changes the browser history and URL.
  // Set to 'push' to use history.pushState()
  //    to create new history entries for each page change.

  historyTitle: true,
  // Updates the window title. Requires history enabled.

  hideNav: undefined,
  // Hides navigation element

  status: undefined,
  // Displays status elements indicating state of page loading:
  // .infinite-scroll-request, .infinite-scroll-load, .infinite-scroll-error
  // status: '.page-load-status'

  button: undefined,
  // Enables a button to load pages on click
  // button: '.load-next-button'

  onInit: undefined,
  // called on initialization
  // useful for binding events on init
  // onInit: function() {
  //   this.on( 'append', function() {...})
  // }

  debug: true,
  // Logs events and state changes to the console.
})
