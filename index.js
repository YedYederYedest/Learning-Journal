const yearUpdate = document.getElementById("yearUpdate");
yearUpdate.innerText = new Date().getFullYear();

const darkModeBtn = document.getElementById("darkToggle");

darkModeBtn.addEventListener("click", () => 
{
  const isDark = document.body.classList.toggle("dark-mode");

  darkModeBtn.innerText = isDark ? "Light Mode" : "Dark Mode";
});
