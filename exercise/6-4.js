var egg = (function(inputdata){
    var data = inputdata || [1, 2, 3, 4, 5];
    var index = 0;
    var length = data.length;
    return {
        next: function(){
            if(this.hasNext()){
                index++;
                return data[index];
            }else{
                return null;
            }

        }, 
        hasNext: function(){
            if(index < length -1)
               return true;
            else
               return false

        },
        rewind: function(){
            index = 0;
        }, 
        current: function(){
            return data[index];
        }
    }
})();
egg.rewind();
console.log(egg.current());
while(egg.hasNext()){
    console.log(egg.next())
}
// console.log(egg.current());
