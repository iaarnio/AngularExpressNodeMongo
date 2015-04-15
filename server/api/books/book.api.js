'use strict';

var Book = require('./book.model.js');

exports.getBooks = function (req, res) {
  console.log('debug: listBooks called');
  Book.find(function (err, books) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, books);
  });
};

exports.createBook = function (req, res) {
  console.log('debug: createBook called');
  var book = new Book();
  book.title = req.body.title;
  book.save(function (err, book) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, book);
  });
};

exports.deleteBook = function (req, res) {
  console.log('debug: deleteBook called');
  Book.findById(req.params.id, function (err, book) {
    if (err) {
      return handleError(res, err);
    }
    if (!book) {
      return res.send(404);
    }
    book.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}