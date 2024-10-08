// Slider code ------------------------------

document.body.style.overflowX = "hidden";

const slides = document.querySelectorAll(".sliderBanner");
const buttons = document.querySelectorAll(".bannerSliderButton button");
let curSlide = 0;
const maxSlide = slides.length;

// Function to go to a specific slide
const gotoSlide = (slideIndex) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slideIndex)}%)`;

    const textElements = slide.querySelectorAll("h1, p, span, button");

    textElements.forEach((el) => el.classList.remove("textAnimate"));

    if (i === slideIndex) {
      textElements.forEach((el) => el.classList.add("textAnimate"));
    }
  });
};

// Function to update the active button
const updateActiveButton = function (activeIndex) {
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === activeIndex);
  });
};

// Initially set all slides and buttons
gotoSlide(0);
updateActiveButton(0);

// Add event listeners to all buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    gotoSlide(index);
    updateActiveButton(index);
  });
});

// testimonial code ------------------------------

let currentSlideIndex = 1;
showSlides(currentSlideIndex);

function currentSlide(n) {
  showSlides((currentSlideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("testimonial");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  // Hide all slides and reset opacity/transform
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  // Show the selected slide with animation
  slides[currentSlideIndex - 1].style.display = "block";
  setTimeout(function () {
    slides[currentSlideIndex - 1].classList.add("active");
  }, 10);

  // Update dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentSlideIndex - 1].className += " active";
}

setInterval(function () {
  currentSlide((currentSlideIndex += 1));
}, 3000);

// team code ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the data from the JSON file
  fetch("team.json")
    .then((response) => response.json())
    .then((data) => {
      const team = data.team;
      let currentIndex = 0;

      // Select the main elements
      const teamTitle = document.getElementById("team-title");
      const teamName = document.getElementById("team-name");
      const teamDescription = document.getElementById("team-description");
      const teamMainImage = document.getElementById("team-main-image");
      const thumbnailContainer = document.getElementById("thumbnail-container");
      const dotContainer = document.getElementById("dot-container");
      const teamButton = document.getElementById("team-button");

      // Function to update the content based on the selected index
      function updateContent(index) {
        const member = team[index];

        // Hide content first (removing fade class)
        teamTitle.classList.remove("faded");
        teamName.classList.remove("faded");
        teamDescription.classList.remove("faded");
        teamMainImage.classList.remove("faded");
        teamButton.classList.remove("faded");

        // Update content with a small delay for the fade-out effect
        setTimeout(() => {
          teamTitle.textContent = member.title;
          teamName.textContent = member.name;
          teamDescription.textContent = member.description;
          teamMainImage.src = member.image;

          // Add fade animation back after updating content
          teamTitle.classList.add("faded");
          teamName.classList.add("faded");
          teamDescription.classList.add("faded");
          teamMainImage.classList.add("faded");
          teamButton.classList.add("faded");
        });

        // Update thumbnails and dots
        updateThumbnails(index);
        updateDots(index);
      }

      // Function to update the active thumbnail
      function updateThumbnails(index) {
        const thumbnails = document.querySelectorAll(".team-images img");
        thumbnails.forEach((thumbnail, i) => {
          thumbnail.classList.toggle("active", i === index);
        });
      }

      // Function to update the active dot
      function updateDots(index) {
        const dots = document.querySelectorAll(".teamDot");
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }

      // Initially load the first member's info
      updateContent(currentIndex);

      // Generate the thumbnails
      team.forEach((member, index) => {
        const img = document.createElement("img");
        img.src = member.image;
        img.alt = member.name;

        // Add click event to update the content when a thumbnail is clicked
        img.addEventListener("click", () => {
          currentIndex = index;
          updateContent(currentIndex);
        });

        thumbnailContainer.appendChild(img);
      });

      // Generate the slider dots
      team.forEach((member, index) => {
        const dot = document.createElement("span");
        dot.classList.add("teamDot");

        // Add click event to update the content when a dot is clicked
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateContent(currentIndex);
        });

        dotContainer.appendChild(dot);
      });

      // Initially set the first dot as active
      updateThumbnails(currentIndex);
      updateDots(currentIndex);
    })
    .catch((error) => console.error("Error loading the JSON file:", error));
});

const navIcon = document.querySelector(".navIcon");
const headerCont = document.querySelector(".header2nd");

navIcon.addEventListener("click", () => {
  headerCont.classList.toggle("active");
  document.body.style.overflowX = "hidden";
});

document.addEventListener("DOMContentLoaded", () => {
  const secRowImages = document.querySelectorAll(".animate3");
  const secondSecInnerRow = document.querySelectorAll(".animate");
  const animate2 = document.querySelectorAll(".animate2");
  const animate4 = document.querySelectorAll(".animate4");

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  const handleScroll = () => {
    secRowImages.forEach((img) => {
      if (isInViewport(img)) {
        img.classList.add("visible"); // Add animation class when in view
      }
    });
    secondSecInnerRow.forEach((img) => {
      if (isInViewport(img)) {
        img.classList.add("visible"); // Add animation class when in view
      }
    });
    animate2.forEach((img) => {
      if (isInViewport(img)) {
        img.classList.add("visible"); // Add animation class when in view
      }
    });
    animate4.forEach((img) => {
      if (isInViewport(img)) {
        img.classList.add("visible"); // Add animation class when in view
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check on initial load
});

const input1 = document.querySelectorAll(".input1");
const inputDim = document.querySelectorAll(".inputDim");
const dropdownLists = document.querySelectorAll(".list ul");

inputDim.forEach((input, index) => {
  input.addEventListener("click", () => {
    dropdownLists[index].classList.toggle("hide");
  });
});

dropdownLists.forEach((dropdown, index) => {
  const listItems = dropdown.querySelectorAll("li");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      input1[index].textContent = item.textContent;
      dropdown.classList.add("hide");
    });
  });
});

const input2 = document.querySelector(".input2");
const inputDim1 = document.querySelector(".inputDim1");
const dropdownLists1 = document.querySelector(".list1 ul");
const listItems = document.querySelectorAll(".list1 ul li");

inputDim1.addEventListener("click", () => {
  dropdownLists1.classList.toggle("hide");
});

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    input2.textContent = item.textContent;
    dropdownLists1.classList.add("hide");
  });
});
