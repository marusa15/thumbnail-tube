var YouTube_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyDXgY2BKTqfiuzPWVahzVvZBV9tKqEzLGs',
    q: searchTerm,
    
  }
  $.getJSON(YouTube_BASE_URL, query, callback);
  //console.log(query); https://www.youtube.com/results?search_query=depeche+mode
}


function displayYouTubeSearchData(data) {
  console.log(data.items[0].snippet.thumbnails.default.url);
   
  var resultElement = '';
 
  if (data.items) {
     data.items.map(function(item) {
     resultElement += '<p><img class="thumbnail" src=' + item.snippet.thumbnails.medium.url +'></p>';
      });
   }
  
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    console.log(query);
    getDataFromApi(query, displayYouTubeSearchData);
    
  });
}

$(function(){watchSubmit();});
