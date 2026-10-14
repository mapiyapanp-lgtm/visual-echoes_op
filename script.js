const downloadButton = document.getElementById("downloadButton");
const poster = document.getElementById("poster");

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = poster.src;
  link.download = "visual-echoes-opacarophile-2026.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
});
