
//lowercase keyboard should be only one displayed when page loads 
//hide the uppercase keyboard when page loads
$(document).ready(function () {
    var sentences =
        ['ten ate neite ate nee enet ite ate inet ent eate',
            'Too ato too nOt enot one totA not anot tOO aNot',
            'oat itain oat tain nate eate tea anne inant nean',
            'itant eate anot eat nato inate eat anot tain eat',
            'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let gameOver = false
    var upper = $("#keyboard-upper-container");
    var lower = $("#keyboard-lower-container");
    upper.hide();

    //write Jquery to set up keyboard toggling--
    //while shift key is held down, hide the lowercase keyboard and show uppercase
    //when shift key is released, show the lowercase keyboard and hide uppercase
    $(document).keydown(function (e) {
        const keyName = e.keyCode;
        if (keyName === 16) {
            upper.show();
            lower.hide();
        }
    }).keyup(function (e) {
        const keyName = e.keyCode;
        if (keyName === 16) {
            upper.hide();
            lower.show();
        }
    })
    //the sentences in the provided array shold be displayed at the top of the page one at a time
    //once the sentence has been completed, the next should appear
    //there is already a div with id=sentence where these should be displayed
    index = 0
    let currentletter = sentences[index][0];
    let displaysentence = $("#sentence").text(sentences[index]);
    let targetletter = $("#target-letter").text(sentences[index][0]) //display the currently expected letter in the center (div id=target-letter)
    //when keys are pressed, they should be highlighted in the browser.
    //letters should be matched with ascii code(corresponds with id in html)
    $(document).keypress(function (e) {
        let keyPressed = $("#" + e.which);
        keyPressed.css("background-color", "yellow"); //highlight the currently expected letter in the on-screen sentence that should be typed next
        $("#yellow-block").animate({
            "marginLeft": "20px"
        });
        if (keyPressed === targetletter) {
            let correctkey = $("<span></span>").addClass("glyphicon glyphicon-ok");
            correctkey.appendTo("#feedback");
        }else{
            let correctkey =$("<span></span>").addClass("glyphicon glyphicon-remove")
            correctkey.appendTo("#feedback");
        }

    }).keyup(function (e) {
        let keyPressed = $("#" + e.which);
        keyPressed.css("background-color", "");
    })



})




    //the users words per minute should be calculated and displayed on the screen when you reach the end of the last sentence
    //can be calculated by: numberOfwords / minutes - 2 * numberOfMistakes
    //for number of words you can just count how many words make up the sentences given

    //there should be a delay so the user can see the score.
    //then ask the user whether they would like to play again
    //if yes, reset game back to start
    //if no, leave as is

