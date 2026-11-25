const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
  });
});