// Countdown Logic
// Set the target to May 26, 2026, at 5:00 AM (your program start time)
const targetDate = new Date("April 26, 2026 05:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  
  // If the wedding has started or passed
  if (distance < 0) {
    document.getElementById("timer").innerHTML = "<h2 class='count-text'>The Celebration has Begun!</h2>";
    return;
  }

  // Calculate precise time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update HTML with padding (e.g., "05" instead of "5")
  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');
}

// Refresh every second
setInterval(updateCountdown, 1000);
updateCountdown();
// Animation Trigger on Envelope Click
const envelope = document.getElementById('envelope');
const container = document.querySelector('.container');

envelope.addEventListener('click', function() {
  this.classList.add('open');
  container.classList.add('revealed'); // This triggers both the zoom and staggered text
});

// Map Tab Logic
// Only handles button highlighting - map stays always visible
function activateTab(clickedButton) {
  // Remove 'active' from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Make clicked button active
  clickedButton.classList.add('active');
}