const EventEmitter = require('events');
const emitter=new EventEmitter();
emitter.on('addTwoNumbers', (firstNumber,secondNumber)=> {
    let result=firstNumber+secondNumber;
    console.log(`addition of ${firstNumber} and ${secondNumber} is ${result}`)
})

emitter.emit('addTwoNumbers',100,200);
