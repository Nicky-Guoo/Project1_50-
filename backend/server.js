//npm i express cors axios jason-server
//npm i nodemon -D
const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
app.use(cors()); // 全局中间件
app.use(express.json());
app.use('/api', router);

app.listen(80, function () {
  console.log('Server is running on http://localhost:80');
});
