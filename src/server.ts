import 'dotenv/config';
import express from 'express';
import studentRoutes from './route/studentRoutes.ts';
import { pool } from './db.ts';
 
const app = express();
 
// Read JSON sent by Postman
app.use(express.json());
 
// Send student requests to the student router
app.use('/students', studentRoutes);
 
app.listen(4000, () => {
  console.log('Practice API: http://localhost:4000');
});