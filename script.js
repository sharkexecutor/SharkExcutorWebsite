let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const img = document.querySelector(".animated-img");
  const imgPosition = img.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (imgPosition < screenHeight) {
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      img.classList.add("scroll-down");
      img.classList.remove("scroll-up");
    } else {
      // Scrolling up
      img.classList.add("scroll-up");
      img.classList.remove("scroll-down");
    }
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});


document.getElementById("download").addEventListener("click", () => {
  // File path (update with the correct path to your ZIP file)
  const filePath = "./imgs/zip/SharkExecutor.zip";

  // Create a temporary <a> element to trigger the download
  const a = document.createElement("a");
  a.href = filePath;
  a.download = "SharkExecutor.zip"; // This will be the name of the downloaded file
  document.body.appendChild(a);
  a.click(); // Trigger the download
  document.body.removeChild(a); // Clean up
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        let answer = button.nextElementSibling;
        
        if (answer.style.maxHeight) {
            // If it's open, close it
            answer.style.maxHeight = null;
            answer.style.opacity = "0";
        } else {
            // Close all other answers first
            document.querySelectorAll(".faq-answer").forEach(p => {
                p.style.maxHeight = null;
                p.style.opacity = "0";
            });

            // Then open the clicked one
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = "1";
        }
    });
});






