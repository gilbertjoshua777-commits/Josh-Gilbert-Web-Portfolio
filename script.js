const prevButton = document.querySelector("#prev-category");
const nextButton = document.querySelector("#next-category");

let currentProject = 0;

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
        technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
        liveSite: "https://gilbertjoshua777-commits.github.io/straight-to-the-point-archery/about.html",
        github: "https://github.com/gilbertjoshua777-commits/straight-to-the-point-archery"
    }
];



nextButton.addEventListener("click", function() {
    currentProject = currentProject + 1;

    if (currentProject >= projects.length) {
        currentProject = 0;
    }

    displayProjects();

});

prevButton.addEventListener("click", function() {
    currentProject = currentProject - 1;

    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    displayProjects();

});


function displayProjects() {
    const projectList = document.querySelector("#project-list");

    projectList.innerHTML = "";

    const project = projects[currentProject];

projectList.innerHTML = `
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

displayProjects();