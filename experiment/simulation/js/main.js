//Your JavaScript goes in here

// Get the base path dynamically
const currentUrl = window.location.href;
const basePath = currentUrl.substring(0, currentUrl.lastIndexOf("/"));
const swfPath = basePath + "/flash/simulation/index.swf";

// Set the dynamic link text
document.getElementById("copyText").textContent = swfPath;

function copyLink() {
  const text = document.getElementById("copyText").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const tooltip = document.getElementById("tooltip");
    tooltip.classList.add("show");
    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1500);
  });
}

// Animation link copy functionality
const acurrentUrl = window.location.href;
const abasePath = acurrentUrl.substring(0, currentUrl.lastIndexOf("/"));
const aswfPath = abasePath + "/flash/animation/index.swf";
document.getElementById("animationCopyText").textContent = aswfPath;

function animationCopyLink() {
  const text = document.getElementById("animationCopyText").textContent;
  const tooltip = document.getElementById("atooltip");

  navigator.clipboard.writeText(text).then(() => {
    // Show the tooltip
    tooltip.classList.add("show");

    // Hide after 1 second
    setTimeout(() => {
      tooltip.classList.remove("show");
    }, 1000);
  });
}

function toggleAccordion(header) {
  const item = header.parentElement;
  item.classList.toggle("active");
  const icon = header.textContent.trim().startsWith("▶") ? "▼" : "▶";
  header.textContent = header.textContent.replace(/^(▶|▼)/, icon);
}
