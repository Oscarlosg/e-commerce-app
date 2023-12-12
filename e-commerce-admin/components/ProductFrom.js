import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductFrom = ({
  _id,
  title: editProductTitle,
  description: editProductDescription,
  price: editProductPrice,
  images,
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
  function UploadImages(e){
    e.preventDefault()
    const images = e.target?.files;
    if(images.length > 0){
      const files = new FormData();
      for (const file of files){
        //taking a break here
      }
    }
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
      <label>Images</label>
      <div className="">
        <label className="text-sm gap-1 cursor-pointer text-gray-600 bg-gray-200 rounded-lg w-28 h-28 justify-center text-center flex items-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          Upload
          <input type="file" className="hidden" onChange={UploadImages}/>
          {/*I really like this style of adding an imput button without the default box showing up... super cool!!!*/}
        </label>
        {!images?.length ? (
          <div className="text-red-700 flex pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            Please submit at least one product image
          </div>
        ) : null}
      </div>
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
