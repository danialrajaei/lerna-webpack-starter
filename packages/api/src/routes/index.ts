import express from 'express';
import { add } from '@lw/common';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(`${add(1, 2, 3, 4)}`);
});

export default router;