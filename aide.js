
//SI ON PART SUR CA 

class Questions { 
    constructor(text, choices, answers) { 

this.text = text;
this.choices = choices;
this.answer = answer;
    }


//CONTROLE SI LA RÉPONSE EST BONNE 
 isCorrectAnswer(choice) { 
//SI LE PARAMETRE this.answer EST ÉGALE À CHOICE ALORS IL LE RENVOI A TRUE (BOOLEAN) 
    return this.answer === choice; 


 }
 } 


 // CREATION D'UN TABLEAU     //QUAND ON VA APPELER NOTRE VARIABLE QUESTIONS LE TABELAU APPARAIT 
 let questions = [ 

new Question(" Où est-ce que Kaneki décide de travailler ?",
["Dans un bar.","Dans un café appelé l'Antique","dans un restaurant pour Goule","A luniversité"  ],"Dans un café appelé l'Antique")

new Question("Comment s’appelle l’auteur que Kaneki aime beaucoup ?",
["Takatsuki Sen","Tachibana Sen ","Takatsuki Seido ","Akira Mado "],"Takatsuki Sen"),

new Question("") //ETC
]
// L'objet question possede 3 elements le text les choices et la answer 



// CREATION DE LA CLASSE QUIZ 
class Quiz { 
    constructor(questions) {
  // this.score implémente + 1 a chaque bonne réponse 
        this.score =0; 
// this.questions = questions implemente les questions 
        this.questions = questions;
  // this.currentQuestionIndex l'index de la question actuelle correspond à la premiere question 0      
        this.currentQUestionIndex = 0;
}

// getCurrentQuestion ELLE PERMET D'AFFICHER SUR L'ÉCRAN LA QUESTION ACTUELLE 
getCurrentQuestion(){
    return this.questions[this.currentQUestionIndex];
}

// guess(answer) permet de vérifer la réponse 
guess(answer){
   
   // si bonne réponse alors + 1 
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score ++;
    }
// SI JAMAIS L'UTILISATEUR ATTEINT FINI LA DERNIÈRE QUESTION IL SE PASSE QUELQUE CHOSE 
    hasEnded() {
    return this.currentQUestionIndex >= this.questions.lenght;
}


}

} 

//Regroupe toutes les fonctions qui ont un rapport avec l'affichage de l'application 
// DANS CETTE CONSTANTE ON VA ENNONCER TOUTES LES FONCTIONS QUI SERVENT D'AFFICHAGE 
const display  = { 

  // elementShown lorsqu'on va passer l'id on va  pointer l'id et QUAND SA SERA DU TEXT sa sera innerHTML
   // IL SERT A PAS REPTER 40 000 FOIS GET ELEMENTBYID  
  elementShown:function (id, text){
        let element = document.getElementById(id);
        element.innerHTML = text;
    },

endQuiz: function() {
    let endQUizHTML = '<h1> Quiz terminé! </h1>
    <h3> Votre score est de :$(quiz.score} / ${quiz.questions.lenght}'</h3> ; 
    //POUR AFFICHER 
    this.elementShown("question", endQUizHTML);


},
question:function()

}




//LOGIQUE DU JEU 
quizAPP = () => {


// EST CE QUE quiz.ended est TRUE 
    if (quiz.hasEnded()) {
     // FIN 
 display.endQuiz();
 
    } else { 
//logique du jeu 
// question 
display.question();



//choice 
// barre de progression 
    
 }

}




//CREATION OBJET QUIZZ
let quiz = new Quiz(questions);

quizApp();












 ]