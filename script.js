const quotes = [
  { text: "Science is a way of thinking much more than it is a body of knowledge.", title: "Carl Sagan", category: "science" },
  { text: "The important thing is to never stop questioning.", title: "Albert Einstein", category: "science" },
  { text: "Philosophy is a battle against the bewitchment of our intelligence by means of language.", title: "Ludwig Wittgenstein", category: "philosophy" },
  { text: "The unexamined life is not worth living.", title: "Socrates", category: "philosophy" },
  { text: "He who opens a school door, closes a prison.", title: "Victor Hugo", category: "philosophy" },
  { text: "Man is condemned to be free.", title: "Jean-Paul Sartre", category: "philosophy" },
  { text: "Science knows no country, because knowledge belongs to humanity.", title: "Louis Pasteur", category: "science" },
  { text: "Science without religion is lame, religion without science is blind.", title: "Albert Einstein", category: "science" },
  { text: "The good thing about science is that it's true whether or not you believe in it.", title: "Neil deGrasse Tyson", category: "science" },
  { text: "Research is what I'm doing when I don't know what I'm doing.", title: "Wernher von Braun", category: "science" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", title: "Aristotle", category: "philosophy" },
  { text: "I think therefore I am.", title: "René Descartes", category: "philosophy" }
];

let currentCategory = "science";
let filteredQuotes = quotes.filter(q => q.category === currentCategory);
let currentIndex = 0;
let currentFontSize = 1.2;

const quoteText = document.getElementById("quoteText");
const quoteTitle = document.getElementById("quoteTitle");
const categoryDropdown = document.getElementById("categoryDropdown");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const randomBtn = document.getElementById("randomBtn");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
const modeSwitch = document.getElementById("modeSwitch");

function displayQuote(index) {
  const quote = filteredQuotes[index];
  quoteText.textContent = `"${quote.text}"`;
  quoteTitle.textContent = `"${quote.title}"`;
  quoteText.style.fontSize = `${currentFontSize}rem`;
}

function updateCategory(category) {
  currentCategory = category;
  filteredQuotes = quotes.filter(q => q.category === currentCategory);
  currentIndex = 0;
  displayQuote(currentIndex);
}

categoryDropdown.addEventListener("change", () => {
  updateCategory(categoryDropdown.value);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % filteredQuotes.length;
  displayQuote(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  displayQuote(currentIndex);
});

randomBtn.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = `"${randomQuote.text}"`;
  quoteTitle.textContent = `"${randomQuote.title}"`;
  quoteText.style.fontSize = `${currentFontSize}rem`;
});

increaseFont.addEventListener("click", () => {
  if (currentFontSize < 2) { // Limit font size to a maximum of 2rem
    currentFontSize += 0.1;
    quoteText.style.fontSize = `${currentFontSize}rem`;
  }
});

decreaseFont.addEventListener("click", () => {
  if (currentFontSize > 0.8) { // Limit font size to a minimum of 0.8rem
    currentFontSize -= 0.1;
    quoteText.style.fontSize = `${currentFontSize}rem`;
  }
});

modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

window.addEventListener("load", () => {
  updateCategory(currentCategory);
});
