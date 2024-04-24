<!DOCTYPE html>
<html lang = "en">
	<head>
	<style>
	body {background-color: gray;}
	h1   {color: gold;}
	p    {color: white;}
	</style>
		<title>Armor Wars</title>
		<meta charset = "utf-8">
	</head>
	<body>
		<header>
			<h1><em><center>Armor Wars</em></h1>
		</header>
		<style>
		{
  box-sizing: border-box;
}

.row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 25%;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.mySlides {
  display: none;
}

.cursor {
  cursor: pointer;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: -4px;
}

.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
<body>

<h2 style="text-align:center">Armor</h2>

<div class="row">
  <div class="column">
    <img src="img_nature.jpg" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="img_snow.jpg" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="img_mountains.jpg" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="img_lights.jpg" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
  </div>
</div>

<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img src="img_nature_wide.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 4</div>
      <img src="img_snow_wide.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img src="img_mountains_wide.jpg" style="width:100%">
    </div>
    
    <div class="mySlides">
      <div class="numbertext">4 / 4</div>
      <img src="img_lights_wide.jpg" style="width:100%">
    </div>
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="caption-container">
      <p id="caption"></p>
    </div>


    <div class="column">
      <img class="demo cursor" src="./images/thumbs/thumbnail_1.jpg" style="width:100%" onclick="currentSlide(1)" alt="Armor 1">
    </div>
    <div class="column">
      <img class="demo cursor" src="./images/thumbs/thumbnail_2.jpg" style="width:100%" onclick="currentSlide(2)" alt="Armor 2">
    </div>
    <div class="column">
      <img class="demo cursor" src="./images/thumbs/thumbnail_3.jpg"style="width:100%" onclick="currentSlide(3)" alt="Amror 3">
    </div>
    <div class="column">
      <img class="demo cursor" src="./images/thumbs/thumbnail_4.jpg" style="width:100%" onclick="currentSlide(4)" alt="Armor 4">
    </div>
    <div class="column">
      <img class="demo cursor" src="./images/thumbs/thumbnail_5.jpg" style="width:100%" onclick="currentSlide(5)" alt="Armor 5">
    </div>	
  </div>
</div>

<script>
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>

	<p><a href = "#Home" id = link">Home</a></p>
	<p><a href = "#Armors" id >Armors</a></p>
	<p><a href = "#Sign-In">Sign-In</a></p>
	<div id = "Home">
		<div>
		<ul>
			<p>Welcome to Armor Wars, the first and last word in body armor history.</p>
			<p>Here you will find details and images of every kind of armor created to protect warriors past and present, alongside prototypes that may one day guard the lives of soliders in the future.</p>
		</ul>
				</div>
			</div>
		<section>
			<div id = "Armors">
				<h1><em><center>A small selection of the armors available to view</em></h1>
			<div>
				<div>
					<img src = "./images/thumbs/thumbnail_1.jpg"
						width = "300"
						height = "500" />
					<img src = "./images/thumbs/thumbnail_2.jpg"
						width = "300"
						height = "500" />	
					<img src = "./images/thumbs/thumbnail_3.jpg"
						width = "300"
						height = "500" />
					<img src = "./images/thumbs/thumbnail_4.jpg"
						width = "300"
						height = "500" />
					<img src = "./images/thumbs/thumbnail_5.jpg"
						width = "400"
						height = "500" />
				</div>
			</div>
		</section>
		<section>
			<div>
				<h1><em><center>How to forge medieval armor</em></h1>
			<div>
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/NsNPNxq7re0?si=lWw059rxGKGXilHb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
			</div>	
		</section>
		<section>
			<div id ="Sign-In">
				<div>
				<footer>
				<form action = "" method = "get">
				<p>Are you a member?  Sign in now!</p>
				First name: <input type = "text" name = "First Name"><br>
				Last name: <input type = "text" name = "Last Name"><br>
				Email: <input type = "email" name = "Email"><br>
				Password: <input type = "password" name = "Password"><br>
				<input type = "submit" value = "Submit">
				</form>
				</footer>
				</div>
			</div>	
</body>
</html>
