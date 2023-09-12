// Generics

// any
// function identity(arg:any): any {
//     return arg;
// }
// let output = identity(34)
// let output1 = identity('test')

// generics
// function identity<Type>(arg: Type): Type {
//     return arg;
// }
// let output1 = identity<number>(34)
// let output2 = identity<string>('Test mess')
// let output3 = identity<boolean>(10 > 12)

function createPair<T, U>(key:T, value: U): [T, U] {
    return [key, value]
}
const pair1 = createPair<string, number>('age', 30)
const pair2 = createPair<string, string>('name', 'Orest')
const pair3 = createPair<number, boolean>(2332, true)
const pair4 = createPair('test', 'message')
