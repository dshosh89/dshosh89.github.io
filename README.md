# dshosh89.github.io
homework_5 Comments 
Homepage:
<!DOCTYPE html>
<html>
<head>
  <title>BunBun Bakery</title>  
  <link rel = "stylesheet" href="/style.css">  /* to link to CSS */
</head> 
<body>
  <header>
    <div class="topnav">  /* the part on the top right of every page */

      <a class="active"></a>
      <a href="#Login">LOG IN</a>
      <a href="#cart">CART</a>
      <a href="#checkout">CHECKOUT</a>
    </div>
  </header>
  <div class="logos">  /* used to align the logo image in the middle */
    <a href="default.asp">
    <img id="logo" src= "https://cdn.glitch.com/824c78ca-4ca8-46f7-900b-708ca8c7e72f%2FLogo.png?v=1569614691448">
  </a>
  </div>
  <div class="bottomnav">  /* below the logo image. all have links */
    <a class="active"></a> 
    <a href="#about">OUR STORY</a>
    <a href="product.html">MENU</a>
    <a href="#location">LOCATION</a>
    <a href="#contact">CONTACT</a>
    <a href="#order">ORDER ONLINE</a>
  </div>
  <div class="page-background"></div>  /* large image */
</body>
</html>

Product:
<!DOCTYPE html>
<html>
<head>
  <title>BunBun Bakery</title>  
  <link href="https://fonts.googleapis.com/css?family=Arbutus+Slab&display=swap" rel="stylesheet">
    <link rel = "stylesheet" href="/style.css">

</head> 
<body>
  <header>
    <div class="topnav">

      <a class="active"></a>
      <a href="#Login">LOG IN</a>
      <a href="#cart">CART</a>
      <a href="#checkout">CHECKOUT</a>
    </div>
  </header>
  <div class ="logo2" /* to align logo image without changing it on homepage */
    <a href="index.html">
    <img id="logo" src= "https://cdn.glitch.com/824c78ca-4ca8-46f7-900b-708ca8c7e72f%2FLogo.png?v=1569614691448">
  </a>
  </div>
  <div class="bottomnav">  /* same bottom navigation bar with links */
    <a class="active"></a> 
    <a href="#about">OUR STORY</a>
    <a href="#menu">MENU</a>
    <a href="#location">LOCATION</a>
    <a href="#contact">CONTACT</a>
    <a href="#order">ORDER ONLINE</a>
  </div>
  <div class="row">  /* for the grid layout of the 6 images */
    <div class="row-item">
      <p>
        Original
      </p>
      <div class = "details">  /* clickable link as an overlay on the image */
      <a href="#details" class= "space">View Details</a>
    </div>
    </div>
        <div class="row-item">  
          <p>
            Blackberry
          </p>
      <div class = "details">
      <a href="#details" class= "space">View Details</a>
    </div>
    </div>
        <div class="row-item"> 
          <p>
            Pumpkin Spice
          </p>
      <div class = "details">
      <a href="#details" class= "space">View Details</a>
    </div>
    </div>
  </div>
    <div class="row">
    <div class="row-item">  
      <p>
        Gluten Free
      </p>
      <div class = "details">
      <a href="#details" class= "space">View Details</a>
    </div>
    </div>
        <div class="row-item"> 
          <p>
            Walnut
          </p>
      <div class = "details">
      <a href="details.html" class= "space">View Details</a>
    </div>
    </div>
        <div class="row-item">  
          <p>
            Caramel Pecan
          </p>
      <div class = "details">
      <a href="#details" class= "space">View Details</a>
    </div>
    </div>
  </div>
</body>
</html>

Details: 
<!DOCTYPE html>
<html>
  <head>
    <title>BunBun Bakery</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <header>
      <div class="topnav">
        <a class="active"></a>
        <a href="#Login">LOG IN</a>
        <a href="#cart">CART</a>
        <a href="#checkout">CHECKOUT</a>
      </div>
    </header>
    <div class="logo3">
    <a href="index.html">
      <img
        id="logo"
        src="https://cdn.glitch.com/824c78ca-4ca8-46f7-900b-708ca8c7e72f%2FLogo.png?v=1569614691448"
      />
    </a>
    </div>
    <div class="bottomnav2">
      <a class="active"></a>
      <a href="#about">OUR STORY</a>
      <a href="#menu">MENU</a>
      <a href="#location">LOCATION</a>
      <a href="#contact">CONTACT</a>
      <a href="#order">ORDER ONLINE</a> /* everything same as previous pages until this point */
    </div>
    <div class="back">  /* for the back link on the left */
      <a class="active"></a>
      <a href="product.html" id="go_back">Back to Buns</a>
    </div>
    <div class="container"> /* beginning of container with two flexboxes */
      <div class="flex-box1"> /* flexbox on the left */
        <img
          src="https://cdn.glitch.com/824c78ca-4ca8-46f7-900b-708ca8c7e72f%2Fnotext.png?v=1569713022090"
          id="detailImage"
          width="643.5"
          height="421.5"
        />
        <div
          style="width:645px;height:100px;border:1px solid #000;"
          class="detailBox"
        >
          <p>DESCRIPTION</p>  /* box below image on the left */
          <p>
            One of our year-round favorites, the walnut bun does not disappoint. Freshly crushed walnuts bring out the subtle flavors of cinnamon. These buns can be delivered.
          </p>
        </div>
      </div>
      <div class="flex-box2"> /* flexbox on the right */
        <p class="WalnutBun">WALNUT BUN</p>
        <br />
        <p class="price">$3.50 Each</p>
        <p class="QuantityButton"> /* dropdown 1 */
          Quantity:
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="5">4</option>
          </select>
        </p>
        <p class="glaze"> /* dropdown 2 */
          Add Glaze:
          <select>
            <option value="sugar">Sugar-milk</option>
            <option value="vanilla">Vanilla-milk</option>
            <option value="chocolate">Double-chocolate</option>
            <option value="nonw">None</option>
          </select>
        </p>
        <br />
        <br />
        <br />
        <button class="button" type="button">ADD TO CART</button> /* bottom button */
      </div>
    </div>
  </body>
</html>

CSS:

body { /* settings for everything in the body */
  margin: 0;
  padding: 0;
  min-height: 1024px;
  font-family: "Arbutus Slab", serif;
}

.topnav { /*  aligning everything in top navigation to the right, smaller font size */
  float: right;
  color: #464646;
  text-align: right;
  padding: 20px 25px;
  text-decoration: none;
  font-size: 12px;
}

.logos {  /* homepage logo centered */
  margin-right: 200px;
}
.row {  /* product page row alignment */
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  height: auto;
}

.details { 
  width: 33.33%;
  text-align: center;
}

.space {
  align-self: flex-end;
  width: 100%;
}
a {
  color: #464646;
}

.topnav a {
  padding: 0px 10px;
}
.topnav a.active {
  color: #464646;
}
#logo {  /* logo formatting, all pages */
  display: block;
  margin-left: 30%;
  margin-right: 30%;
  padding-top: 50px;
  /*width: 75%;*/
}

#go_back {  /* to move the link left */
  margin-left: 50px;
}
#detailImage {
  margin-left: 20px;
}

.detailBox {
  margin-left: 50px;
  font-size: 15px;
  float: left;
}

.bottomnav {
  margin-right: 100px;
  float: center;
  color: #464646;
  text-align: center;
  padding: 20px 25px;
  text-decoration: none;
  font-size: 17px;
  font-family: "Arbutus Slab", serif;
}

.Quantity {
  display: inLine-block;
}
.Button1 {
  display: inLine-block;
}

.WalnutBun {
  margin: 0 auto;
  font-size: 20px;
  color: #464646;
}
.bottomnav a {
  padding: 0px 30px;
}
img {
  display: block;
  margin-left: 20px;
  margin-right: auto;
  padding: 50px 30px;
}

a:hover {  /* for all pages, to create underline when nav items selected */
  text-decoration: underline;
}

a {
  text-decoration: none;
}

.page-background {  /* homepage to style large image */
  background: url("https://cdn.glitch.com/824c78ca-4ca8-46f7-900b-708ca8c7e72f%2F33438870383_5c75d89e43_o.png?v=1569618838939");
  background-size: contain;
  background-repeat: no-repeat;
  height: 646px;
}

.row-item {
  background: url("https://cdn.glitch.com/824c78ca-4ca8-46f7-900b-708ca8c7e72f%2Fnotext.png?v=1569713022090");
  background-size: cover;
  background-repeat: no-repeat;
  width: 32%;
  margin: 1.66% auto;
  height: auto;
  background-position: center;
}

.row-item p {
  height: 30px;
  text-align: center;
  margin: 10px auto;
  font-size: 24px;
  color: #464646;
}

.details {
  height: 250px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
}
.back {
  color: #464646;
  padding: 20px 25px;
  text-decoration: none;
  font-size: 17px;
  font-family: "Arbutus Slab", serif;
  margin: 10px auto;
}

.boxed {
  border: 5px;
  color: #464646;
}

.container {  /* container and all flexboxes need to have flex display */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 94%;
  text-align: center;
  margin: auto;
}

.flex-box1 {
  display: flex;
  flex-direction: column;
  float: left;
}

.flex-box2 {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-content: center;
}

.button {  /* details page cart button */
  margin-left: 200px;
  width: 200px;
  height: 50px;
  background-color: #464646;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-family: "Arbutus Slab", serif;
  font-size: 18px;
}

.WalnutBun { /* remove */
}

.price {
  text-align: center;
  paddding: 5px 10px;
}

.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.babyflex-box2 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo3{  /* might remove if the logo position will be consistent */
  margin-right: 200px;
}
.logo2{
  margin-right: 200px;
}
.bottomnav2{
  float: center;
  color: #464646;
  text-align: center;
  padding: 20px 25px;
  text-decoration: none;
  font-size: 17px;
  font-family: "Arbutus Slab", serif;
  margin-right: 100px;
}
.bottomnav2 a {
  padding: 0px 30px;


