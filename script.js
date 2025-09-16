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

let currentQuestion = 0;
let result = 0;
let min = 0;
let number = 0;

Start_btn.addEventListener('click',function(){

    Start_btn.style.display  = 'none';

    time.textContent = number ; 

    setInterval (()=>{
        
    number++ ; 
        if(number == 60){
        number = 0 ;
        min++ ;

     }
     

    time.textContent =min +' min' +':'+ number +' sec';
    //console.log(number);

},1000);



showQuestion(currentQuestion);

});

function showQuestion (index){
    quiz_container.innerHTML = '';

    const itemQ = questions[index];

    const itemDev = document.createElement('div');
    const itemTitle = document.createElement('p');

    itemTitle.textContent = itemQ.q;
    itemDev.appendChild(itemTitle);



    for (let i = 0; i < itemQ.o.length; i++) {

        const option = itemQ.o[i];

        const btnQ = document.createElement('button');
        btnQ.textContent = option ;

        btnQ.addEventListener('click',function(answerBtn,correctAnswer){
            return function (){
                if(answerBtn.textContent === correctAnswer){
                    answerBtn.style.backgroundColor = 'green';
                    result ++ ; 
                }
                else{
                    answerBtn.style.backgroundColor = 'red';

                    const allButtons = itemDev.querySelectorAll('button');
                    for(let j = 0; j < allButtons.length; j++){
                        const btnitem =allButtons[j]
                        let correct = itemQ.a;
                        if(btnitem.textContent == correct){
                            btnitem.style.background='green'
                        }
                    }
                }

                setTimeout (()=>{
                    currentQuestion ++ ;

                    if(currentQuestion < questions.length){
                        showQuestion(currentQuestion);
                    }
                    else{
                        let feedback = '';
                        let feedbacktime = '';

                        if(result >= 8 )
                        {
                            feedback = 'Excellent';
                        }

                        else if (result >= 5){
                            feedback = 'Bien';
                        }
                        else{
                            feedback = 'Peut mieux faire';
                        };

                        if(min >= 5){
                            feedbacktime = 'You can be faster!';
                        }
                        else{
                            feedbacktime = 'Good job on time!';
                        }

                        quiz_container.innerHTML= result +'/'+questions.length + 'time is ' +time.textContent + '  ' + feedback + ' ' + feedbacktime;

                        
                        time.style.display='none'

                      //restat btn
                      
                      
                    }

                    
               }, 500);
            }
        }(btnQ,itemQ.a));
        
        itemDev.appendChild(btnQ);
        quiz_container.appendChild(itemDev);
        
    }
}



//console.log(questions[0].o[1])