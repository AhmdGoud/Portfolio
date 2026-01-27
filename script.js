// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
}

// Toggle theme on button click
themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  // Save theme preference to localStorage
  const theme = body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
