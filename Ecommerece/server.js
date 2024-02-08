    const express = require('express'); 
    require('dotenv').config()
    var cors = require('cors')
    var bodyParser = require('body-parser')
    const mongoose = require("mongoose");
    const ProductRoutes = require("./src/Routes/Product.routes");
    const authRoutes = require('./src/Routes/auth.routes');
    const movieRoutes = require('./src/Routes/movie.routes');
    const { PORT } = require('./configs/server.config');
const theaterRoutes = require('./src/Routes/theater.routes');
const bookingRoutes = require('./src/Routes/booking.routes');
const paymentRoutes = require('./src/Routes/payment.routes');
const { DB_URL } = require('./configs/db.config');

    mongoose.connect(DB_URL)
    
    .then(() =>{
        console.log("Successfully connected to Database");
    }).catch((err)=>{
        console.log("Coudn't to connect to the database", err);
    }) 

    const app = express();
    app.use(bodyParser.json());

   app.use(cors())



    ProductRoutes(app);  // calling the app function that available in src file 
    authRoutes(app);
    movieRoutes(app);
    theaterRoutes(app);
    bookingRoutes(app);
    paymentRoutes(app);
    

        app.listen(PORT, () => {
            console.log(`Your application is running on port ${PORT}`);
        }); 



            // For practice

            // app.get("/", (req, res) => {

            //     res.send("We are leaning NodeJs Today")
            // });

            // app.get("/products", (req,res) =>{
            //     return res.status(200).send(productsData)
            // }); 

            // app.get("/products/:id", (req,res) =>{
            //     const productId = req.params.id;

            //     const product = productsData.find((product) => product.id == productId);

            //     if(!product){
            //         return res.status(404).send({messsage: "product Not found "});
            //     }
            //     return res.status(200).send(product);
            // });

            // app.post("/products",(req,res) => {  // add a new product 

            //     const newProduct = req.body;

            //     newProduct.id = Math.floor(Math.random()*100).toString();
            //     productsData.push(newProduct);

            //     return res.status(201).send({message:"Product Cerated Succesfully"});
            // })

            // app.put("/products/:id",(req,res) =>{  // this for update
            //     const productId = req.params.id;

            //     const product = productsData.find((product) => product.id == productId);

            //     if(!product){
            //         return res.status(404).send({messsage: "product Not found "});
            //     }
            //     const updateValue = req.body;

            //     Object.keys(updateValue).forEach((key) =>{
            //         product[key] = updateValue[key]
            //     })
            //     return res.status(200).send(product)

            // } )

            // app.delete("/products/:id",(req,res) => {
            //     const productId = req.params.id;

            //     const product = productsData.find((product) => product.id == productId);

            //     if(!product){
            //         return res.status(404).send({messsage: "product Not found "});
            //     }

            //     productsData = productsData.filter((product) => {
            //         return product.id != productId;
            //     })

            //     return res.status(200).send({message:`product with id:${productId} deleted successfully`});
            // })

            // mongodb+srv://subhajitchoudhury34:qwerty123@moviebookingapp.jwm2i4s.mongodb.net/?retryWrites=true&w=majority