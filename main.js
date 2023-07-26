var validator = require('validator');

console.log(validator.isEmail('test@test.com')); // true
console.log(validator.isEmail('abcDE123')); // false