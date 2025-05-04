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

function Project(name, image){
    this.name = name;
    this.image = image;
    this.tags = [];

    this.addTags = function(tag){
        this.tags.push(tag);
    }
}



setCurrentSlide(currentSlide);


function setCurrentSlide(slideNumber){

    var projectTags = "";

    for(var i = 0; i < projectList[slideNumber].tags.length; i++){
        if(i + 1 < projectList[slideNumber].tags.length)
            projectTags += projectList[slideNumber].tags[i] + " &#9900; ";
        else
            projectTags += projectList[slideNumber].tags[i];
    }

    var displayCurrent = "";

    for(var i = 0; i < projectList.length; i++){
        if(i == slideNumber)
            displayCurrent += `<p onclick = setCurrentSlide(${i})>&#9898;</p>`
        else 
            displayCurrent += `<p onclick = setCurrentSlide(${i})>&#9899;</p>`
    }

    document.getElementById("currentProject").innerHTML = `
        <div class = "projectInformation">
                        <h3>${projectList[slideNumber].name}</h3>
                        <h4>${projectTags}</h4>
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
                        <img class = "projectImage" src = "${projectList[slideNumber].image}" />
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