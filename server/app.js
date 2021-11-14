const express = require('express');
const app = express();


app.use('/companies',require("./routers/companies"))

app.listen(5000, function() {
    console.log('listening on 5000')
  })