
// own function unit test without lib
// function expectation (val) {
//     return {
//         toBe: exp => {
//             if(exp === val) {
//                 console.log('succusses');
//             } else {
//                 console.error('error');
//             }
//         }
//     }
// }

// exp
const sum = (a, b) => a + b;
const nativeNull = () => null;

// expectation(sum(2,3)).toBe(10);

module.exports = {sum, nativeNull}