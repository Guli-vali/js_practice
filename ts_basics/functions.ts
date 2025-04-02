

function myFunction(param1: number, param2: number) : number{
    return param1 * param2;
}
console.log(myFunction(2,2));


const myArrowFunction = (param1: number, param2: number): number => param1 * param2;
console.log(myArrowFunction(2,2));


const myArrowFunctionWithLogic = (param1: number, param2: number): number => {
    return param1 * param2
};
console.log(myArrowFunctionWithLogic(2,2));
