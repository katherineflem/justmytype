
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
    numberOfMistakes = 0;
    //write Jquery to set up keyboard toggling--
    //while shift key is held down, hide the lowercase keyboard and show uppercase
    //when shift key is released, show the lowercase keyboard and hide uppercase
    $(document).keydown(function (e) {
        var keyName = e.keyCode;
        if (keyName === 16) {
            upper.show();
            lower.hide();
        }
        $(document).keyup(function (e) {
            if (keyName === 16) {
                upper.hide();
                lower.show();
            }
        })
    })
    //the sentences in the provided array shold be displayed at the top of the page one at a time
    //once the sentence has been completed, the next should appear
    //there is already a div with id=sentence where these should be displayed
    index = 0
    cursor = 0
    //display the currently expected letter in the center (div id=target-letter)
    //when keys are pressed, they should be highlighted in the browser.
    //letters should be matched with ascii code(corresponds with id in html)

    displaySentence(sentences);
    let targetletter = (sentences[index].charCodeAt(cursor));
    $("#target-letter").text(sentences[index]);

    $(document).keypress(function (e) {
        let keyPressed = $("#" + e.which);
        keyPressed.addClass(".highlight");

        cursor++;
        $("#yellow-block").animate({ // make this go quicker
            "marginLeft": "+=17.5px"
        })
        if (e.which === targetletter) { //if we are typing the correct key...
            let correctkey = $("<span></span>").addClass("glyphicon glyphicon-ok");
            correctkey.appendTo("#feedback"); {
                if (sentences[index].length = targetletter) {//if you complete a sentence...
                    index++;
                }

                if (index === sentences.length) {
                    gameOver === true;
                    wpm = Math.round(54 / minutes - 2 * numberOfMistakes)
                    let gameovermsg = $("<span></span>").text("you ran out of words! your words per minute ="(wpm));
                    $("#sentence").append(gameovermsg);

                }
            }

        } else {
            let incorrectkey = $("<span></span>").addClass("glyphicon glyphicon-remove")
            incorrectkey.appendTo("#feedback");
            numberOfMistakes++;
        }
    }).keyup(function (e) {
        let keyPressed = $("#" + e.which);
        keyPressed.removeClass(".highlight");


    })
    function gameOver() {
        // show score (correct key log and incorrect key log) 
        //create yes/no button, if yes- reset game, if no do nothing
    }
    function resetGame() {
        //clear out ("#target-letter") and go back to first sentence
        //clear out ("feedback")
        //load sentence from array
        displaySentence(sentences);
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

