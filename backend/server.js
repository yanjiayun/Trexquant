const express = require('express');
const app = express();
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
const connectDB = require('./database');
const port = 8000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});