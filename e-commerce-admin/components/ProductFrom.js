import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductFrom = ({
  _id,
  title: editProductTitle,
  description: editProductDescription,
  price: editProductPrice,
}) => {
  const [goHome, setGoHome] = useState(false);
  const [title, SetTitle] = useState(editProductTitle || "");
  const [description, SetDescription] = useState(editProductDescription || "");
  const [price, SetPrice] = useState(editProductPrice || "");
  const router = useRouter();
  async function submitHandler(e) {
    e.preventDefault();
    const data = { title, description, price };
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoHome(true);
  }
  if (goHome) {
    router.push("/products");
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Product Name</label>
      <input
        required
        type="text"
        placeholder="product name"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        required
        placeholder="description"
        className="pb-[4em]"
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      />
      <label>Price (USD only)</label>
      <input
        required
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => SetPrice(e.target.value)}
      />
      <button className="btn-primary" type="submit">
        Save
      </button>
    </form>
  );
};

export default ProductFrom;
