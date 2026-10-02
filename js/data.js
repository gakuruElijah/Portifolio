// ============================================
// PORTFOLIO DATA - EDIT THIS FILE TO CUSTOMIZE YOUR CONTENT
// ============================================

const portfolioData = {
    // About Section
    about: {
        intro: "I'm a software engineer who turns ideas into clean, reliable, and user-friendly digital products. I enjoy the full journey of building software: understanding a problem, designing a solution, writing maintainable code, and shipping something people actually enjoy using.",
        details: [
            "I work across the stack, building responsive front-end interfaces, developing back-end logic and APIs, and designing databases that stay organized as projects grow. I care about readable code, thoughtful architecture, and performance, and I treat testing and documentation as part of the job, not an afterthought.",
            "Beyond writing code, I value clear communication and collaboration. I ask questions early, take feedback seriously, and work well with designers, clients, and fellow developers to deliver on time and on target.",
            "I'm always learning, whether it's a new framework, a better way to structure a project, or a sharper approach to problem-solving. I believe great software comes from curiosity, discipline, and a genuine desire to make things better for the people who use it. Let's build something great together."
        ]
    },

    // Skills Section - Organized by Category
    skills: [
        {
            category: "Frontend Development",
            items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "Sass/SCSS"]
        },
        {
            category: "Backend Development",
            items: ["Node.js", "Express.js", "Python", "Django", "RESTful APIs", "GraphQL", "PHP", "Laravel"]
        },
        {
            category: "Databases & Tools",
            items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis", "SQL", "Database Design"]
        },
        {
            category: "Dev Tools & Others",
            items: ["Git & GitHub", "VS Code", "Docker", "Postman", "Figma", "Linux", "Agile/Scrum", "CI/CD"]
        }
    ],

    // Projects Section
    projects: [
        {
            title: "Spring of Kindness Foundation",
            description: "A modern, responsive website for the Spring of Kindness Foundation, a nonprofit dedicated to education and empowerment for young Africans. The site presents the foundation's mission, programs, and impact in a clear, welcoming way, helping visitors understand the work and connect with the cause.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/gakuruElijah/SOKF",
            demo: "https://sokf.vercel.app",
            emoji: "🎓💖"
        },
        {
            title: "To-Do-List-app",
            description: "A clean, easy-to-use task manager that helps users plan their day and stay organized. Users can add, edit, complete, and delete tasks, with changes saved automatically so their list is still there when they return.",
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/gakuruElijah/To-do-list-app",
            demo: "https://to-do-list-app-pi-nine.vercel.app/",
            emoji: "📋"
        },
        {
            title: "Weather Dashboard",
            description: "An intuitive weather application that provides real-time weather data, forecasts, and interactive maps. Features location-based services and responsive design.",
            tech: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
            github: "https://github.com/yourusername/weather-dashboard",
            demo: "https://your-demo-link.com",
            emoji: "🌤️"
        },
        {
            title: "Blog CMS",
            description: "A content management system for bloggers with markdown support, SEO optimization, and analytics. Features a clean admin panel and customizable themes.",
            tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
            github: "https://github.com/yourusername/blog-cms",
            demo: "https://your-demo-link.com",
            emoji: "✍️"
        },
        {
            title: "Portfolio Generator",
            description: "A tool that helps developers create beautiful portfolio websites by selecting themes and inputting their information. No coding required for end users.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/yourusername/portfolio-generator",
            demo: "https://your-demo-link.com",
            emoji: "🎨"
        },
        {
            title: "Real-Time Chat App",
            description: "A modern messaging application with real-time communication, group chats, file sharing, and end-to-end encryption. Mobile-responsive design.",
            tech: ["Socket.io", "Express", "React", "Redis"],
            github: "https://github.com/yourusername/chat-app",
            demo: "https://your-demo-link.com",
            emoji: "💬"
        }
    ],

    // Experience & Education Timeline
    timeline: [
        {
            date: "2025 - Present",
            title: "Software Engineering Student",
            subtitle: "Adventist University of Central Africa (AUCA)",
            description: "Pursuing a Bachelor's degree in Software Engineering with a focus on full-stack development, software architecture, and agile methodologies. Maintaining excellent academic performance while actively participating in coding competitions and tech communities."
        },
        {
            date: "2025",
            title: "Software Developer Trainee",
            subtitle: "The Gym",
            description: "Participated in The Gym software development training program, gaining practical experience in building web applications and working on real-world development tasks. Developed skills in frontend development using HTML, CSS, and React.js, as well as backend development with Node.js. Worked on projects that strengthened my problem-solving, teamwork, Git/GitHub, and software development skills."
        },
        {
            date: "2021 - 2024",
            title: "TVET Level V Certificate",
            subtitle: "Software Development Program",
            description: "Completed intensive vocational training in software development, covering programming fundamentals, web technologies, database management, and software engineering principles. Graduated with distinction and earned industry-recognized certification."
        }
    ],

    // Contact Information
    contact: {
        email: "elijahgakuru250@gmail.com",
        location: "Kigali, Rwanda",
        github: "https://github.com/gakuruElijah",
        linkedin: "https://www.linkedin.com/in/elijahgakuru/"
    }
};

// ============================================
// DO NOT EDIT BELOW THIS LINE
// (Unless you want to customize how data is rendered)
// ============================================

// Populate About Section
function populateAbout() {
    const aboutIntro = document.getElementById('aboutIntro');
    const aboutDetails = document.getElementById('aboutDetails');
    
    if (aboutIntro) {
        aboutIntro.textContent = portfolioData.about.intro;
    }
    
    if (aboutDetails) {
        aboutDetails.innerHTML = portfolioData.about.details
            .map(detail => `<p>${detail}</p>`)
            .join('');
    }
}

// Populate Skills Section
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    if (skillsGrid) {
        skillsGrid.innerHTML = portfolioData.skills.map(skillCategory => `
            <div class="skill-category animate-on-scroll">
                <h3>${skillCategory.category}</h3>
                <div class="skill-tags">
                    ${skillCategory.items.map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Populate Projects Section
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projectsGrid) {
        projectsGrid.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card animate-on-scroll">
                <div class="project-image">
                    <span style="font-size: 4rem;">${project.emoji}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Code
                        </a>
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Demo
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Populate Timeline Section
function populateTimeline() {
    const timeline = document.getElementById('timeline');
    
    if (timeline) {
        timeline.innerHTML = portfolioData.timeline.map(item => `
            <div class="timeline-item animate-on-scroll">
                <span class="timeline-date">${item.date}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <h4 class="timeline-subtitle">${item.subtitle}</h4>
                <p class="timeline-description">${item.description}</p>
            </div>
        `).join('');
    }
}

// Initialize all data population
function initializeData() {
    populateAbout();
    populateSkills();
    populateProjects();
    populateTimeline();
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeData);
} else {
    initializeData();
}
