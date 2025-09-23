const express = require('express');
const app = express();
const port = 3000;

// Import routers
const booksRouter = require('./books');
const authorsRouter = require('./authors');

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API!');
});

// Mount routers
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

// Start the server
app.listen(port,()=>{
  console.log(`Server listening on port ${port}`);
});
