function sayHello(name = 'World') {
    if (typeof (name) !== "string")
        throw new Error("The \"name\" is not a string");
    if (name.trim().length === 0)
        throw new Error("The \"name\" is blank");

    return 'Hello, ' + name + '!';
}

export { sayHello };

//DONE
