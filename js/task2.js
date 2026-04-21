const questions = [
  "Қанайналым жүйесі қандай мүшелерден тұрады?",
  "Күретамыр қандай болады?",
  "Көктамыр қандай болады?",
  "Қылтамыр ше?",
  "Олар қайда орналасады? Қандай қызмет атқарады?"
];

const answers = [
  "Қанайналым жүйесі жүрек пен қан тамырларынан тұрады.",
  "Күретамыр қалың және қанды жүректен алып шығады.",
  "Көктамыр жұқа және қанды жүрекке әкеледі.",
  "Қылтамыр өте жіңішке, олар тамырларды байланыстырады.",
  "Олар бүкіл денеде орналасады және қанды тасымалдайды."
];

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;

  document.getElementById("modal").style.display = "block";
  document.getElementById("questionText").innerText = questions[index];

  const answer = document.getElementById("answerText");
  answer.style.display = "none";
  answer.innerText = answers[index];
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function showAnswer() {
  document.getElementById("answerText").style.display = "block";
}