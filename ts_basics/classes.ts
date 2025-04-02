class MyClass{
    private param1: string;

    constructor(param: string){
        this.param1 = param;
    }

    public myMethod(): string{
        return this.param1;
    }
}

let custom_class = new MyClass('Zelebobik');
console.log(custom_class.myMethod())


// Inheritance
class ChildClass extends MyClass {
    constructor(param: string) {
        super(param);
    }
}

let custom_extended_class = new ChildClass('Abobik');
console.log(custom_extended_class.myMethod())
