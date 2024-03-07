import express from 'express';

const app = express();

app.use(express.static('static')); //creates static web application using express
app.listen(3000, () => {console.log('Server started on port 3000');});