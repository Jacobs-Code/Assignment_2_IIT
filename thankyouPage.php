<!doctype html>
<html>
<head>
    <title>Thankyou!</title>
	<link rel="stylesheet" href="Assessment CSS.css" type="text/css"/>
</head>
<body>
	<header>
		<h1>Thank You!</h1>

		<h1 id = "menuButton" class = "clickable" onclick = "openNav()">&equiv;</h1>                   
	</header>

	<aside>
		<div id="mySidebar" class="sidebar">
			<a href="javascript:void(0)" class="closebtn" onclick = "closeNav()">×</a>
			<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="future.html">Future</a>
			<a href="portfolio.html">Portfolio</a>
		</div>
    </aside>

    <div id = "maincontainer">        
        <div id = "feedback">
		<?php		


			if(isset($_GET['usersName'], $_GET['email'], $_GET['rate'], $_GET['additionalFeedback']))
			{
				$usersName = $_GET['usersName'];
				$email = $_GET['email'];
				$stars = $_GET['rate'];
				$feedback = $_GET['additionalFeedback'];	
				
				echo "<h1>Thank You for your feedback!</h1><br> ";
				echo "Feedback Overview:<br><br>";
				echo "Name: $usersName <br>";
				echo "Email Address: $email <br>";
				echo "Experince Rating: $stars stars <br>";
				echo "Feedback: $feedback <br>";			
			}
			else 
			{
				echo "You did not provide any data";
			}

			
		?>
		    
    </div>

	<footer>
            <div id = "contact">
                <div>
                    <a href = "https://www.gmail.com" target="_blank"><img class = "photos" src = "Images/mail.png"/></a>               
                </div>

                <div>
                    <a href = "https://www.linkedin.com" target="_blank"><img class = "photos" src = "Images/linkedin.png"/></a>
                </div>

                <div>                    
                    <a href = "https://www.facebook.com" target="_blank"><img class = "photos" src = "Images/facebook-app-symbol.png"/></a>
                </div>
                <div>                    
                    <a href = "https://x.com" target="_blank"><img class = "photos" src = "Images/twitter.png"/></a>
                </div>                
            </div>
            <p><br>&COPY; Jacob Lowe. Some rights reserved. </p>
            <br>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="future.html">Future</a>
            <a href="portfolio.html">Portfolio</a>
		</div>
	</footer>
    
        
</body>
<script type="text/javascript" src= "index.js"></script>
</html>