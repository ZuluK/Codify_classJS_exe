// creates object literal notation

// var mellowMushroom = {
//   name: "Mellow Mushroom",
//   city: "Indianapolis",
//   style: "gourment pizza",
//   image: "img/pizza.png",
//   availableSeats: function(){
//     return this.name + "is in " + this.city
//   }
// }
//
// var Osha = {
//   name: "Osha",
//   city: "San Francisco",
//   style: "Thai",
//   image: "img/thai.png",
//   availableSeats: function(){
//     return this.name + "is in " + this.city
//   }
// }
//
// var brickHouseCafe = {
//   name: "Brick House Cafe",
//   city: "San Francisco",
//   style: "American",
//   image: "img/brick.png",
//   availableSeats: function(){
//     return this.name + "is in " + this.city
//   }
// }


//creates an arrary for objects
var restaurantArray = new Array

//constructor function
function Restaurant(name,location,style,image){
  this.name = name
  this.location = location
  this.style = style
  this.image = image
  this.availableSeats = function(){
    return this.name + "is in " + this.city
  }
  restaurantArray.push(this);
}

var mellowMushroom = new Restaurant("Mellow Mushroom", "Indianapolis", "Gourment Pizza", "img/pizza.png")
var Osha = new Restaurant("Osha","San Francisco", "Thai Food", "img/thai.png")
var brickHouseCafe = new Restaurant("Brick House Cafe", "San Francisco", "American Food","img/brick.png")


//adds Restaurant objects to new Array
// restaurantArray.push(mellowMushroom,Osha,brickHouseCafe)

//loop to loop through array
for(var i = 0; i < restaurantArray.length; i++){

//creates elements for each property
  var newDiv = document.createElement('div')
  var nameElement = document.createElement('p')
  var cityElement = document.createElement('h2')
  var styleElement = document.createElement('h3')
  var imageElement = document.createElement('img')



//creates text nodes for each piece of information
  var nameText = document.createTextNode('Try out my favorite place to eat: ' + restaurantArray[i].name)
  var cityText = document.createTextNode("You can find it in: " + restaurantArray[i].location)
  var styleText = document.createTextNode('They have great:' + restaurantArray[i].style + " food")

//updates source and alt of the image
imageElement.src = restaurantArray[i].image
imageElement.alt = restaurantArray[i].image

//appends text to elements
nameElement.appendChild(nameText)
cityElement.appendChild(cityText)
styleElement.appendChild(styleText)

//appends element with text to new div
newDiv.appendChild(nameElement)
newDiv.appendChild(cityElement)
newDiv.appendChild(styleElement)

//adds the container to HTML
document.getElementById("grubs").appendChild(newDiv)
}
