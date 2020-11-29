Object.prototype.hash = function(string) {
    const props = string.split(".").reverse();
    let self = this;

    while(props.length) {
        const prop = props.pop();
        if(self) {
            self = self[prop];
        }
    }

    return self;
}