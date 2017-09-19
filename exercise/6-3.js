var Coffee = function () {
    this.color = 'brown';
}

var Milk = function () {
    this.color = 'white';
}

var OrangeJuice = function () {
    this.color = 'orange';
}

var DrinkShop = function(){
    this.sellDrink = function(type){
        var drink;
        if(typeof type !== "function"){
            console.log("not a class");
            type = OrangeJuice;
        }
        drink = new type();
        drink.showColor = function(){
            console.log(drink.color);
        }
        return drink;
    }
}

var drinkShop = new DrinkShop();
drinkShop.sellDrink(OrangeJuice).showColor();
drinkShop.sellDrink(Milk).showColor();
drinkShop.sellDrink().showColor();