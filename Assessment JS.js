var currentSlide = 0;

var projectList = [];

var project = null;

project = new Project("Valorant", "Images/maxresdefault.jpg");

project.addTags("Application");
project.addTags("Game");
project.addTags("C*");

projectList.push(project);

project = new Project("Calendar Application", "Images/Screenshot 2025-04-30 115358.png");

project.addTags("Application");
project.addTags("Website");
project.addTags("HTML");
project.addTags("CSS");
project.addTags("JavaScript");

projectList.push(project);

project = new Project("Pokemon", "Images/9kF9SbfSEKzbgV5oVXiMe.png");

project.addTags("Application");
project.addTags("Game");

projectList.push(project);

project = new Project("Darkest Nights", "Images/OGc84P.png");

project.addTags("Application");
project.addTags("Game");
project.addTags("Unity");

projectList.push(project);

function Project(name, image){
    this.name = name;
    this.image = image;
    this.tags = [];

    this.addTags = function(tag){
        this.tags.push(tag);
    }
}



setCurrentSlide(currentSlide);
renderWebsite();

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
            <div class = "project">
                <div class = "projectImage">
                    <img src = "${projectList[i].image}"/>
                </div>

                <div>
                    <h1>${projectList[i].name}</h1>                    
                </div>
                
                <div class = "tagsContainer">
                    <h3 class = "tags">${separateTags(i)}</h3>
                </div>
            </div>
        `
    }
    
}


function setCurrentSlide(slideNumber){
    var displayCurrent = "";

    for(var i = 0; i < projectList.length && i < 4; i++){
        if(i == slideNumber)
            displayCurrent += `<p onclick = setCurrentSlide(${i})>&#9898;</p>`
        else 
            displayCurrent += `<p onclick = setCurrentSlide(${i})>&#9899;</p>`
    }

    document.getElementById("currentProject").innerHTML = `
        <div class = "projectInformation">
                        <h3>${projectList[slideNumber].name}</h3>
                        <h4>${separateTags(slideNumber)}</h4>
                    </div>                   

                    <div class = "back">
                        <p onclick = "previousSlide()">&#128896;</p>
                    </div>

                    <div class = "forward">
                        <p onclick = "nextSlide()">&#128898;</p>
                    </div>

                    <div class = "slideshowPosition">
                        ${displayCurrent} 
                    </div>

                    <div class = "imageEffects">
                        <img class = "highlightedProjectImage" src = "${projectList[slideNumber].image}" />
                    </div>
    `;                    
}

function previousSlide(){
    if(currentSlide - 1 >= 0){
        currentSlide = currentSlide - 1;
        setCurrentSlide(currentSlide);
    }else{
        currentSlide = projectList.length - 1;
        setCurrentSlide(currentSlide)
    }
}

function nextSlide(){
    if(currentSlide + 1 < projectList.length){
        currentSlide++;
        setCurrentSlide(currentSlide);
    }else{
        currentSlide = 0;
        setCurrentSlide(currentSlide);
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}