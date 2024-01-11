const router = require("express").Router();
const bookModel = require("../models/booksModel");

// POST REQUEST
router.post("/add",async (req,res)=>{
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(()=>{
         res.status(200).json({message:"BOOK ADDED SUCCESSFULLY"});
        });
    } catch (error) {
        console.log(error);
    }
});
// GET ALL BOOKS
router.get('/getBooks',async (req,res)=>{
    let books;
    try {
       books = await bookModel.find();
       res.status(200).json({books});
    } catch (error) {
        console.log(error);
    }
});

//GET ALL BOOKS WITH ID 
router.get("/getBooks/:id",async (req, res)=>{
    let book;
    const id = req.params.id;
    try {
    book = await bookModel.findById(id);
     res.status(200).json({book});
    } catch (error) {
        console.log(error);
    }
});

// //UPDATE BOOKS BY ID
router.put("/updateBook/:id",async(req,res)=>{
    const id = req.params.id;
    const{bookname,description,author,image,price} = req.body;
    let book;
    try {
      book =  await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price});
            await book.save().then(()=>res.json({message:"DATA UPDATED"}));
    } catch (error) {
        console.log(error);
    }
});
//DELETE BOOK BY ID 
router.delete("/deleteBook/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id)
        .then(()=>res.status(201).json({message:"DELETED SUCCESSFULLY"}));
    } catch (error) {
        console.log(error);
    }
});
 module.exports = router;
