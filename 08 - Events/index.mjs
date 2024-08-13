// untuk implementasi Event Listener

import EventEmitter from "events";


const event = new EventEmitter()

// bikin listerner event nya
event.addListener("abdu", (listener) => {
  console.info("hello from event listener abdu" , listener)
})

// execute event
event.emit("abdu", "eunha")