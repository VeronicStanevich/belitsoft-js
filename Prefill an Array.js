function prefill(n, v) {
    if(!Number.isInteger(+n) || n<0 || typeof n === "boolean"){
        throw new TypeError(`${n} is invalid`);
    }

    var arr=[];

    for(i=0; i<+n; i++){
        arr[i]=v;
    }

    return arr;
}