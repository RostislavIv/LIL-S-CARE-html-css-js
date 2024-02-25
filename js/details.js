// Change heart icon (favorite item) color on click
const heartIcon = document.getElementById("heart-icon");

heartIcon.addEventListener("click", function () {
  if (!heartIcon.classList.contains("favorite")) {
    heartIcon.classList.add("favorite");
    heartIcon.children[0].style.display = "none";
    heartIcon.children[1].style.display = "block";
  } else {
    heartIcon.classList.remove("favorite");
    heartIcon.children[0].style.display = "block";
    heartIcon.children[1].style.display = "none";
  }
});

// Change plus/minus sign on click
const toggleSigns = document.querySelectorAll(".toggle-sign");

for (let i = 0; i < toggleSigns.length; i++) {
  toggleSigns[i].addEventListener("click", function () {
    const x = toggleSigns[i].querySelector("span");
    if (toggleSigns[i].classList.contains("collapsed")) {
      x.textContent = "+";
    } else {
      x.textContent = "-";
    }
  });
}

// Add comment functionality
const leaveCommentButton = document.getElementById("leave-comment");
const commentProductDiv = document.getElementById("comment-product");
const commentForm = document.querySelector("form");

leaveCommentButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  commentProductDiv.style.display = "block";
});
commentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  commentProductDiv.style.display = "none";
});

// Add star rating functionality
const starRating = document.getElementById("star-rating");
const radioButtons = starRating.querySelectorAll('input[type="radio"]');

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    const selectedRating = this.value;
    updateStarRating(selectedRating);
  });
});

function updateStarRating(rating) {
  const stars = starRating.querySelectorAll("label");
  stars.forEach(function (star, index) {
    if (index < rating) {
      star.innerHTML = '<i class="fa-solid fa-star"></i>';
    } else {
      star.innerHTML = '<i class="fa-regular fa-star"></i>';
    }
  });
}

// Add image preview functionality to file inputs
const fileInputs = document.querySelectorAll('input[type="file"]');
const fileLabels = document.querySelectorAll(".btn-image");

fileInputs.forEach(function (input, index) {
  input.addEventListener("change", function () {
    const file = this.files[0];
    const label = fileLabels[index];

    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        label.style.backgroundImage = `url('${reader.result}')`;
      };
      reader.readAsDataURL(file);
      label.textContent = "-";
    } else {
      label.textContent = "+";
      label.style.backgroundImage = "none";
    }
  });
});

// Similar Products Carousel
(function ($) {
  "use strict";
  $(".vegetable-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-right-long" style="font-size: 24px;"></i>',
      '<i class="fa-solid fa-arrow-left-long" style="font-size: 24px;"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
})(jQuery);
