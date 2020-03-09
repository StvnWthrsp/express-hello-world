const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Page Title</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
