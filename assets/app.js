$(document).ready(function () {
    
    var newAnimal
    var animalList = ["dog", "cat"];



    function newButtons() {
        $("#new-buttons").empty();
        for (var i = 0; i < animalList.length; i++) {
            var btnTag = $("<button>")
            btnTag.addClass("animalBtn");
            btnTag.attr("data-name", animalList[i]);
            btnTag.text(animalList[i]);
            $("#new-buttons").append(btnTag);
        }
    }

    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        newAnimal = $("#search-input").val().trim();
        if (!newAnimal) {return}
        animalList.push(newAnimal);
        newButtons();
        $("#search-input").val("");
        /*Test*/console.log(animalList);
    });

    $("#clear-gifs").on("click", function () {
        $("#gifs-4ever").empty();
    })



    // Hmm, maybe later.
    $("#edit-buttons").on("click", function() {
        var rmBtn = $("<button id='rm-btn'>");
        rmBtn.text(X);
        $(".animalBtn").text().prepend(rmBtn);
    })

    $("#rm-btn").on("click", function() {
        
    })
    ///

    $(document).on("click", ".animalBtn", function () {
        var thisAnimal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        thisAnimal + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

            for (var j = 0; j < results.length; j++) {
                var newGif = $("<div class='gif-wrapper'>");
                var imgTag = $("<img class='gif'>");
                imgTag.attr("src", results[j].images.fixed_height.url.replace(".gif", "_s.gif"));
                imgTag.attr("data-state", "paused");
                imgTag.attr("title", "Click to animate!");
                var rateBox = $("<div class='rating'>").text(results[j].rating);

                newGif.prepend(rateBox);
                newGif.prepend(imgTag);
                
                $("#gifs-4ever").prepend(newGif);
                /*Test*/console.log(queryURL)
            } // end for loop
        });

    });

    $(document.body).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        console.log("YO")
        console.log(gifURL);
        console.log(state);

        if( state === "paused") {

            $(this).attr("data-state", "animated")
            var gifURL = $(this).attr("src").replace("_s.gif", ".gif");
            $(this).attr("src", gifURL);

        } else if ( state === "animated") {

            $(this).attr("data-state", "paused")
            var gifURL = $(this).attr("src").replace(".gif", "_s.gif");
            $(this).attr("src", gifURL);
        }
    });


}); //end doc.ready