import { runServer } from './runServer';
console.log(`Server running on localhost:${process.env.NODE_EVN === 'test' ? 0 : 4000}`);
runServer();
