const flashcards = [
  {
    question: "What is HTML?",
    answer: "HTML stands for HyperText Markup Language."
  },
  {
    question: "What is CSS?",
    answer: "CSS is used for styling web pages."
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript adds interactivity to websites."
  }
];

let currentCard = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");

const showBtn = document.getElementById("showBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const newQuestion = document.getElementById("newQuestion");
const newAnswer = document.getElementById("newAnswer");

function displayCard() {
  question.textContent = flashcards[currentCard].question;
  answer.textContent = flashcards[currentCard].answer;
  answer.classList.add("hidden");
}

showBtn.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});

nextBtn.addEventListener("click", () => {
  currentCard++;

  if (currentCard >= flashcards.length) {
    currentCard = 0;
  }

  displayCard();
});

prevBtn.addEventListener("click", () => {
  currentCard--;

  if (currentCard < 0) {
    currentCard = flashcards.length - 1;
  }

  displayCard();
});

addBtn.addEventListener("click", () => {
  const q = newQuestion.value.trim();
  const a = newAnswer.value.trim();

  if (q === "" || a === "") {
    alert("Please fill all fields");
    return;
  }

  flashcards.push({
    question: q,
    answer: a
  });

  newQuestion.value = "";
  newAnswer.value = "";

  alert("Flashcard Added!");
});

editBtn.addEventListener("click", () => {
  const q = newQuestion.value.trim();
  const a = newAnswer.value.trim();

  if (q === "" || a === "") {
    alert("Please fill all fields");
    return;
  }

  flashcards[currentCard].question = q;
  flashcards[currentCard].answer = a;

  displayCard();

  alert("Flashcard Updated!");
});

deleteBtn.addEventListener("click", () => {
  if (flashcards.length === 1) {
    alert("Cannot delete all flashcards");
    return;
  }

  flashcards.splice(currentCard, 1);

  if (currentCard >= flashcards.length) {
    currentCard = 0;
  }

  displayCard();

  alert("Flashcard Deleted!");
});

displayCard();