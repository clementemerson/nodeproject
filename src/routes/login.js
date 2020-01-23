const router = require('express').Router();

router.get('/', ({ params }, res) => {

  res.status(200).json({ message: 'Connected!' });
});

module.exports = router;
