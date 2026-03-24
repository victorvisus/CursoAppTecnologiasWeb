// JavaScript for Copy Functionality and Interactivity

function copyToClipboard(element) {
  const text = element.textContent.trim();

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("¡Código copiado al portapapeles!");
    })
    .catch((err) => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("¡Código copiado al portapapeles!");
    });
}

function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");

  // Create toast element
  const toast = document.createElement("div");
  toast.className =
    "toast bg-verde-criptico text-negro-carbon px-4 py-2 rounded-lg shadow-lg mb-2 font-medium";
  toast.textContent = message;

  // Add to container
  toastContainer.appendChild(toast);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Add some interactivity - highlight code blocks on hover
document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll(".code-block");
  codeBlocks.forEach((block) => {
    block.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#1a1a1f";
    });
    block.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
    });
  });
});
