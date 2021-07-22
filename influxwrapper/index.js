const express = require('express')
const cors = require('cors')
const app = express();

 app.use(cors());

 app.get('/api/*', (req, res, next) => {
  const type = req.url.replace(/.+\/([a-z0-9]+)$/, "$1");
  console.log(type);
  const Influx = require('influxdb-nodejs');
  const client = new Influx('http://127.0.0.1:8086/statistics');

  let d = new Date();
  d = d - 3600 * 24 * 1000 * 7;
  d = new Date(d).toISOString();

  if (type === 'weather') {
//     client.query(`select * from weather where time > now() - 10d`)
     client.query('weather')
     .where('time', d, '>=')
     .then(data => res.json(data))
     .catch(err => next(err)); // error middleware to handle
  } else {
     client.query('sensors')
     .where('type', type)
     .where('time', d, '>=')
//     .set({ limit: 150, })
     .then(data => res.json(data))
     .catch(err => next(err)); // error middleware to handle
  }

 });

app.listen('3000', () => console.log('running on http://localhost:3000'))

