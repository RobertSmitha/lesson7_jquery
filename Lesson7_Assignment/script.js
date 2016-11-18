/* 
Program Name: Recipe Display Application
    
    Author: Robert Smitha
    
    Date:   11/18/2016
    
    File:   script.js
*/

//  display next element after current target
function display(event) 
{
    $(event.currentTarget).next().fadeIn("slow");
}
// end of display

// event listener to invoke display function on h3
$("h3").click(display);