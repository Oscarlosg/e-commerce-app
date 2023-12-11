// ROUTE - API/PRODUCTS
import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/Product";

async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productRes = await Product.create({
      title,
      description,
      price,
    });
    res.json(productRes);
  }
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }
  if (method === "PUT") {
    const { _id, title, description, price } = req.body;
    await Product.updateOne({ _id }, { title, description, price });
    res.status(204).send();
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query.id });
      res.status(204).send();
    }
  }
}

export default handle;
