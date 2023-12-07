import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

const NewProduct = () => {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [price, SetPrice] = useState();
  async function createProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
  }
  return (
    <Layout>
      <form action="" onSubmit={createProduct} className="">
        <h1>New Product</h1>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(e) => SetTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          className="pb-[4em]"
          value={description}
          onChange={(e) => SetDescription(e.target.value)}
        />
        <label>Price (USD only)</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => SetPrice(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default NewProduct;
