const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
class Node1 extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');


//Emitter
const node1 = new Node1();
 node1.on('event', ()=> {
     console.log('first node from server')
 });
 node1.emit('event');


//Timer
 const node2 = () => {
     console.log("helo after 4 seconds")
 }
 setTimeout(node2, 4*1000);

