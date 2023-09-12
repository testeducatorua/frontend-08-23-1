// Generics
// any
// function identity(arg:any): any {
//     return arg;
// }
// let output = identity(34)
// let output1 = identity('test')
// generics
function identity(arg) {
    return arg;
}
var output1 = identity(34);
var output2 = identity('Test mess');
var output3 = identity(10 > 12);
