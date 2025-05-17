const toggle = document.getElementById('toggle-dark');
const darkStyle = document.getElementById('dark-mode-style');
toggle.addEventListener('click', () => {
  const isDark = darkStyle.disabled === false;
  darkStyle.disabled = isDark;
  localStorage.setItem('modoEscuro', !isDark);
});
if (localStorage.getItem('modoEscuro') === 'true') {
  darkStyle.disabled = false;
}