import Layout from "@/components/Layout";
import ProductFrom from "@/components/ProductFrom";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const NewProduct = () => {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [price, SetPrice] = useState();
  const router = useRouter();
  async function createProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
    router.push("/products");
  }
  return (
    <Layout>
      <h1>New Product</h1>
      <ProductFrom />
    </Layout>
  );
};

export default NewProduct;
