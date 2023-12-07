const { Schema, model } = require("mongoose");

const ProductlSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
});

export const Product = model("product", ProductlSchema)
