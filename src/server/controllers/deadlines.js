const express = require('express');
const router = express.Router();

const connection = require('../airtable');
const mapColumns = require('../utils/mapColumns').mapColumns;

router.get('/', (req, res) => {
  connection('Deadlines').select().all().then((deadlines) => {
    res.json(deadlines.map(deadline => deadline.fields));
  });
});

module.exports = router;