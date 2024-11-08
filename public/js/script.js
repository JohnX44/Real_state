function toggleVideo() {
    const video = document.querySelector('.aruna-video');
    const playButton = document.querySelector('.play-button');
  
    if (video.paused) {
      video.play();
      playButton.style.display = 'none'; // Hide the play button when video is playing
    } else {
      video.pause();
      playButton.style.display = 'flex'; // Show the play button when video is paused
    }
  }
  
  // Ensure the function is accessible after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    if (playButton) {
      playButton.addEventListener('click', toggleVideo);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'fade'
  const fadeElements = document.querySelectorAll(".fade");

  // Create the IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Add the 'show' class to fade in
          observer.unobserve(entry.target); // Stop observing after fade-in
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is in view
  );

  // Observe each fade element
  fadeElements.forEach((el) => observer.observe(el));
});

  