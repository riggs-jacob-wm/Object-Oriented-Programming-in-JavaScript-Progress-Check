// Made the Class, Food, and named its properties.
var Food = function(name, heritage, temp, servings) {
//Setting the values of the properties equal to whatever they are set as later.
  this.name = name;
  this.heritage = heritage;
  this.temp = temp;
  this.servings = servings;
};

//Making a method for Food so it displays the info given to it.
Food.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size='180' value=\'" +this.name + ": Heritage -- " +
        "" + this.heritage + ", Hot or Cold? " + this.temp + ", Servings -- " + this.servings + "\'><br><br>" );
};

//Defining a constructor for a subclass.
function Sushi(name, heritage, temp, servings, raw){
    //Calling the parent constructor to inherit.
    Food.call(this, name, heritage, temp, servings);
    //Setting the subclass specific property.
    this.raw = raw;
}

//Creating a subclass that inherits from the parent class.
Sushi.prototype = Object.create(Food.prototype);

//Set the constructor of the prototype to the subclass constructor
Sushi.prototype.constructor = Sushi;

//Override the parent displayFoodInfo method for Sushi
Sushi.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size='180' value=\'" + this.name +
        ": Heritage -- " + this.heritage + ", Hot or Cold? " + this.temp +
        ", Servings -- " + this.servings  + ", Does it Contain Raw Food? " +
        this.raw +  "\'><br><br>");
};

//Defining a constructor for a subclass.
function Pizza(name, heritage, temp, servings, toppings){
    //Calling the parent constructor to inherit.
    Food.call(this, name, heritage, temp, servings);
    //Setting the subclass specific property.
    this.toppings = toppings;
}

//Creating a subclass that inherits from the parent class.
Pizza.prototype = Object.create(Food.prototype);

//Set the constructor of the prototype to the subclass constructor
Pizza.prototype.constructor = Pizza;

//Override the parent displayFoodInfo method for Pizza
Pizza.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size='180' value=\'" + this.name +
        ": Heritage -- " + this.heritage + ", Hot or Cold? " + this.temp +
        ", Servings -- " + this.servings  + ", How many toppings does it have? " +
        this.toppings +  "\'><br><br>");
};

//Defining a constructor for a subclass.
function hotDog(name, heritage, temp, servings, bun){
    //Calling the parent constructor to inherit.
    Food.call(this, name, heritage, temp, servings);
    //Setting the subclass specific property.
    this.bun = bun;
}

//Creating a subclass that inherits from the parent class.
hotDog.prototype = Object.create(Food.prototype);

//Set the constructor of the prototype to the subclass constructor
hotDog.prototype.constructor = Pizza;

//Override the parent displayFoodInfo method for hotDog
hotDog.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size='180' value=\'" + this.name +
        ": Heritage -- " + this.heritage + ", Hot or Cold? " + this.temp +
        ", Servings -- " + this.servings  + ", What kind of buns does it have? " +
        this.bun +  "\'><br><br>");
};

//Defining a constructor for a subclass.
function Taco(name, heritage, temp, servings, sauce){
    //Calling the parent constructor to inherit.
    Food.call(this, name, heritage, temp, servings);
    //Setting the subclass specific property.
    this.sauce = sauce;
}

//Creating a subclass that inherits from the parent class.
Taco.prototype = Object.create(Food.prototype);

//Set the constructor of the prototype to the subclass constructor
Taco.prototype.constructor = Pizza;

//Override the parent displayFoodInfo method for Pizza
Taco.prototype.displayFoodInfo = function() {
    document.write("<input type='text' size='180' value=\'" + this.name +
        ": Heritage -- " + this.heritage + ", Hot or Cold? " + this.temp +
        ", Servings -- " + this.servings  + ", Does it have seasoning, sauce, or both? " +
        this.sauce +  "\'><br><br>");
};

//Making a function to set values to classes and subclasses.
function main(){
    //OLD WAY OF DISPLAYING OBJECTS
    //var food1 = new Food("Spaghetti", "Italy", "Hot", 4);
    //food1.displayFoodInfo();
    //
    //var sushi1 = new Sushi("California Roll", "Japan", "Cold", 8, false);
    //sushi1.displayFoodInfo();
    //
    //var pizza1 = new Pizza("Meat Lovers Pizza", "Italy", "Hot", 6, 7);
    //pizza1.displayFoodInfo();
    //
    //var hotDog1 = new hotDog("100% Beef Dog", "America", "Hot", 12, "Gourmet Sesame Seed Buns");
    //hotDog1.displayFoodInfo();
    //
    //var taco1 = new Taco("Beef Taco", "Mexico", "Hot", 10, "Both");
    //taco1.displayFoodInfo();

    //Making an array to hold our objects
    var foodArray = [];

    //Inserting the values into the objects.
    foodArray[0] = new Food("Spaghetti", "Italy", "Hot", 4);
    foodArray[1] = new Sushi("California Roll", "Japan", "Cold", 8, false);
    foodArray[2] = new Pizza("Meat Lovers Pizza", "Italy", "Hot", 6, 7);
    foodArray[3] = new hotDog("100% Beef Dog", "America", "Hot", 12, "Gourmet Sesame Seed Buns");
    foodArray[4] =  new Taco("Beef Taco", "Mexico", "Hot", 10, "Both");

    //For loop to display the objects.
    for (var i = 0; i<foodArray.length; i++ ) {
        foodArray[i].displayFoodInfo();
    }
}