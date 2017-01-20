//imort the events module
var eventsInstance = require('events');

//Create an eventEmitter instance
var eventEmitter = new eventsInstance.EventEmitter();

//Create event handler
var connectToHandler = function connected() {
  console.log('Test connection successful')

  //daata_received_success event
  eventEmitter.emit('data_received_success');
};

//Bind the connection_success event with handler
eventEmitter.on('connection_success',connectToHandler);

//Bind the data_receives_success event with the anonymous function
eventEmitter.on('data_received_success', function(){
  console.log('confirmed that the data has been received successfully')
});

//deploy connection_success event
eventEmitter.emit('connection_success');

console.log("Program has successfully ended");
