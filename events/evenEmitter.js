eventsInstance = require('events');
var eventEmitter = new eventsInstance.EventEmitter();

// Creating listener Function #1
var ListenerFunction1 = function ListenerFunction1() {
  console.log('Execution completed for the Listener no. 1');
};

// Creating listener Function #2
var ListenerFunction2 = function ListenerFunction2() {
 console.log('Execution completed for the Listener no. 2');
};

// Binding the integration event with the ListenerFunction1 function..
eventEmitter.addListener('integration', ListenerFunction1);

// Binding the integration event with the ListenerFunction2 function
eventEmitter.on('integration', ListenerFunction2);

var eventListeners = require('events').EventEmitter.listenerCount
  (eventEmitter,'integration');
console.log(eventListeners + " Listener(s) are listening to the integration event");

// Fire the integration event
eventEmitter.emit('integration');

// Remove the binding for the Listener function 1
eventEmitter.removeListener('integration', ListenerFunction1);
console.log("Listener function 1 will stop listen now.");

// Fire the integration event
eventEmitter.emit('integration');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'integration');
console.log(eventListeners + " Listener(s) are listening to integration event");

console.log("Program execution completed successfully...");
