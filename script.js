document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Load theme from local storage
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  themeToggle.addEventListener("click", function () {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
