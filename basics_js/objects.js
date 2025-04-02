let person = {
    name: 'Mosh',
    age: 30,
    test_method: function(x) {
        return this.age  + x;
    }
};

// Dot notation
person.name = 'John';

// Bracket notation
person['name'] = 'Mary';

console.log(person.test_method(1));