function checkAnswers() {
  const correctAnswers = {
    answer1: "Жүрек",
    answer2: "Қылтамыр",
    answer3: "Көк тамыр",
    answer4: "Күре тамыр"
  };

  let score = 0;

  for (let id in correctAnswers) {
    const userAnswer = document.getElementById(id).value;
    if (userAnswer === correctAnswers[id]) {
      score++;
    }
  }

  const scoreEl = document.getElementById("score");
  const resultBox = document.getElementById("resultBox");

  scoreEl.textContent = score;

  resultBox.classList.remove("success", "warning");

  if (score === 4) {
    resultBox.textContent = "Өте жақсы! Барлық жауап дұрыс ✅";
    resultBox.classList.add("success");
  } else {
    resultBox.textContent = `Дұрыс жауап саны: ${score}/4. Қайта тексеріп көр.`;
    resultBox.classList.add("warning");
  }
}

function resetAnswers() {
  document.getElementById("answer1").value = "";
  document.getElementById("answer2").value = "";
  document.getElementById("answer3").value = "";
  document.getElementById("answer4").value = "";

  document.getElementById("score").textContent = "0";

  const resultBox = document.getElementById("resultBox");
  resultBox.textContent = "Жауаптарыңызды тексеріңіз.";
  resultBox.classList.remove("success", "warning");
}