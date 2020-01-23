const router = require('express').Router();

router.get('/', ({ params }, res) => {
  res.status(200).send('ok');
});

module.exports = router;
