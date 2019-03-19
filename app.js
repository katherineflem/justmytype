
//lowercase keyboard should be only one displayed when page loads 
//hide the uppercase keyboard when page loads
$(document).ready(function () {
    // var sentences =
    //     ['ten ate neite ate nee enet ite ate inet ent eate',
    //         'Too ato too nOt enot one totA not anot tOO aNot',
    //         'oat itain oat tain nate eate tea anne inant nean',
    //         'itant eate anot eat nato inate eat anot tain eat',
    //         'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var sentences = ["Katherine", "Marie", "Fleming"]
    var upper = $("#keyboard-upper-container");
    var lower = $("#keyboard-lower-container");
    upper.hide();
    numberOfMistakes = 0; //start this at 0 and have the mistakes increment as incorrect keys are typed
    cursor = 0 //where the letterplace starts
    displaySentence(sentences);//see function below
    var targetletter = (sentences[index]).charAt(cursor);// current sentence character at 0
    $("#target-letter").text(targetletter); //the target letter (letter that should be type) will display in targetletter div

    //holding down shift makes Caps keyboard appear 
    $(document).keydown(function (e) {
        var keyName = e.keyCode;
        if (keyName === 16) {
            upper.show();
            lower.hide();
        }

    })//unnested this function so it is its own thing
    $(document).keyup(function (e) {
        var keyName = e.keyCode;
        if (keyName === 16) {
            upper.hide();
            lower.show();
        }
        $(".highlight").removeClass("highlight")//remove the highlight class from the key pressed 
    })
    //keypress function-- all of the following will happen when a key is pressed.
    $(document).keypress(function (e) {
        let keyPressed = $("#" + e.which); //define the key that was pressed by its ID in HTML
        keyPressed.addClass("highlight"); //keypressed will be highlighted
        let targetLetterCode = (sentences[index]).charCodeAt(cursor) //the character code (number) is the character at the first spot in the current sentence. created this because we needed if statement with e.which which is a number to be compared to another number 
        cursor++; //the cursor(spot where current letter is)is incrementing with each keypress
        targetletter = (sentences[index]).charAt(cursor)//had to move this down so function will recognize it
        $("#target-letter").text(targetletter);//had to move down so function would recognize
        $("#yellow-block").animate({ // moved yellow div to right with each click by increasing margin and setting to speed 100
            "left": "+=17.5px"
        }, 100);

        let currentSentence = sentences[index]
        if (index < sentences.length - 1) { //if we are done with all sentences
            if (cursor < currentSentence.length) { //if we complete the current sentence 
                if (e.which === targetLetterCode) { //if we are typing the correct key...
                    let correctkey = $("<span></span>").addClass("glyphicon glyphicon-ok");
                    correctkey.appendTo("#feedback");
                } else {
                    let incorrectkey = $("<span></span>").addClass("glyphicon glyphicon-remove")
                    incorrectkey.appendTo("#feedback");
                    numberOfMistakes++;

                }
            } else {
                $("#yellow-block").animate({ left: "15px" }, { duration: 1, easing: "linear" });
                $("#feedback").empty();
                index++;
                $("#sentence").text(sentences[index]);
                cursor = 0;
                targetletter = (sentences[index]).charAt(cursor)
                $("#target-letter").text(targetletter);

            }

        } else {//if done with all sentences (see up) then the game is over

            let button = $("<button>Play Again?</button>");
            $("#sentence").append(button);
            button.css({
                "background-color": "green",
                "color": "white"
            });
            let startTime = 0;
            let endTime = new Date().getTime();
            let minutes = (endTime - startTime)/60
            wpm = Math.round(54 / minutes - 2 * numberOfMistakes)
            let gameOverMsg = $("<span></span>");
            gameOverMsg.text("Game Over! Your wpm ="+ wpm).appendTo("#target-letter")


        }


        //     gameOver === true;
        //     let starttime = 0
        //     let endtime = new Date().getTime();
        //     let minutes = (endtime - starttime) / 60
        //     wpm = Math.round(54 / minutes - 2 * numberOfMistakes) //have to define minutes?
        //     $("#sentence").append(gameovermsg);
        //     let button = $("<btn>Play Again?</btn>").appendto("#sentence");
        //     button.click(function () {
        //         resetGame();
        //     })

        // }


    })
    function displaySentence(sentences) {
        index = 0;
        $("#sentence").text(sentences[index]);
    }

    function resetGame() {
        $("#yellow-block").animate({ left: "15px" }, { duration: 1, easing: "linear" });
        $("#feedback").empty();
        index++;
        $("#sentence").text(sentences[index]);
        cursor = 0;
        targetletter = (sentences[index]).charAt(cursor)
        $("#target-letter").text(targetletter);
    }
});



    //there should be a delay so the user can see the score.
    //then ask the user whether they would like to play again
    //if yes, reset game back to start
    //if no, leave as is

