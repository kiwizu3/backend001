const express = require("express");

const router = express.Router();
const Model = require("../model/user");

module.exports = router;

//GET All
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//POST
router.post("/post", async (req, res) => {
  console.log("req", req.body);
  const data = new Model({
    name: req.body.name,
    companyName: req.body.companyName,
    termsCode: req.body.termsCode,
    creditLimit: req.body.creditLimit,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//UPDATE by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//DELETE by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        console.log("data", data);
        if (data === null )(
            res.send("The document is not found.")
        ) 
        else{
            res.send(`Document with ${data.name} has been deleted..`)
        }

    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
