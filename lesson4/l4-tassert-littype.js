// Type Assertions
// document.getElementById('message')
// const myCanvas = document.getElementById('my_canvas') as HTMLCanvasElement
// const x = 'message' as number
function config(x) {
    if (typeof x === 'string' && x === 'auto') {
        console.log('auto config');
    }
    else {
        console.log(`widtht ${x.width}`);
    }
}
config({ width: 100 });
config('auto');
