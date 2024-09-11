// Function to toggle the accordion
// Function to update the countdown
function updateCountdown() {
  const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Example: 24 hours from now

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeRemaining = endTime - now;

    // Handle case where timeRemaining is negative (i.e., countdown has ended)
    if (timeRemaining <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function updateDisplay() {
    const { days, hours, minutes, seconds } = calculateTimeRemaining();

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  updateDisplay();
  setInterval(updateDisplay, 1000); // Update every second
}

// Initialize the countdown timer
updateCountdown();

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  // SVG for Minus icon
  const minusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // SVG for Plus icon
  const plusSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
      <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
    </svg>
  `;

  // Toggle the content's max-height for smooth opening and closing
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0';
    icon.innerHTML = plusSVG;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.innerHTML = minusSVG;
  }
}

// Function to show the first alert
function showAlert() {
  const alertElement = document.getElementById('alert');
  if (alertElement) alertElement.classList.remove('hidden'); // Show the alert
}

// Function to close the first alert
function closeAlert() {
  const alertElement = document.getElementById('alert');
  if (alertElement) alertElement.classList.add('hidden'); // Hide the alert
}

// Function to show the second alert (requirements)
function showRequirementAlert() {
  const requirementAlertElement = document.getElementById('requirementAlert');
  if (requirementAlertElement) requirementAlertElement.classList.remove('hidden'); // Show the requirements alert
}

// Function to close the second alert
function closeRequirementAlert() {
  const requirementAlertElement = document.getElementById('requirementAlert');
  if (requirementAlertElement) requirementAlertElement.classList.add('hidden'); // Hide the requirements alert
}

// Initialize Swiper carousel
var swiper = new Swiper(".default-carousel", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


