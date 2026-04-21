function normalizeText(text) {
  return text.trim().toLowerCase();
}

function checkAnswers() {
  const answers = {
    answer1: "жүрек",
    answer2: "жүрек",
    answer3: "күретамыр",
    answer4: "көктамыр",
    answer5: "қылтамыр"
  };

  let score = 0;

  Object.keys(answers).forEach((id) => {
    const input = document.getElementById(id);
    const userAnswer = normalizeText(input.value);
    const correctAnswer = answers[id];

    input.classList.remove("correct", "wrong");

    if (userAnswer === correctAnswer) {
      input.classList.add("correct");
      score++;
    } else {
      input.classList.add("wrong");
    }
  });

  document.getElementById("score").textContent = score;

  const resultBox = document.getElementById("resultBox");
  resultBox.classList.remove("success", "warning");

  if (score === 5) {
    resultBox.textContent = "Өте жақсы! Барлық жауап дұрыс ✅";
    resultBox.classList.add("success");
  } else {
    resultBox.textContent = `Дұрыс жауап саны: ${score}/5. Қайта қарап көр.`;
    resultBox.classList.add("warning");
  }
}

function resetAnswers() {
  ["answer1", "answer2", "answer3", "answer4", "answer5"].forEach((id) => {
    const input = document.getElementById(id);
    input.value = "";
    input.classList.remove("correct", "wrong");
  });

  document.getElementById("score").textContent = "0";

  const resultBox = document.getElementById("resultBox");
  resultBox.textContent = "Жауаптарыңызды тексеріңіз.";
  resultBox.classList.remove("success", "warning");
}