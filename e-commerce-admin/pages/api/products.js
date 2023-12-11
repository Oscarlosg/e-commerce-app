// ROUTE - API/PRODUCTS
import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/Product";

 async function handle (req, res) {
    const {method} = req;
    mongooseConnect();
    if(method === "POST"){
        const {title, description, price} = req.body
        const productRes = await Product.create({
            title,
            description,
            price
        })
        res.json(productRes)
    }
    if(method === "GET"){
        res.json(await Product.find())
    }
}

export default handle