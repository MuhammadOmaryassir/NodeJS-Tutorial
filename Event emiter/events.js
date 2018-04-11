const events = require('events')
class Myevent extends events.EventEmitter {}
let event = new Myevent()

event.on('message', function (msg) {
  console.log('a message was recived')
  console.log('the message is : ' + msg)
})

event.emit('message', 'hello eveybody')
