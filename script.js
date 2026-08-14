const prevButton = document.querySelector("#prev-category");
const nextButton = document.querySelector("#next-category");
const categoryName = document.querySelector("#category-name");

const categories = ["Course Projects"];

let currentCategory = 0;

nextButton.addEventListener("click", function() {
    currentCategory = currentCategory + 1;

    if (currentCategory >= categories.length) {
        currentCategory = 0;
    }

    categoryName.textContent = categories[currentCategory];
});

prevButton.addEventListener("click", function() {
    currentCategory = currentCategory - 1;

    if (currentCategory < 0) {
        currentCategory = categories.length - 1;
    }

    categoryName.textContent = categories[currentCategory];
});