/* 
Program Name: Recipe Display Application
    
    Author: Robert Smitha
    
    Date:   11/18/2016
    
    File:   drill4.js
*/

//  display next element after current target
function display(event) 
{
    $(event.currentTarget).next().fadeIn("slow");
}
// end of display

// event listener to invoke display function on h3
//$("h3").click(display);


// displays and animates the next element after the current target
function display2(event)
{
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow" );
    
}
// end of display2

// event listener 2 to invoke display function on h3
$("h3").click(display2);

// change background color h3 element on hover
$("h3").hover(function() {
    $(this).css("background-color", "yellow");
    }, function() {
    $(this).css("background-color", "pink");

});

//hover() will trigger display 2 on hover over H3 header
$("h3").hover(display2);