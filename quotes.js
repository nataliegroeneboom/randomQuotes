
$(document).ready(function() {
  var getQuotes;
  var tweetQuote;
$("#clickQuotes").click(function(){
	getQuotes();
});
$("#tweet").click(function(){
	var textToTweet=$("#verse").text()+ ' -' + $("#author").text();
     var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
      window.open(tweetLink,'_blank');
	
});



getQuotes =  function(){
 $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
var nameAuthor = data.quoteAuthor||"Unknown"; console.log(data);  
$(".sayings").animate({
        opacity: 0
      }, 375, function() {
        $(this).animate({
          opacity: 1
        }, 750); 
 $("#verse").html(data.quoteText); 
 $("#author").html(nameAuthor); 
  
 });  

});
};
});