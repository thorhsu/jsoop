//singleton

function Cat() {
    if(typeof Cat.instance === 'object'){
        // return Cat.instance; //
    }else{
        this.name = 'kitty';
        Cat.instance = this;
    }
    return Cat.instance;
}
var cat1 = new Cat();
var cat2 = new Cat();
console.log(cat1 === cat2);
