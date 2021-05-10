const express = require('express');
const cors = require('cors');
const axios = require('axios');
const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 8000;

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log('body', req.body);
  console.log('p', req.query);

  try {
    const response = await axios.get(req.query.url);
    console.log(response.data);
    res.send(response.data);
  } catch (err) {
    console.log(err.message);
  }
});

server.use(router);

server.listen(port, () => console.log('listening to' + port));
