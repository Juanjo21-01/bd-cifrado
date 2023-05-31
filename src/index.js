import app from './app.js';
import './database/connection.js';

//
app.listen(app.get('port'));

console.log(`Server en el puerto: ${app.get('port')}`);
