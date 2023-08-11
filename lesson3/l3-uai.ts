// function printId(id: number | string) {
//     console.log("Your ID: " + id);
// }
// printId(100)
// printId('100')
// printId(true)

// function printId(id: number | string) {
//     if(typeof id === 'string') {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }
// printId(34)
// printId('test')
// printId(true)

// function welcome(p: string[] | string) {
//     if(Array.isArray(p)) {
//         console.log('Hello, ' + p.join(' and '));
//     } else {
//         console.log('Welcome lone traveler ' + p);
//     } 

// }

// // welcome('Orest')
// welcome(['Orest', 'Olha', 'Max'])

// function getFirstThree(str: string | number[]) {
//     return str.slice(0, 3)
// }

// console.log(getFirstThree('Test message'));
// console.log(getFirstThree([1, 2, 3, 4, 5, 5]));

// type ID = string | number[]

// function getFirstThree(str: ID) {
//     return str.slice(0, 3)
// }

// console.log(getFirstThree('Test message'));
// console.log(getFirstThree([1, 2, 3, 4, 5, 5]))

// type Point = {
//     x: number,
//     y: number,
// }

// function printCoords(pt: Point) {
//     console.log('x: ' + pt.x);
//     console.log('y: ' + pt.y);
// }

// printCoords({x: 200, y: 120})

interface Point {
    x: number,
    y: number,
}

function printCoords(pt: Point) {
    console.log('x: ' + pt.x);
    console.log('y: ' + pt.y);
}

printCoords({x: 200, y: 120})

interface Point {
    z: number
}
function printCoords3d(pt: Point) {
    console.log('x: ' + pt.x);
    console.log('y: ' + pt.y);
    console.log('z: ' + pt.z);
}
printCoords({x: 200, y: 120, z: 0})