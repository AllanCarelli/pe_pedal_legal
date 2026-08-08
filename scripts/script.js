let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;

const botao = document.getElementById("startQuestion");
const ini = document.getElementById("startScreen");
const quiz = document.getElementById("quizScreen");
const pergunta = document.getElementById("pergunta");
const res1 = document.getElementById("resp1txt");
const res2 = document.getElementById("resp2txt");
const res3 = document.getElementById("resp3txt");
const res4 = document.getElementById("resp4txt");
const res1x = document.getElementById("resp1");
const res2x = document.getElementById("resp2");
const res3x = document.getElementById("resp3");
const res4x = document.getElementById("resp4");
const proxima = document.getElementById("next");

let totalQuestions = 10;

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

botao.addEventListener("click", function() {
  let score = 0;
  let currentQ = 0;
  if (ini.style.display == "block"){
    ini.style.display = "none";
    quiz.style.display = "block";
  }

  let questao = shuffle(allQuestions);
  pergunta.innerHTML = questao[0]["q"];
  res1.innerHTML = questao[0]["opts"][0];
  res2.innerHTML = questao[0]["opts"][1];
  res3.innerHTML = questao[0]["opts"][2];
  res4.innerHTML = questao[0]["opts"][3];
  res1x.setAttribute("value", questao[0]["opts"][0]);
  res2x.setAttribute("value", questao[0]["opts"][1]);
  res3x.setAttribute("value", questao[0]["opts"][2]);
  res4x.setAttribute("value", questao[0]["opts"][3]);
}); 
proxima.addEventListener("click", function(){
  questao = shuffle(allQuestions);
  pergunta.innerHTML = questao[0]["q"];
  res1.innerHTML = questao[0]["opts"][0];
  res2.innerHTML = questao[0]["opts"][1];
  res3.innerHTML = questao[0]["opts"][2];
  res4.innerHTML = questao[0]["opts"][3];
  res1x.setAttribute("value", questao[0]["opts"][0]);
  res2x.setAttribute("value", questao[0]["opts"][1]);
  res3x.setAttribute("value", questao[0]["opts"][2]);
  res4x.setAttribute("value", questao[0]["opts"][3]);
})


  function shuffle(arr) {
 for (let i = arr.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 [arr[i], arr[j]] = [arr[j], arr[i]];
 }
 return arr;
}