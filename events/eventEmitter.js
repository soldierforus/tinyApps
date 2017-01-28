const eventsInstance = require('events');
var eventEmitter = new eventsInstance.EventEmitter();

// Creating listener Function #1
function listenerFunction11() {
  console.log('Execution completed for the Listener no. 1');
};

// Creating listener Function #2
function listenerFunction12() {
 console.log('Execution completed for the Listener no. 2');
};

// Binding the integration event with the listenerFunction11 function..
eventEmitter.addListener('integration', listenerFunction11);

// Binding the integration event with the listenerFunction12 function
eventEmitter.on('integration', listenerFunction12);

var eventListeners = require('events').eventEmitter.listenerCount
  (eventEmitter,'integration');
console.log(eventListeners + " Listener(s) are listening to the integration event");

// Fire the integration event
eventEmitter.emit('integration');

// Remove the binding for the Listener function 1
eventEmitter.removeListener('integration', listenerFunction11);
console.log("Listener function 1 will stop listening now.");

// Fire the integration event
eventEmitter.emit('integration');

eventListeners = require('events').eventEmitter.listenerCount(eventEmitter,'integration');
console.log(eventListeners + " Listener(s) are listening to integration event");

console.log("Program execution completed successfully...");
