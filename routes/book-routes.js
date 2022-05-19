const express = require("express");
const booksController = require("../controllers/book-controller.js");

const router = express.Router();
const Book = require("../model/Book")

router.get('/' , booksController.getAllBooks);
router.post('/',booksController.addBook);
router.get('/:bookId' , booksController.getById);
router.put('/:bookId' , booksController.updateBook);
router.delete('/:bookId' , booksController.deleteBook);
module.exports = router;