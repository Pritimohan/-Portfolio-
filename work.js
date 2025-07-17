const projects = [
    {
        title: "AI-Powered Plagiarism Detector",
        description: "Detects plagiarism using AI",
        image: "./img/icons8-ai-144.png",
        link: "https://pritimohan-shit-ai-plagiarism-detector.vercel.app/"
    },

    {
        title: "Pinterest-Like Clone",
        description: "A clone of Pinterest with similar features",
        image: "./img/icons8-pinterest-144.png",
        link: "https://pinterest-clone-zi66.onrender.com"
    }, 
    {
        title: "Whisper",
        description: "A real-Time Chat Application",
        image: "./img/icons8-chat-240.png",
        link: "https://github.com/Pritimohan/Whisper--Chat-App-"
    }, 
    {
        title: "Hackathon",
        description: "A hackathon publishing platform",
        image: "./img/icons8-hashnode-240.png",
        link: "https://chimerical-souffle-8ef9df.netlify.app/"
    }, 
    
    {
        title: "BloodConnect",
        description: "Connecting blood donors with recipients",
        image: "./img/icons8-blood-96.png",
        link: "https://github.com/Pritimohan/BloodConnect"
    },

    {
        title: "Weather App",
        description: "A simple weather application",
        image: "./img/icons8-sun-240.png",
        link: "https://pritimohan.github.io/Weather-App/"
    },
    
    {
        title: "Instagram Clone",
        description: "Detects plaIgiarism using A",
        image: "./img/icons8-instagram-240.png",
        link: "https://pritimohan.github.io/Weather-App/"
    },   
    {
        title: "GitHub Profile Viewer",
        description: "A web application to view GitHub profiles",
        image: "./img/icons8-github-240.png",
        link: "https://pritimohan.github.io/GitHub-Profile-Viewer/"
    },
     {
        title: "Number Guessing Game",
        description: "A simple number guessing game",
        image: "./img/icons8-assume-64.png",
        link: "https://pritimohan.github.io/Guess-a-number-Game/"
    },
    {
        title: "BMI Calculator",
        description: "A simple BMI calculator",
        image: "./img/icons8-bmi-64.png",
        link: "https://pritimohan.github.io/BMI-Calculator/"
    },
  

]


const projectContainer = document.querySelector("#w_right");

projects.forEach((project) => {
    projectContainer.innerHTML += `            
    <div class="project">
                <div class="text">
                    <div class="iconBox">
                        <img src="${project.image}" alt="" width="40px">
                    </div>
                    <div class="titleArea">
                        <h4>${project.title}</h4>
                        <p>${project.description}</p>
                    </div>
                </div>
                <div class="linklogo">
                    <a href="${project.link}"><i class="ri-external-link-fill"></i></a>
                </div>
            </div>`
})
