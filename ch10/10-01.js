var person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello My name is ${this.name}`);
    }
};

// object
console.log('person type : ', typeof person);
// {name: "Lee", sayHello: f}
console.log(person);