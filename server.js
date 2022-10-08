//import express
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware serves public folder
app.use(express.static('public'));

app.use(htmlRoutes);
app.use(apiRoutes);


app.listen(PORT, () =>
  console.log(`App listening at ${PORT} 🚀`)
);
