// basic func
function test_multiplication(number){
    return number * 2;
}
console.log(test_multiplication(2));
console.log('\n')

// arrow func
const myFunc = (param1, param2) => param1 + param2;
console.log(myFunc(2,2));
console.log('\n')

// anon func
const anonFunc = function(param1, param2) {
    return param1 + param2;
}
console.log(anonFunc(2,2))