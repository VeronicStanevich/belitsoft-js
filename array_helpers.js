Array.prototype.square = function (){
    return this.map(i => Math.pow(i,2));
}
Array.prototype.cube = function (){
    return this.map(i => Math.pow(i,3));
}
Array.prototype.sum = function (){
    if(this.length===0){
        return NaN;
    }else{
        var sum = this.reduce( function(total, amount){
            return total + amount
        });
        return sum;
    }
}
Array.prototype.average = function (){
    if(this.length===0){
        return NaN;
    }else{
        var sum = this.reduce( function(total, amount){
            return total + amount
        });
        return sum/(this.length);
    }
}
Array.prototype.even = function (){
    if(this.length===0){
        return NaN;
    }else{
        return this.filter(i=>i%2===0);
    }
}
Array.prototype.odd = function (){
    if(this.length===0){
        return NaN;
    }else{
        return this.filter(i=>i%2!==0);
    }
}