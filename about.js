function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";    
}

var hobbies = [
    ["Coding", "I often code websites, games, and systems, gaining awards for many of my projects. I have learnt coding languages including;  <ul> <li> JavaScript (HTML, CSS)</li> <li> Python </li> <li> SQL (PHP)</li> <li> C* ( C++)</li> <li> R (RStudio data analysis)</li></ul> I have learnt the best way to learn new skills is through practice. This can be seen through my previous work which you can see here: <a style = 'color: white' href='portfolio.html'>Portfolio</a>", "Images/web-developer.png"],
    ["Engineering", "I often apply my coding knowledge in real word situations. The prime example of this is an automatic aquarium with a mechanical 3D printed system controlled by a motor. Through my exploration of engineering I have gained skills in <ul><li>3D Printing</li><li>Electrical Engineering</li><li>3D Modelling</li><li>And more</li></ul>", "Images/settings.png"],
    ["Exercise", "Maintaining my physical health is essential to consistency. For many years I participated in the team sport of football earning many awards. Through this endeavour I learnt the importance of clear communication both within a team environment and between individuals, developing the resilience to always get up when knocked down. When stuck, I value being brave and asking my team for help, as I know a team can overcome hurdles that are too high for one to jump alone. Complementary to participating in football, I often run becoming a part of a community, I volunteer at a weekly running event called 'Park Run' a 5 Kilometre run.", "Images/running-shoe.png"],
    ["Music", "I have played clarinet and saxophone since I was 9 years old, participating in multiple bands. Through my music, I have achieved Eisteddfod awards for musical performance. During my time learning these instruments I have gained experience in habits and learning as a skill. Playing instruments, like most skills, requires the ability attempt something the knowledge that you don’t know everything. It is easy to learn unwanted habits and shortcuts to make up for shortcomings. I have developed techniques to break out of unwanted habits through dedication and practice with the knowledge that I am able to do so with time.", "Images/saxophone.png"]
];

renderHobbies()

function renderHobbies(){
    for(var i = 0; i < hobbies.length; i++){
        document.getElementById("hobbies").innerHTML += `
            <div class = "hobby" onclick = "renderInformation(${i})">
                <img class = "photos" src = "${hobbies[i][2]}"/>
                <h3>${hobbies[i][0]}</h3>
                <h4>More</h4>                    
            </div>
        `
    }
}

function renderInformation(projectIndex){

    displayInformation = `
        <a class="closebtn" onclick = "closePopup()">&#10005;</a>

        <div>
            <h1>${hobbies[projectIndex][0]}</h1>                    
        </div>

        <div class = "description">
            <p>${hobbies[projectIndex][1]}</p>
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
    document.getElementById("body").style.overflowY = "auto";
    document.getElementById("grayout").classList.remove("grayout");
}