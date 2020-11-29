var Cat = (function () {
    const weigths = [];

    const constructor = function (name, weight) {
        if(!name || !weight)
            throw '';

        this._weight = weight;
        weigths.push(weight);

        Object.defineProperty(this, 'weight', {
            get() {
                return this._weight;
            },
            set(w) {
                this._weight = w;
                weigths.splice(weigths.indexOf(w),1,w);
            }
        });
    }

    constructor.averageWeight = function() {
        return weigths.reduce((acc, i) => {
            return acc+i;
        }, 0)/weigths.length;
    }

    return constructor;
}());