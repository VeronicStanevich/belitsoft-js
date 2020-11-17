function isSantaClausable(obj) {
    if(obj.sayHoHoHo && obj.distributeGifts &&  obj.goDownTheChimney &&
        typeof obj.sayHoHoHo === 'function' &&
        typeof obj.distributeGifts === 'function' &&
        typeof obj.goDownTheChimney === 'function') {

        return true;
    }

    return false;
}