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
                var newGif = $("<div class='gifs'>");
                var imgTag = $("<img>");
                imgTag.attr("src", results[j].images.fixed_height.url);

                newGif.prepend(imgTag);

                $("#gifs-4ever").prepend(newGif);
                /*Test*/console.log(queryURL)
            } // end for loop
        });

    });




}); //end doc.ready