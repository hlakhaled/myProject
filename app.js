// Simple JavaScript for interactive functionality

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const message = document.getElementById("message");

  btn.addEventListener("click", function () {
    message.textContent = "Button was clicked!";
    message.classList.toggle("active");
  });

  console.log("Application loaded successfully");
});
