
let selectedColors = ['red', 'blue'];
selectedColors.push('cyan');
selectedColors.push('green');

console.log(selectedColors);
console.log(selectedColors.length);

selectedColors[4] = 1;

let newColors = selectedColors.map(item => item + '_test');
console.log(newColors);

