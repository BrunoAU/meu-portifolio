const langButtons = document.querySelectorAll('.language-selector button');
langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');
    document.querySelectorAll('[class^="lang-"]').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll(`.lang-${lang}`).forEach(el => {
      el.style.display = '';
    });
  });
});

const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});