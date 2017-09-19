function show() {
    console.log(this);
}
show();
new show(); //this指向此新物件