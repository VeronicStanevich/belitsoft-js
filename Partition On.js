// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
    let arrTruthyValues= items.filter(pred);
    let arrFalsyValues= items.filter(v => !pred(v));

    while(items.length > 0) {
        items.pop();
    }

    items.push(...arrFalsyValues, ...arrTruthyValues);

    return arrFalsyValues.length;
}