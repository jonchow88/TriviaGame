$(document).ready(function(){
//create a variable to store all the questions, choices (in array), and the correct answer

var trivia = {
    questions: [
        { 
            question: "Who is Barcelona's Top Goalscorer (All-Time)?",
            choices: ["Ronaldo", "Neymar", "Ronaldinho", "Messi"],
            id: 'q1',
            answer: 3
        },{
            question: "Where was basketball created?",
            choices: ["Canada", "U.S.A.", "Congo", "Hong Kong"],
            id: 'q2',
            answer: 0
        },{
            question: "Half-Man Half-Amazing is the nickname of which NBA Star?",
            choices: ["Kobe Bryant", "Michael Jordan", "Lebron James", "Vince Carter"],
            id: 'q3',
            answer: 3
        },{
            question: "Which country does Neymar Jr. play for?",
            choices: ["Argentina", "Brazil", "Colombia", "Chile"],
            id: 'q4',
            answer: 1
        },{
            question: "Which country is shaped like a boot?",
            choices: ["Iceland", "Russia", "Italy", "Spain"],
            id: 'q5',
            answer: 2
        },
    ]
}
    
//using jquery, initialize the button with the on click function to start the game
$(".start").on("click", function(){
    $('.gamearea').show();
    $(this).hide();
// display questions / button to reset game

// check if user selected the right answer (if correct answer -> score ++, if wrong -> incorrect and show correct answer)

// set a timer (if timer reaches 0, times up)

//display scoreboard

});

})

//use interval and slideshow and stopwatch js for reference
      }); 
    