const EventEmitter = require('events');
const emitter=new EventEmitter();
const logger=require('./logger');
logger.logger('hello world');
emitter.on('messageLogged',()=>{
    console.log('hi');
});
console.log('event executed successfully');