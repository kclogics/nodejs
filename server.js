const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
class Node1 extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');



const node1 = new Node1();

 node1.on('event', ()=> {
     console.log('first node from server')
 });
 node1.emit('event');