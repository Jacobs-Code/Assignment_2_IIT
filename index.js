function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";    
}

function renderInformation(){

    displayInformation = `
        <a class="closebtn" onclick = "closePopup()">&#10005;</a>

        <div>
            <h1>Feedback</h1>                    
        </div>

        <div class = "description">
            <form action = "thankyouPage.php">
                <label for ="usersName">Your Name:</label>
                <br>
                <input type = "text" name = "usersName" id = "usersName" required/>
                <br>
                <br>
                <label for ="email">Your Email:</label>
                <br>
                <input type = "email" name = "email" id = "email" required/>

                <br>
                <br>
                <p>Experience:</p>
                <div id "experience" class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                <br>
                <br>
                <br>
                <br>
                <p><label for="additionalFeedback">Additional Feedback:</label></p>
                <textarea id="additionalFeedback" name="additionalFeedback" rows="4" cols="60"></textarea>
                <input type="submit" value="Submit">
            </form>
        </div>
    `;
    document.getElementById("displayInformation").style.width = "41.8vw";
    document.getElementById("displayInformation").style.border = "0.1vh solid rgba(255, 255, 255, 0.509)";
    document.getElementById("displayInformation").style.padding = "1vw";
    document.getElementById("displayInformation").innerHTML = displayInformation;
    document.getElementById("bodyHome").style.overflow = "hidden";
    document.getElementById("grayout").classList.add("grayout");    
}

function closePopup(){    
    document.getElementById("displayInformation").style.width = "0";
    document.getElementById("displayInformation").style.border = "0";
    document.getElementById("displayInformation").innerHTML = "";
    document.getElementById("displayInformation").style.padding = "0";
    document.getElementById("bodyHome").style.overflow = "auto";
    document.getElementById("grayout").classList.remove("grayout");
}