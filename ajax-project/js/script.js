
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var street = $('#street').val();
    var city = $('#city').val();
    var address = street+","+city;

    $greeting.text = ('so , you wanna live'+address+'?' );

    var addressUrl = "http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+address+"";


    $body.append('<img class="bgimg" src="'+ addressUrl + '">');
    console.log(addressUrl)

    // YOUR CODE GOES HERE!
    var nytimeUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+city+'&api-key=774a5c9887d54a0691c60a6952365933'
    $.getJSON(nytimeUrl,function (data) {
        $nytHeaderElem.text("New York Times Articles About "+city);

        article = data.response.docs;
        console.log(article)
        for(var i = 0, length1 = article.length; i < length1; i++){
            var singleArticle =  article[i];
            $nytElem.append(
                    '<li class="aritcle">'+
                        '<a href = "'+singleArticle.web_url+'">'+singleArticle.headline.main+ 
                        ' </a>'+
                        '<p>'+singleArticle.snippet+
                        '</p>'+
                    '</li>'
                );

        };
    })


    return false;
};






$('#form-container').submit(loadData);
