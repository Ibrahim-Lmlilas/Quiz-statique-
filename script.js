const Start_btn = document.getElementById('Start_btn');
const time = document.getElementById('time');
const quiz_container = document.getElementById('quiz_container');



const questions = [
     {
        q: "Which symbol is used for single-line comments in JavaScript?",
        o: ["//", "/* */", "#", "<!-- -->"],
        a: "//"
    },
    {
        q: "Which of these is a correct way to declare a variable in JavaScript?",
        o: ["var x = 5;", "int x = 5;", "x := 5;", "dim x = 5"],
        a: "var x = 5;"
    },
    {
        q: "Which method converts a JSON string into a JavaScript object?",
        o: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
        a: "JSON.parse()"
    },
    {
        q: "What is the result of '2' + 3 in JavaScript?",
        o: ["5", "23", "NaN", "undefined"],
        a: "23"
    },
    {
        q: "Which keyword is used to define a constant in JavaScript?",
        o: ["const", "let", "var", "constant"],
        a: "const"
    },
    {
        q: "How do you create an array in JavaScript?",
        o: ["let arr = [1,2,3];", "let arr = (1,2,3);", "let arr = {1,2,3};", "let arr = array(1,2,3);"],
        a: "let arr = [1,2,3];"
    },
    {
        q: "Which method adds an element to the end of an array?",
        o: ["push()", "pop()", "shift()", "unshift()"],
        a: "push()"
    },
    {
        q: "What will `typeof NaN` return?",
        o: ["number", "NaN", "undefined", "object"],
        a: "number"
    },
    {
        q: "Which event occurs when the user clicks on an HTML element?",
        o: ["onclick", "onmouseclick", "onchange", "onhover"],
        a: "onclick"
    },
    {
        q: "Which operator is used for strict equality (checks value and type)?",
        o: ["===", "==", "=", "!=="],
        a: "==="
    }
 
]


Start_btn.addEventListener('click',function(){

    Start_btn.style.display  = 'none';

    let number = 0 ;

    time.textContent = number ; 

    setInterval (()=>{
    number++ ; 
    time.textContent = number;

},1000);
});