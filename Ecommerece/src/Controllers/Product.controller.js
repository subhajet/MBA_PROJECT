const Product = require("../Models/Product.model");

exports.createProduct = async (req,res) =>{
    const {price,name,description,category} = req.body

    if(!price || price<0){
        return res.status(400).send({message: "Price can't be NULL or negative in nature"});
    }
    if(!name){
        return res.status(400).send({message:"Name of the product can't be empty"})
    }

    const productData = {
        price,
        name,
        description,
        category
    }
    const newProduct = new Product(productData);
    
    try{
        const response = await newProduct.save();
        return res.status(201).send(response);

    }catch(err){

        return res.status(500).send({message:"Internal server error"});
    }

}


exports.getProducts = async(req,res)=>{

    const {maxPrice, category} = req.query;

    const query={};

    if(category){
        query.category=category;
    }

    if(maxPrice){

        query.price = {
            $lte:maxPrice
        }
    }

    console.log(req.query);
    try{
        const products = await Product.find(query);
        return res.status(200).send(products);
    }catch(err){

        res.status(500).send({message:"Internal Server Error"});
    }
}

exports.getProduct = async(req,res)=>{

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(400).send({message:"Invalid object id is passed"});
    }
    try{
        const product = await Product.findById(id);

        if(!product){
            return res.status(404).send({message:"Product not found"});
        }
        return res.status(200).send(product);
    }catch(err){

        res.status(500).send({message:"Internal Server Error 1"});
    }
}

exports.UpdateProduct = async(req,res)=>{

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(400).send({message:"Invalid object id is passed"});
    }

    const updatedDetails = req.body

    try{
        const response = await Product.findByIdAndUpdate(id, updatedDetails,{
            new:true
        });

        if(!response){
            return res.status(404).send({message:"Product not found"});
        }
        return res.status(200).send(response)

        return res.status

    }catch(err){

        res.status(500).send({message:"Internal Server Error 1"});
    }
}

exports.deleteProduct = async(req,res) =>{
            
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){

        return res.status(400).send({message:"Invalid object id is passed"});
    }

    try {
        const response = await Product.findByIdAndDelete(id);

        if(!response){
            
            return res.status(400).send({message:"Product not found"});
        }

        return res.status(200).send({message:"Message Deleted Successfully"});

    }catch(err){

        res.status(500).send({message:"Internal Server Error 1"});
    }

}