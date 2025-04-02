function identity<T>(arg: T): T {
    return arg;
}
const output = identity<string>("Hello");


function genericTest<T>(arg1: T): T {
    return arg1;
}
const gen = genericTest<string>("Rapping stuff");

console.log(gen);
