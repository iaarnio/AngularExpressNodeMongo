'use strict';

var router = require('express').Router();
var api = require('./book.api.js');

router.get('/', api.listBooks);
router.post('/', api.createBook);
router.delete('/:id', api.deleteBook);

module.exports = router;