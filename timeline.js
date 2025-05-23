function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";    
}

var plans = [    
        [2025.5, "Entery Level", "I am currently looking for an entry level job so I can get experience in the job market. The goal is to gain both work a life experience through this process which will help me grow as a person.", 1], 
        [2026, "", "", 1], 
        [2026, "Diploma", "I am currently studying to get my Diploma/Bachelor Of Information Technology. I am on track by 2026 to get the Diploma.", 2], 
        [2026, "Job Change", "When I have obtained my Diploma of Information Technology, I will attempt to get a job that requires higher qualifications fitting my Diploma. I hope both work experience and higher education qualifications will help me become more employable.", 3], 
        [2027, "Research", "During 2027 I will research job requirements for becoming a software developer. For example, certificate requirements for potential jobs.", 1], 
        [2028, "Bachelor", "I am currently studying to get my Diploma/Bachelor of Information Technology. I am on track by 2028 to get the Bachelor.", 1],
        [2028, "Software Developer", "Now that I have the Bachelor of Information Technology and work experience, I will attempt to find a job position that fits my end goals aligning with my passion of coding.", 2],
        [2029, "Side Projects", "During this time, it is important to maintain side projects, so my creative output and self-esteem isn't reliant on the current development goals of my job. This is due to how large a company can feel. People may not always know how exactly, in a large-scale development plan, their work fits in. Side projects can help increase confidence and self-esteem by filling in these gaps.", 1],
        [2031, "Up skilling", "I personally find joy in creative outputs. I hope to maintain my skills while learning new ways to express my creativity. Although, my focus currently has been on coding to express my creativity, I have also expressed it through 3D design, game development, video editing and more. Learning and mastering new skills will enable me to express my creativity. For example, I hope to further my understanding video editing and mechanical engineering, just to name a few.", 1],
        [2033, "Opportunity", "I would be lying to you if I said I knew what exactly my life looks like at this point. The last few years have shown me just how much can change in such a small amount of time. What I do know is with unknowns comes opportunities. I will strive to make sure that I jump at every opportunity that comes my way. Exploring and living life to its fullest while making sure I don't let it pass by me.", 1],
    ]; 

var yearBuckets = [2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];



displayPlans();

function displayPlans(){
    for(var i = 0; i < yearBuckets.length; i++){
        document.getElementById("dates").innerHTML += `<p>${yearBuckets[i]}</p>`;
    }

    var plansHTML = "";
    for(var i = 0; i < plans.length; i++){
        plans[i][0]
        plansHTML += `
            <div onclick = "renderInformation(${i})" id = "plan${i}" class = "plan">
                <p>${plans[i][1]}</p>                                
            </div>
            <div class = "timelineConnector" id = "timelineConnector${i}"></div>
            <p class = "timeIndicator" id = "timeIndicator${i}">&#9900;</p>
        `
    }

    document.getElementById("plans").innerHTML = plansHTML;    
    for(var i = 0; i < plans.length; i++){
        document.getElementById(`plan${i}`).style.left = 5.5+((plans[i][0]-2025)/(10)*88) + "%";
        document.getElementById(`plan${i}`).style.top = 68 - 12*plans[i][3] + "%";
        document.getElementById(`timeIndicator${i}`).style.left = 4.5+((plans[i][0]-2025)/(10)*88) + "%";
        document.getElementById(`timelineConnector${i}`).style.left = 4.7677076+((plans[i][0]-2025)/(10)*88) + "%";
        document.getElementById(`timelineConnector${i}`).style.top = 70 - 12*plans[i][3] + "%";
        if(plans[i][2] == ""){
            document.getElementById(`plan${i}`).style.padding = 0;
            document.getElementById(`timelineConnector${i}`).style.borderTop = 0;
        }
            
    }
        
}

function renderInformation(projectIndex){

    displayInformation = `
        <a class="closebtn" onclick = "closePopup()">×</a>

        <div>
            <h1>${plans[projectIndex][1]}</h1>                    
        </div>

        <div class = "description">
            <p>${plans[projectIndex][2]}</p>
        </div>
    `;
    document.getElementById("displayInformation").style.width = "41.8vw";
    document.getElementById("displayInformation").style.border = "0.1vh solid rgba(255, 255, 255, 0.509)";
    document.getElementById("displayInformation").style.padding = "1vw";
    document.getElementById("displayInformation").innerHTML = displayInformation;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("grayout").classList.add("grayout");    
}

function closePopup(){    
    document.getElementById("displayInformation").style.width = "0";
    document.getElementById("displayInformation").style.border = "0";
    document.getElementById("displayInformation").innerHTML = "";
    document.getElementById("displayInformation").style.padding = "0";
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("grayout").classList.remove("grayout");
}