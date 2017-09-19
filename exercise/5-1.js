function show(a, b){
    console.log(this, a, b);
};
var show1 = show.bind({});
show(1, 5);
show1(1, 5);
show.call({}, 1, 5);