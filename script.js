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

    displayProjects();

});

prevButton.addEventListener("click", function() {
    currentCategory = currentCategory - 1;

    if (currentCategory < 0) {
        currentCategory = categories.length - 1;
    }

    categoryName.textContent = categories[currentCategory];

    displayProjects();

});


const projects = [
    {
        title: "Why Art Matters",
        genre: "Course Projects",
        description: "A single-page website exploring the importance of art during difficult times.",
        image: "images/why-art-matters.jpg",
        technologies: ["HTML", "CSS", "Git", "GitHub"],
        liveSite: "https://gilbertjoshua777-commits.github.io/my-first-html-project/",
        github: "https://github.com/gilbertjoshua777-commits/my-first-html-project"
    },
    {
        title: "Fictional Restaurant Page Update",
        genre: "Course Projects",
        description: "A redesigned restaurant website focused on navigation, accessibility, visual presentation, and responsive design.",
        image: "images/delicious-eats-webpage-screenshot.jpg",
        technologies: ["HTML", "CSS", "Git", "GitHub"],
        liveSite: "https://gilbertjoshua777-commits.github.io/C2-Broken-Restaurant-Website-Assignment/",
        github: "https://github.com/gilbertjoshua777-commits/C2-Broken-Restaurant-Website-Assignment"
    },
    {
        title: "Straight to the Point Archery",
        genre: "Course Projects",
        description: "A responsive website for a fictional archery business, built from client requirements with an emphasis on accessibility and responsive design.",
        image: "images/straight-to-the-point-archery-screenshot.jpg",
        technologies: ["HTML", "CSS", "Git", "GitHub"],
        liveSite: "https://gilbertjoshua777-commits.github.io/straight-to-the-point-archery/about.html",
        github: "https://github.com/gilbertjoshua777-commits/straight-to-the-point-archery"
    }
];



const projectList = document.querySelector("#project-list");

function displayProjects() {
projects.forEach(function(project) {
    if (project.genre === categories[currentCategory]) {
    projectList.innerHTML += `
        <section class="project">
            <h2>${project.title}</h2>

            <img src="${project.image}" alt="${project.title}">

            <p>${project.description}</p>

            <h3>Technologies Used</h3>

            <ul>
                ${project.technologies.map(function(technology) {
                    return `<li>${technology}</li>`;
                }).join("")}
            </ul>

            <p>
                <a href="${project.liveSite}" target="_blank">Live Site</a> |
                <a href="${project.github}" target="_blank">GitHub Repository</a>
            </p>
        </section>
    `;
    }

});
}

displayProjects();