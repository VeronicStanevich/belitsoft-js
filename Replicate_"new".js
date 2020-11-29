function nouveau (Constructor, ...args) {
    const obj = Object.create(Constructor.prototype);
    const instance = Constructor.apply(obj, args);

    if(instance === Object(instance)){
        return instance;
    }else{
        return obj
    }
}