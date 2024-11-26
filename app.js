const api_endpoint = 'http://quotes.rest/quote/random?';
const api_key = 'api_key=PtqjT6zPPhDa40sYxMz4OVIuwucXj2HS5izWCFb4'

$(document).ready(function() {
    $("#btn").click(function () {
        var category = 'happiness'
        $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': '47TbcbBJKlCP92xRufCnOg==PTkLKDxbwTowUKbb'},
        contentType: 'application/json',
        success: function(result) {
        const results = result[0];
        setQuote(results);
        $( ".card" ).effect( "fade" );
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
    });
});

function setQuote(result) {
    $('#author').html(result.author);
    $('#quote').html(result.quote);
    $('#category').html(result.category);
}