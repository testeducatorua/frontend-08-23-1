// function printId(id: number | string) {
//     console.log("Your ID: " + id);
// }
// printId(100)
// printId('100')
// printId(true)
function printCoords(pt) {
    console.log('x: ' + pt.x);
    console.log('y: ' + pt.y);
}
printCoords({ x: 200, y: 120 });
function printCoords3d(pt) {
    console.log('x: ' + pt.x);
    console.log('y: ' + pt.y);
    console.log('z: ' + pt.z);
}
printCoords3d({ x: 200, y: 120, z: 0 });
