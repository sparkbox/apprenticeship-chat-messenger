import '../css/index.css';

const helloWorld = () => console.log('Hello!');

helloWorld();

const ws = new WebSocket('ws://localhost:3000/');

ws.onmessage = (event) =>{
  console.log(`Received message: ${event.data}`);
};

document.body.addEventListener('click', () => {
  ws.send("Well hello there!");
});
