
var WordDictionary = function() {
    this.words = [];
};

WordDictionary.prototype.addWord = function(word) {
    this.words.push(word);
};

WordDictionary.prototype.search = function(word) {
    const index = this.words.findIndex(w => {
        const dotPlaces = [...word].map(l => l === '.');
        let matchWord = '';
        [...w].forEach((letter, index) => {
            if(dotPlaces[index]) {
                matchWord += '.';
            }
            matchWord += w[index];
        });

        return matchWord === word;
    });

    return index >= 0;
};