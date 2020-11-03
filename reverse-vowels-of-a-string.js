/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const letters = s.split('');
    let volwes = ["a", "e", "i", "o", "u"];
    let volwesArr = [];

    for(let i=letters.length - 1; i>=0; i--){
        if(volwes.includes(letters[i].toLowerCase())) {
            volwesArr.push(letters[i]);
            letters[i] = '$';
        }
    }

    for(let i=0; i<letters.length; i++){
        if(letters[i]==='$'){
            letters[i] = volwesArr.splice(0, 1)[0];
        }
    }

    return letters.join('');
};