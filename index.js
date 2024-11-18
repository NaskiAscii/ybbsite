// Function to check if the element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const target = document.getElementById('slideLeft1');

  if (isElementInViewport(target)) {
    target.classList.add('visible');
    target.classList.add('w3-center');
    target.classList.add('w3-animate-left');
    target.classList.remove('hidden');
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check in case the element is already in view when the page loads
handleScroll();

//Thank You ChatGPT!
