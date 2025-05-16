var currentSlide = 0;

var projectList = [];

var project = null;

project = new Project("Valorant", "Images/maxresdefault.jpg", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://github.com/Jacobs-Code/Assignment_2_IIT/tree/main");

project.addTags("Application");
project.addTags("Game");
project.addTags("C*");

projectList.push(project);

project = new Project("Calendar Application", "Images/Screenshot 2025-04-30 115358.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://github.com/Jacobs-Code/Assignment_2_IIT/tree/main");

project.addTags("Application");
project.addTags("Website");
project.addTags("HTML");
project.addTags("CSS");
project.addTags("JavaScript");

projectList.push(project);

project = new Project("Pokemon", "Images/9kF9SbfSEKzbgV5oVXiMe.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://github.com/Jacobs-Code/Assignment_2_IIT/tree/main");

project.addTags("Application");
project.addTags("Game");

projectList.push(project);

project = new Project("Darkest Nights", "Images/OGc84P.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "https://github.com/Jacobs-Code/Assignment_2_IIT/tree/main");

project.addTags("Application");
project.addTags("Game");
project.addTags("Unity");

projectList.push(project);

function Project(name, image, description, githubLink){
    this.name = name;
    this.image = image;
    this.description = description;
    this.githubLink = githubLink;
    this.tags = [];

    this.addTags = function(tag){
        this.tags.push(tag);
    }
}

const repeatNextSlide = () => {
    nextSlide();
};

const startRepeating = () => {
    intervalId = setInterval(repeatNextSlide, 4000);
};

setCurrentSlide(currentSlide);
renderWebsite();
startRepeating();



function separateTags(projectIndex){
    var projectTags = "";

    for(var i = 0; i < projectList[projectIndex].tags.length; i++){
        if(i + 1 < projectList[projectIndex].tags.length && i + 1 <= 2)
            projectTags += projectList[projectIndex].tags[i] + " &#9900; ";
        else if(i + 1 > 3){
            projectTags += " ..."; 
            break           
        }else 
            projectTags += projectList[projectIndex].tags[i];
    }

    return(projectTags)
}

function renderWebsite(){
    
    for(var i = 0; i < projectList.length; i++){      
        document.getElementById("projectsContainer").innerHTML += `
            <div class = "project" onclick = "renderInformation(${i})">
                <div class = "projectImage">
                    <img src = "${projectList[i].image}"/>
                </div>

                <div>
                    <h4>${projectList[i].name}</h4>                    
                </div>
                
                <div class = "tagsContainer">
                    <h5 class = "tags">${separateTags(i)}</h5>
                </div>
            </div>
        `
    }
    
}


function setCurrentSlide(slideNumber){
    var displayCurrent = "";

    for(var i = 0; i < projectList.length && i < 4; i++){
        if(i == slideNumber)
            displayCurrent += `<p class = "clickable" onclick = "setSlide(${i})">&#9898;</p>`
        else 
            displayCurrent += `<p class = "clickable" onclick = "setSlide(${i})">&#9899;</p>`
    }

    document.getElementById("currentProject").innerHTML = `

        <div class = "back clickable">
            <p onclick = "callPreviousSlide()">&#128896;</p>
        </div>

        <div class = "forward clickable">
            <p onclick = "callNextSlide()">&#128898;</p>
        </div>

        <div class = "slideshowPosition">
            ${displayCurrent} 
        </div>

        <div class = "opensInfo" onclick = "renderInformation(${slideNumber})">
        
        </div>

        <div id = "imageEffects" class = "darken">
            <img class = "highlightedProjectImage" src = "${projectList[slideNumber].image}" />
             <div class = "projectInformation">
                <h3>${projectList[slideNumber].name}</h3>
                <h4>${separateTags(slideNumber)}</h4>
            </div> 
        </div>
    `;     
    setTimeout(fadeIn, 50);    
}

function previousSlide(){
    if(currentSlide - 1 >= 0){
        currentSlide = currentSlide - 1;
        document.getElementById("imageEffects").classList.add("darken");    
        setTimeout(() => setCurrentSlide(currentSlide), 250);
    }else{
        currentSlide = projectList.length - 1;
        document.getElementById("imageEffects").classList.add("darken");    
        setTimeout(() => setCurrentSlide(currentSlide), 250);
    }
}

function nextSlide(){
    if(currentSlide + 1 < projectList.length){
        currentSlide++;
        document.getElementById("imageEffects").classList.add("darken");    
        setTimeout(() => setCurrentSlide(currentSlide), 250);
    }else{
        currentSlide = 0;
        document.getElementById("imageEffects").classList.add("darken");    
        setTimeout(() => setCurrentSlide(currentSlide), 250);
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";    
}

function renderInformation(projectIndex){

    var tags = separateTags(projectIndex);

    displayInformation = `
        <a class="closebtn" onclick = "closePopup()">×</a>
                
        <div class = "projectImage">
            <img src = "${projectList[projectIndex].image}"/>
        </div>

        <div>
            <h1>${projectList[projectIndex].name}</h1>                    
        </div>
        
        <div class = "tagsContainer">
            <h3 class = "tags">${tags}</h3>
        </div>

        <div class = "description">
            <p>${projectList[projectIndex].description}</p>
            <p><a href="${projectList[projectIndex].githubLink}">Git Hub Link</a></p>
        </div>
    `;
    document.getElementById("projectInformation").style.width = "41.8vw";
    document.getElementById("projectInformation").innerHTML = displayInformation;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("grayout").classList.add("grayout");
    
    
}

function closePopup(){    
    document.getElementById("projectInformation").style.width = "0";
    document.getElementById("projectInformation").innerHTML = "";
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("grayout").classList.remove("grayout");
}

function fadeIn(){
    document.getElementById("imageEffects").classList.remove("darken");  
}

function callNextSlide(){
    clearInterval(intervalId);
    nextSlide();    
    startRepeating();
}
function callPreviousSlide(){
    clearInterval(intervalId);
    previousSlide();
    startRepeating();
}

function setSlide(slideIndex){
    clearInterval(intervalId);
    setCurrentSlide(slideIndex);
    currentSlide = slideIndex;
    startRepeating();
}