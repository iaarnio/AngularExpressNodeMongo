'use strict';

var Book = require('./book.model.js');

exports.listBooks = function (req, res) {
  Book.find(function (err, books) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, books);
  });
};

exports.createBook = function (req, res) {
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