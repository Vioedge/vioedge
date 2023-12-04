document.addEventListener("DOMContentLoaded", function () {
    // Define the text you want to type
    const textToType = "404";
  
    // Get the typewriter element
    const typewriterElement = document.getElementById("typewriter");
  
    // Clear the content initially
    typewriterElement.textContent = "";
  
    // Function to type one character at a time
    function typeCharacter(text, index) {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        setTimeout(function () {
          typeCharacter(text, index + 1);
        }, 100); // Adjust the delay (in milliseconds) for typing speed
      }
    }
  
    // Start typing when the page loads
    typeCharacter(textToType, 0);
  });
  