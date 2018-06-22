$(document).ready(function () {

    var newAnimal = $("#search-input").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        newAnimal + "&api_key=dc6zaTOxFJmzC&limit=6";
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var newGif = $("<div class='gifs'>");
            var imgTag = $("<img>");
            imgTag.attr("src", results[i].images.fixed_height.url);

            $("#gifs-4ever").prepend(newGif);
        } // end for loop
    });




}); //end doc.ready