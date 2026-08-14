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
const end = document.getElementById("endScreen");

let totalQuestions = 10;

function atualizarRespostas(currentQ){
  pergunta.innerHTML = questao[currentQ]["q"];
  res1.innerHTML = questao[currentQ]["opts"][0];
  res2.innerHTML = questao[currentQ]["opts"][1];
  res3.innerHTML = questao[currentQ]["opts"][2];
  res4.innerHTML = questao[currentQ]["opts"][3];
  res1x.setAttribute("value", questao[currentQ]["opts"][0]);
  res2x.setAttribute("value", questao[currentQ]["opts"][1]);
  res3x.setAttribute("value", questao[currentQ]["opts"][2]);
  res4x.setAttribute("value", questao[currentQ]["opts"][3]);
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
},
{q: "pergunta6",
  opts: ["res1", "res2", "re3", "res4"],
  ans:3,
  info:"ok"
},
{q: "pergunta7",
  opts: ["res1", "res2", "re3", "res4"],
  ans:3,
  info:"ok"
}]

function shuffle(arr) {
  let ar = [];
 for (let i = arr.length - 1; i > 0; i--) {
  let rand = Math.floor(Math.random(0,10) * 10)
  while (ar.includes(rand)){
    rand = Math.floor(Math.random(0,10) * 10)
  }
  alert(ar)
  alert(ar.includes(rand))
  ar.push(rand)
 const j = rand;
 [arr[i], arr[j]] = [arr[j], arr[i]];
 alert(`${j}`)
 }
 return arr;
}




let questao = shuffle(allQuestions);

function respCorreta(resp,currentQ,pos){
  
  if (resp == questao[currentQ]["opts"][pos]){
    return true
  }
  
  return false
}

botao.addEventListener("click", function() {
  score = 0;
  currentQ = 0;
  if (ini.style.display == "block"){
    ini.style.display = "none";
    quiz.style.display = "block";
  }
  atualizarRespostas(currentQ)
});


proxima.addEventListener("click", function(){
  let selected = document.querySelector('input[name="resp"]:checked')?.value || null;
  alert(currentQ)
  if (currentQ >= 10){
    quiz.style.display = "none";
    end.style.display = "block";
    document.getElementById("resultado").innerHTML = `texot: ${score}`;
  }
  if(respCorreta(selected,currentQ,questao[currentQ]["ans"])){
    score += 1;
  }
  currentQ += 1;
  atualizarRespostas(currentQ)

})



