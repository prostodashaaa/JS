let hasLicence = true;
let age = 22;
let isDrunk = false;

let canDrive = age >= 18 && hasLicence && !isDrunk;

console.log(`Может водить?
${canDrive ? 'Да' : 'Нет'}`);