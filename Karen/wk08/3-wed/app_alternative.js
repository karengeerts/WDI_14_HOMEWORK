var $srchBtn = $('button').on('click', function(){

  var $searched = $('.searched').val()
  var $container = $('.container')

  var request = {
  url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=' + $searched,
  method: 'get'
  }

  $('a').remove()

  $.ajax(request).done(function(res){
    var response = res.Search
    response.forEach(function(movie){
      var newDivElem = $('<div>')
      var newAnchorElem = $('<a href="#"></a>')
      var newH2Elem = $('<h2>')
      newH2Elem.text(movie.Title)
      newAnchorElem.attr("href", 'http://www.imdb.com/title/' + movie.imdbID)
      newAnchorElem.append(newH2Elem)
      newDivElem.append(newAnchorElem)
      $container.append(newDivElem)
    })
  })

})
