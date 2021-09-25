import app from './app';
import database from './database';
import vars from './vars';

const { port } = vars

database.connect();

app.listen(port);

console.log("listening on port", port);