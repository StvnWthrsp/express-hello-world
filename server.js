const express = require('express')
const app = express()
const port = 3000

// All files in the folder "public" will be accessible by the application
app.use(express.static('public'));

// Send index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
