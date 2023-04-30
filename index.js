import app from './src/app.js';
import {port} from './src/config.js';

app.listen(port);
console.log("server is in port",port)