console.log('Your JavaScript is connected');

$(document).ready(function() {
  var randomVar;
  getQuote();

  function getQuote() {
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    //get data from this url
    $.getJSON(url, function(data) {
      randomVar = data.quoteText;
      randomVar1 = data.quoteAuthor;
      //passing value to corresponding div
      $(".quote").hide().fadeIn(1000).html('"' + data.quoteText + '"');
      $(".author").html("- " + data.quoteAuthor);
    });
  }
  //using twitter click functionality
  $('#tweet').on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomVar + ' ~ ' + randomVar1);
  });
  $("#next-quote").on("click", function() {
    getQuote();
  });
});
