import express from 'express';
import { createCourse } from './routes';

const app = express();

const PORT = 3333;

app.get("/", createCourse);

app.listen(PORT, () =>  console.log(`Server is running on PORT http://localhost:${PORT}`));

