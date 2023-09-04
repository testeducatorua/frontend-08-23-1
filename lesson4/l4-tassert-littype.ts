// Type Assertions
// document.getElementById('message')
// const myCanvas = document.getElementById('my_canvas') as HTMLCanvasElement
// const x = 'message' as number

// let someValue: any = 'hello'
// let strLength: number = (someValue as string).length 
// console.log(strLength);

// let someValue: any = 5
// let strLength: number = (someValue as string).length 
// console.log(strLength);

// const inputElement = document.getElementById('username')
// console.log(inputElement);
// console.dir(inputElement);
// console.log(typeof inputElement);
// if (inputElement && (inputElement as HTMLInputElement).value !== '') {
//     const userName = (inputElement as HTMLInputElement).value;
//     console.log(userName);

// } else {
//     console.log('element is absent or empty str');

// }

// Literal Types

// let changingSting: string = 'Hello'
// changingSting = 'test'

// const constantString = 'Hello' // OK
// constantString = 'test'

// let x: 'hello' = 'hello'
// x = 'test'
// x = 'hello'

// function printText(s:string, alignment: 'left'|'right'|'center') {
//     //...
// }
// printText('some string', 'center')
// printText('some string', 'left')
// printText('some string', 'right')
// printText('some string', 'ANOTHER')

// type ButtonType = 'submit' | 'reset' | 'button'

// function createButton(type:ButtonType) {
//     const button = document.createElement('button')
//     button.type = type
//     button.textContent = 'Push'
//     document.body.appendChild(button)
// }
// createButton('button')
// createButton('reset')
// createButton('submit')
// createButton('delete')

// function compare(a: number, b: number): -1 | 0 | 1 {
//     return a === b ? 0 : a > b ? 1 : -1
// }

// interface Options {
//     width: number;
// }
// function config(x: Options | 'auto') {
//     if (typeof x === 'string' && x === 'auto') {
//         console.log('auto config');

//     } else {
//         console.log(`width ${x.width}`);

//     }
// }
// config({ width: 100 })
// config('auto')

// type booleanAlias = true | false

// let isDone: booleanAlias = false
// isDone = true
// isDone = 'true'

// isDone = 23