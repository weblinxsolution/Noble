/* Open */
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  
  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 100, 3000);
    counter("count2", 100, 20, 2500);
    counter("count3", 0, 26, 3000);
   });
   

   document.addEventListener("DOMContentLoaded", function () {
    // Hide the additional paragraphs initially
    const moreText = document.getElementById("moreText");
    moreText.style.maxHeight = "0";
    moreText.style.opacity = "0";

    // Toggle the additional paragraphs when the "Read More" link is clicked
    const readMoreLink = document.getElementById("readMoreLink");
    let isExpanded = false;

    readMoreLink.addEventListener("click", function (e) {
        e.preventDefault();

        if (!isExpanded) {
            moreText.style.maxHeight = moreText.scrollHeight + "px";
            moreText.style.opacity = "1";
            readMoreLink.textContent = "- Read Less";
        } else {
            moreText.style.maxHeight = "0";
            moreText.style.opacity = "0";
            readMoreLink.textContent = "+ Read More";
        }

        isExpanded = !isExpanded;
    });
});
