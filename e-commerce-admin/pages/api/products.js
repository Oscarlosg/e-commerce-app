import clientPromise from "@/lib/mongodb";
import { Product } from "@/modles/Product";
import mongoose from "mongoose";

 async function handle (req, res) {
    const {method} = req;
mongoose.Promise = clientPromise;
    if(method === "POST"){
        const {title, desciption, price} = req.body
        await Product.create({
            title,description,price
        })
    }

}

export default handle