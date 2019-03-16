//lowercase keyboard should be only one displayed when page loads 
//hide the uppercase keyboard when page loads

//write Jquery to set up keyboard toggling--
//while shift key is held down, hide the lowercase keyboard and show uppercase
//when shift key is released, show the lowercase keyboard and hide uppercase

//when keys are pressed, they should be highlighted in the browser.
//letters should be matched with ascii code(corresponds with id in html)
//how can you determine which key was pressed on the keyboard when using event listener

//the sentences in the provided array shold be displayed at the top of the page one at a time
//once the sentence has been completed, the next should appear
//there is already a div with id=sentence where these should be displayed

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

//highlight the currently expected letter in the on-screen sentence that should be typed next
//use the div with the id=yellow block and nudge it along a fixed number of pixels
//remember to reset it back to the beginning of the sentence when you move to the next sentence

//display the currently expected letter in the center (div id=target-letter)

//for each sentence, show a visual "log" of right/wrong per character by inserting one of the following into the div with id=feedback
//if correct key is pressed, indicate with green check
//if correct key not pressed, indicate with red x
//at end of each sentence, clear out the feedback div

//the users words per minute should be calculated and displayed on the screen when you reach the end of the last sentence
//can be calculated by: numberOfwords / minutes - 2 * numberOfMistakes
//for number of words you can just count how many words make up the sentences given

//there should be a delay so the user can see the score.
//then ask the user whether they would like to play again
//if yes, reset game back to start
//if no, leave as is

