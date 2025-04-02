// 1. just FOR loop 
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++){
    console.log('Color is', colors[i]);
}
console.log('\n')

// 2. FOR...OF
const animals = ['lion', 'tiger', 'bear'];
for (const animal of animals){
    console.log('Amimal is', animal);
}
console.log('\n')

// 3. forEach
const days = ['one', 'two', 'three'];
days.forEach((val, ix) => {console.log(`Index ${ix}, Value ${val}`)})
console.log('\n')

// 4. FOR...IN
const areas = ['europe', 'asia', 'america']
for (const ix in areas) {
    console.log(`Ix: ${ix}, Val: ${areas[ix]}`);
}
console.log('\n')

// 5. MAP

const array = [1, 2, 3, 4, 5];
const newArray = array.map((val, ix) => {
    return val * 2;
})
console.log(newArray);
console.log('\n')


// 6. REDUCE
const array_to_reduce = [1, 2, 3, 4, 5];

const sum = array.reduce((accum, val) => {
    return accum + val;
}, 0)

console.log("Sum", sum);