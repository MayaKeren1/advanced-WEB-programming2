import express from 'express';
import Shopping from '../models/buyingModel.js';
import data from '../data.js';

const buyingRouter = express.Router();

buyingRouter.post('/', async (req, res) => {//Post Request - On Buy Now - Get the information and send it to addShopping function in db.js 
    var bookname = req.body.brand;
    var quantity = req.body.quantity;
    var price = req.body.price;
    var name = req.body.name;
    var email = req.body.email;
    console.log(brand);
    const data = {
        products: [
            {
                // _id: '1',
                name: name,
                email: email,
                bookname: bookname,
                quantity: quantity,
                price: price,
            },
        ]
    }
    const addedBuying = await Shopping.insertMany(data.products);
    res.send({ addedBuying });
});
export default buyingRouter;