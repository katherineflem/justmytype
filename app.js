
//lowercase keyboard should be only one displayed when page loads 
//hide the uppercase keyboard when page loads
$(document).ready(function () {
    var sentences =
        ['ten ate neite ate nee enet ite ate inet ent eate',
            'Too ato too nOt enot one totA not anot tOO aNot',
            'oat itain oat tain nate eate tea anne inant nean',
            'itant eate anot eat nato inate eat anot tain eat',
            'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    var upper = $("#keyboard-upper-container");
    var lower = $("#keyboard-lower-container");
    upper.hide();
    numberOfMistakes = 0; //start this at 0 and have the mistakes increment as incorrect keys are typed
    cursor = 0 //where the letterplace starts
    displaySentence(sentences);//see function below
    var targetletter = (sentences[index]).charAt(cursor);//there is something wrong with this..
    $("#target-letter").text(targetletter);
    //holding down shift makes Caps keyboard appear 
    $(document).keydown(function (e) {
        var keyName = e.keyCode;
        if (keyName === 16) {
            upper.show();
            lower.hide();
        }
        $(document).keyup(function (e) {
            var keyName = e.keyCode;
            if (keyName === 16) {
                upper.hide();
                lower.show();
            }
        })
    })
    //keypress function-- all of the following will happen when a key is pressed.
    $(document).keypress(function (e) {
        let keyPressed = $("#" + e.which); //define the key that was pressed by its ID in HTML
        keyPressed.addClass("highlight");
        cursor++;
        $("#yellow-block").animate({ // moved yellow div to right with each click by increasing margin and setting to speed 100
            "marginLeft": "+=17.5px"
        }, 100);
        $(document).keyup(function (e) {
            let keyPressed = $("#" + e.which);
            keyPressed.removeClass("highlight");
        })
        if (e.which === targetletter) { //if we are typing the correct key...
            let correctkey = $("<span></span>").addClass("glyphicon glyphicon-ok");
            correctkey.appendTo("#feedback");

            if (targetletter === (sentences[index].length)) {//if you complete a sentence...
                index++;
                $("#yellow-block")
            } if (index === (sentences.length)) {//if you complete all sentences...
                gameOver === true;
                let starttime= 0
                let endtime = new Date().getTime(); 
                let minutes= (endtime - starttime)/60
                wpm = Math.round(54 / minutes - 2 * numberOfMistakes) //have to define minutes?
                let gameovermsg = $("<span></span>").text("you ran out of words! your words per minute ="(wpm));
                $("#sentence").append(gameovermsg);
                let button = $("<btn>Play Again?</btn>").appendto("#sentence");
                button.click(function(){
                    resetGame();
                })

            }
        } else {
            let incorrectkey = $("<span></span>").addClass("glyphicon glyphicon-remove")
            incorrectkey.appendTo("#feedback");
            numberOfMistakes++;

        }
    })

    function gameOver() {
        // show score (correct key log and incorrect key log) 
        //create yes/no button, if yes- reset game, if no do nothing
    }
    function resetGame() {
        $("target-letter").text("") //clear out ("#target-letter") and go back to first sentence
        $("#feedback").text("") //clear out ("feedback")
        displaySentence(sentences);//load sentence from array
    }
    function displaySentence(sentences) {
        index = 0;
        $("#sentence").text(sentences[index]);
    }


});



    //there should be a delay so the user can see the score.
    //then ask the user whether they would like to play again
    //if yes, reset game back to start
    //if no, leave as is

