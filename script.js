const themes = {
  "js_basics": [
    {
      id: 1,
      q: "Quels mots-clés peuvent déclarer une variable en JS ?",
      options: ["const", "let", "var", "function"],
      correct: [0,1,2],
      multi: true
    },
    {
      id: 2,
      q: "Quelle est la sortie de : console.log(2 + '2');",
      options: ["4", "'22'", "NaN"],
      correct: [1],
      multi: false
    },
    {
      id: 3,
      q: "Quelle méthode permet d'ajouter un élément à la fin d’un tableau ?",
      options: ["push()", "pop()", "shift()"],
      correct: [0],
      multi: false
    },
    {
      id: 4,
      q: "Quelle(s) valeur(s) est/sont considérée(s) comme falsy en JS ?",
      options: ["0", "''", "null", "undefined", "NaN", "'false'"],
      correct: [0,1,2,3,4],
      multi: true
    },
    {
      id: 5,
      q: "Quel symbole est utilisé pour un commentaire sur une ligne ?",
      options: ["//", "/* */", "#"],
      correct: [0],
      multi: false
    },
    {
      id: 6,
      q: "Quelle(s) boucle(s) peut-on utiliser pour parcourir un tableau ?",
      options: ["for", "for...of", "for...in", "while"],
      correct: [0,1,3],
      multi: true
    },
    {
      id: 7,
      q: "Quelle méthode transforme une chaîne en nombre entier ?",
      options: ["parseInt()", "Number()", "String()"],
      correct: [0,1],
      multi: true
    },
    {
      id: 8,
      q: "Comment accéder au premier élément d’un tableau arr ?",
      options: ["arr[0]", "arr(0)", "arr.first"],
      correct: [0],
      multi: false
    },
    {
      id: 9,
      q: "typeof null retourne quoi ?",
      options: ["'null'", "'object'", "'undefined'"],
      correct: [1],
      multi: false
    },
    {
      id: 10,
      q: "Comment déclarer une fonction ?",
      options: ["function maFonction() {}", "def maFonction() {}", "func maFonction() {}"],
      correct: [0],
      multi: false
    }
  ],

  "html_basics": [
    {
      id: 1,
      q: "Quel tag définit un lien hypertexte ?",
      options: ["<link>", "<a>", "<href>"],
      correct: [1],
      multi: false
    },
    {
      id: 2,
      q: "Quel(s) attribut(s) sont utilisés pour les images ?",
      options: ["src", "alt", "href", "title"],
      correct: [0,1],
      multi: true
    },
    {
      id: 3,
      q: "Quel tag représente un paragraphe ?",
      options: ["<p>", "<div>", "<span>"],
      correct: [0],
      multi: false
    },
    {
      id: 4,
      q: "Quel tag représente un titre principal ?",
      options: ["<h1>", "<h6>", "<header>"],
      correct: [0],
      multi: false
    },
    {
      id: 5,
      q: "Quel(s) tag(s) servent pour les listes ?",
      options: ["<ul>", "<ol>", "<li>", "<dl>"],
      correct: [0,1,2,3],
      multi: true
    },
    {
      id: 6,
      q: "Quel attribut fait ouvrir un lien dans un nouvel onglet ?",
      options: ["target='_blank'", "href='_new'", "rel='noopener'"],
      correct: [0],
      multi: false
    },
    {
      id: 7,
      q: "Comment définir un champ obligatoire dans un formulaire ?",
      options: ["required", "mandatory", "validate"],
      correct: [0],
      multi: false
    },
    {
      id: 8,
      q: "Quel tag HTML définit un bouton ?",
      options: ["<button>", "<input>", "<submit>"],
      correct: [0],
      multi: false
    },
    {
      id: 9,
      q: "Quel tag HTML définit le corps du document ?",
      options: ["<body>", "<html>", "<main>"],
      correct: [0],
      multi: false
    },
    {
      id: 10,
      q: "Quel tag HTML est sémantique pour un pied de page ?",
      options: ["<footer>", "<section>", "<div>"],
      correct: [0],
      multi: false
    }
  ],

  "css_basics": [
    {
      id: 1,
      q: "Quelle propriété change la couleur du texte ?",
      options: ["color", "background-color", "font-size"],
      correct: [0],
      multi: false
    },
    {
      id: 2,
      q: "Quelle propriété change la couleur de fond ?",
      options: ["background-color", "color", "border-color"],
      correct: [0],
      multi: false
    },
    {
      id: 3,
      q: "Quelle(s) propriété(s) gèrent les marges et paddings ?",
      options: ["margin", "padding", "border", "spacing"],
      correct: [0,1],
      multi: true
    },
    {
      id: 4,
      q: "Quelle propriété change la taille de la police ?",
      options: ["font-size", "text-size", "size"],
      correct: [0],
      multi: false
    },
    {
      id: 5,
      q: "Quelle propriété CSS change l’affichage d’un élément ?",
      options: ["display", "position", "float"],
      correct: [0],
      multi: false
    },
    {
      id: 6,
      q: "Quelle propriété CSS fait flotter un élément à gauche ou droite ?",
      options: ["float", "position", "align"],
      correct: [0],
      multi: false
    },
    {
      id: 7,
      q: "Quelle(s) valeur(s) de display permettent de créer un flex container ?",
      options: ["block", "inline-block", "flex", "grid"],
      correct: [2,3],
      multi: true
    },
    {
      id: 8,
      q: "Quelle propriété CSS change la couleur du contour ?",
      options: ["border-color", "color", "outline-color"],
      correct: [0],
      multi: false
    },
    {
      id: 9,
      q: "Quelle propriété CSS change la visibilité d’un élément ?",
      options: ["visibility", "display", "opacity"],
      correct: [0],
      multi: false
    },
    {
      id: 10,
      q: "Quelle propriété CSS permet de centrer un texte ?",
      options: ["text-align", "align-items", "justify-content"],
      correct: [0],
      multi: false
    }
  ]
};


const Start_btn = document.getElementById('Start_btn');
const time = document.getElementById('time');
const quiz_container = document.getElementById('quiz_container');
const nickname = document.getElementById('name');
const carts = document.getElementsByClassName('cart');
const cart_selection = document.getElementById('cart_selection');
const name_modal = document.getElementById('name_modal');

let timeqcm ;
let optioncart = false ;
//console.log(optioncart);
for (let i = 0; i < carts.length; i++) {
    const cart  = carts[i];
    
    cart.addEventListener('click',function(){
        optioncart = true ;
        //console.log(optioncart);
        //console.log(cart.dataset.cart);
        
        // Map the cart data to the correct theme key
        let themeKey = cart.dataset.cart + '_basics';
        localStorage.setItem('themes', themeKey);
        console.log(localStorage.getItem('themes'));

    })
}




let currentQuestion = 0;
let result = 0;
let min = 0;
let number = 0;

Start_btn.addEventListener('click',function(){


    if(nickname.value == ''){
        alert ('Please enter your name');
    }
    else if(nickname.value.length < 4 ){
        alert ('Name must be at least 4 characters long');
    }
    else if(optioncart == false){
        alert ('Please select your cart');
    }
    


    else{
    Start_btn.style.display  = 'none';
    name_modal.style.display = 'none';

    time.textContent = number ; 

    timeqcm =  setInterval (()=>{
        
    number++ ; 
        if(number == 60){
        number = 0 ;
        min++ ;

     }
     

    time.textContent =min +' min' +':'+ number +' sec';
    //console.log(number);

},1000);



showQuestion(currentQuestion);
}
});

function showQuestion (index){

    quiz_container.innerHTML = '';

    const my_themes = localStorage.getItem('themes');
    const currentThemeQuestions = themes[my_themes];
    const itemQ = currentThemeQuestions[index];

    const itemDev = document.createElement('div');
    const itemTitle = document.createElement('p');

    itemTitle.textContent = `Question ${index + 1}: ${itemQ.q}`;
   
    itemDev.appendChild(itemTitle);

    for (let i = 0; i < itemQ.options.length; i++) {

        const option = itemQ.options[i];

        const btnQ = document.createElement('button');
        btnQ.textContent = option;

        btnQ.addEventListener('click',function(answerBtn, optionIndex){
            return function (){
                // Disable all buttons after click
                const allButtons = itemDev.querySelectorAll('button');
                allButtons.forEach(btn => btn.disabled = true);

                // Check if this option is correct
                if(itemQ.correct.includes(optionIndex)){
                    answerBtn.style.backgroundColor = 'green';
                    result++;
                }
                else{
                    answerBtn.style.backgroundColor = 'red';

                    // Show correct answers in green
                    for(let j = 0; j < allButtons.length; j++){
                        if(itemQ.correct.includes(j)){
                            allButtons[j].style.backgroundColor = 'green';
                        }
                    }
                }

                setTimeout (()=>{
                    currentQuestion++;

                    if(currentQuestion < currentThemeQuestions.length){
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

                        quiz_container.innerHTML= `Score: ${result}/${currentThemeQuestions.length}<br>Time: ${time.textContent}<br>${feedback}<br>${feedbacktime}<br>Félicitations ${nickname.value}!`;

                        
                        time.style.display='none'

                        clearInterval(timeqcm);
                        
                      //restat btn
                      
                      
                    }

                    
               }, 500);
            }
        }(btnQ, i));
        
        itemDev.appendChild(btnQ);
        
    }
    quiz_container.appendChild(itemDev);
}



//console.log(questions[0].o[1])