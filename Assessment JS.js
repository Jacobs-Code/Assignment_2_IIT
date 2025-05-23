var currentSlide = 0;

var projectList = [];

var project = null;

project = new Project("Leap of Faith", "Images/LeapOfFaith.png", "Leap of Faith is a 3D platformer/parkour game. The concept is that you play as a robot that fixes systems on a ship but reaching certain points. While going through the game you gain new abilities as you fix the ship. The execution didn't end up demonstrating this to the player in game, the plan was to have the end of each level be a computer that gives lore each time you enter a disk to fix the ship. To move in this game you need to use W, A, S, and D keys to go their respective directions and you the mouse to look around.", "https://github.com/Jacobs-Code/Leap-Of-Faith");

project.addTags("Application");
project.addTags("Game");
project.addTags("C#");
project.addTags("Unity");
project.addTags("3D");

projectList.push(project);

project = new Project("Mirror Ball", "Images/MirrorballBanner.png", "Mirror Ball is a game that I developed where you have 2 balls that are a mirror of each other you navigate around falling blocks to continue. To do so you use your mouse to position one ball and the second ball mirrors its movement.", "MirrorBall.html");

project.addTags("Application");
project.addTags("Game");
project.addTags("JavaScript");

projectList.push(project);


project = new Project("Aquarium Automation", "Images/Aquaruim.png", "Monitoring system that tracks variables that affect a plant’s growth and will automatically assist, based on data collected by sensors, in maintaining the aquarium's fitness to grow plants.", "https://docs.google.com/document/d/1k3niu9xapbybiv8mqTZmHT5A5jIDxzjmNw034KHPX4s/edit?tab=t.0");

project.addTags("Circuits");
project.addTags("3D Printing");
project.addTags("Websites");

projectList.push(project);

project = new Project("Dark Nights", "Images/DarkNights.png", "Dark Nights is a 2D survival game in which you attempt to maintain all vitals. 1 to 4 changes the held items. During the night the things get tougher, try to collect resources to be able to build a safe place.", "https://github.com/Jacobs-Code/DON-game-folder");

project.addTags("Application");
project.addTags("Game");
project.addTags("Unity");
project.addTags("2D");

projectList.push(project);

project = new Project("Nomis", "Images/Nomis.png", "Nomis is a memory game replica of Simon. You have to walk up to the colorful balls to start the game. Wait for the a ball light up and click on it, the it will play 2 in a row. Click the balls in the same order and so on.", "https://github.com/Jacobs-Code/Nomis");

project.addTags("Application");
project.addTags("Game");
project.addTags("Unity");
project.addTags("3D");

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
    intervalId = setInterval(repeatNextSlide, 5000);
};

setCurrentSlide(currentSlide);
renderWebsite();
startRepeating();



function separateTags(projectIndex){
    var projectTags = "";

    for(var i = 0; i < projectList[projectIndex].tags.length; i++){
        if(i + 1 < projectList[projectIndex].tags.length && i + 1 <= 1)
            projectTags += projectList[projectIndex].tags[i] + " &#9900; ";
        else if(i + 1 > 2){
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
        <div class = "projectInformation">
            <h3>${projectList[slideNumber].name}</h3>
            <h4>${separateTags(slideNumber)}</h4>
        </div>

        <div id = "imageEffects" class = "darken">
            <img class = "highlightedProjectImage" src = "${projectList[slideNumber].image}" />            
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
        if(projectList.length < 5)
            currentSlide = projectList.length - 1;
        else 
            currentSlide = 3;   

        document.getElementById("imageEffects").classList.add("darken"); 
        setTimeout(() => setCurrentSlide(currentSlide), 250);
    }
}

function nextSlide(){
    if(currentSlide + 1 < projectList.length && currentSlide + 1 < 4){
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
            <p><a style = "color:white" href="${projectList[projectIndex].githubLink}" target="_blank">More</a></p>
        </div>
    `;
    document.getElementById("displayInformation").style.width = "41.8vw";
    document.getElementById("displayInformation").style.border = "0.1vh solid rgba(255, 255, 255, 0.509)";
    document.getElementById("displayInformation").innerHTML = displayInformation;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("grayout").classList.add("grayout");    
}

function closePopup(){    
    document.getElementById("displayInformation").style.width = "0";
    document.getElementById("displayInformation").style.border = "0";
    document.getElementById("displayInformation").innerHTML = "";
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