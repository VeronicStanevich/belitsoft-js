class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
    // Do the same here as you did for Shark - define your constructor function and any other methods you need
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }  
}