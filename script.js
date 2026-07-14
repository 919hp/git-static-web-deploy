document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted! (Static sites don’t send data unless connected to a backend)");
});
