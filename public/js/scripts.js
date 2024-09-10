
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
      alertElement.classList.remove('hidden'); // Show the alert
    }
  
    // Function to close the first alert
    function closeAlert() {
      const alertElement = document.getElementById('alert');
      alertElement.classList.add('hidden'); // Hide the alert
    }
  
    // Function to show the second alert (requirements)
    function showRequirementAlert() {
      const requirementAlertElement = document.getElementById('requirementAlert');
      requirementAlertElement.classList.remove('hidden'); // Show the requirements alert
    }
  
    // Function to close the second alert
    function closeRequirementAlert() {
      const requirementAlertElement = document.getElementById('requirementAlert');
      requirementAlertElement.classList.add('hidden'); // Hide the requirements alert
    }