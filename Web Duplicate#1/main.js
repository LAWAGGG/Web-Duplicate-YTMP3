let themeButton = document.getElementById('theme-toggle');
let body = document.body;
let bungkus = document.getElementById('bungkus')

themeButton.addEventListener("click", () => {
  body.classList.toggle('dark-mode')
  bungkus.classList.toggle('dark-mode')
});