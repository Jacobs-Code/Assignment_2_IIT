function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";    
}

var plans = [
        [2026, "Diploma", "Diplomia Of Infomation Technology", 1], 
        [2027, "Diploma", "Diplomia Of Infomation Technology", 1], 
        [2028, "Bachelor", "Bachelor Of Infomation Technology", 1],
        [2028, "Software Developer", "Bachelor Of Infomation Technology", 2],
        [2029, "Software Developer", "Bachelor Of Infomation Technology", 3],
        [2029, "", "", 2],
        [2029, "Saving", "I save money", 1],
        [2035, "Money", "I save money", 1]
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
        document.getElementById(`plan${i}`).style.top = 58 - 12*plans[i][3] + "%";
        document.getElementById(`timeIndicator${i}`).style.left = 4.5+((plans[i][0]-2025)/(10)*88) + "%";
        document.getElementById(`timelineConnector${i}`).style.left = 4.7677076+((plans[i][0]-2025)/(10)*88) + "%";
        document.getElementById(`timelineConnector${i}`).style.top = 60 - 12*plans[i][3] + "%";
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
    document.getElementById("projectInformation").style.width = "41.8vw";
    document.getElementById("projectInformation").style.border = "0.1vh solid rgba(255, 255, 255, 0.509)";
    document.getElementById("projectInformation").style.padding = "1vw";
    document.getElementById("projectInformation").innerHTML = displayInformation;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("grayout").classList.add("grayout");    
}

function closePopup(){    
    document.getElementById("projectInformation").style.width = "0";
    document.getElementById("projectInformation").style.border = "0";
    document.getElementById("projectInformation").innerHTML = "";
    document.getElementById("projectInformation").style.padding = "0";
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("grayout").classList.remove("grayout");
}