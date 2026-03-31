document.addEventListener("DOMContentLoaded", () => {
  const visitorCountElement = document.getElementById("visitor-count");

  if (!visitorCountElement) {
    return;
  }

  // Placeholder for now.
  // Later, this will call your Azure Function API and replace the value.
  visitorCountElement.textContent = "0";
});