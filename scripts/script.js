let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;

const botao = document.getElementById("startQuestion");
const ini = document.getElementById("startScreen");
const quiz = document.getElementById("quizScreen");

let totalQuestions = 10;

botao.addEventListener("click", function() {
  if (ini.style.display == "block"){
    ini.style.display = "none";
    quiz.style.display = "block";
  }
}
);

function shuffle(arr) {
 for (let i = arr.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [arr[i], arr[j]] = [arr[j], arr[i]];
 }
 return arr;
}


const allQuestions = [ {q: "Qual é o maior mamífero terrestre?", 
opts: ["Elefante africano", "Rinoceronte", "Girafa", "Hipopótamo"],
ans: 0, 
info: "O elefante africano pode pesar até 7 toneladas!"}, 
{q: "Que gás as plantas absorvem da atmosfera?",        
opts: ["Oxigênio", "Nitrogênio", "Gás carbônico", "Hidrogênio"], ans: 2, 
info: "As plantas usam CO₂ na fotossíntese para produzir seu alimento." },
{q: "qual semen gosta?",
  opts: ["re1", "res2", "res3", "res4"],
  ans: 3,
  info: "pailhoça"
},
{q: "pergunta1",
  opts: ["re1", "res2", "res3", "res4"],
  ans: 1,
  info: "legal"
},
{q: "pergunta2",
  opts: ["re1", "res2", "res3", "res4"],
  ans: 2,
  info: "legal2"
},
{q: "pergunta3",
  opts: ["re1", "res2", "res3", "res4"],
  ans: 2,
  info: "legal3"
},
{q:"pergunta4",
  opts: ["re1", "res2", "res3", "res4"],
  ans:0,
  info: "legal4"
},
{q: "pergunta5",
  opts: ["re1", "res2", "res3", "res4"],
  ans: 1,
  info: "legal5"
}]