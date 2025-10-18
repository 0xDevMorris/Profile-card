// Select the time element using its data-testid
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Function to update the time in milliseconds
function updateTime() {
  timeElement.textContent = Date.now();
}

// Call it once immediately when the page loads
updateTime();

// Optional: Update every second (you can remove this if you only want static time)
setInterval(updateTime, 1000);
