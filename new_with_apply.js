function construct(Class, ...args) {
    const obj = Object.create(Class.prototype);
    Class.apply(obj, [...args]);

    return obj;
}