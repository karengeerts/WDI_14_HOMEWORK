console.log('to the future');

var $searchbutton = $('button').on('click', function(){
  var $search_query = $('.search_query').val();
  var $container = $('.container');

    var request = {
        url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+ $search_query,
        method: 'get'
    };

    $("a").remove();

    $.ajax(request).done(function(res){
      var results = res.Search;
      results.forEach(function(movie){

        var newDivElem = $('<div>');
        var newAnchorElem = $('<a href="#"><h2>' + movie.Title + '</h2></a>');

        newAnchorElem.attr("href","http://www.imdb.com/title/" + movie.imdbID);

        newDivElem.append(newAnchorElem);
        $container.append(newDivElem);
      });
    });
});
