import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DeleteProduct = () => {
  const router = useRouter();
  const [product, setProduct] = useState();
  const { id } = router.query;
  function goBack() {
    router.push("/products");
  }
  async function deleteHandler() {
    await axios.delete(`/api/products?id=${id}`);
    goBack();
  }
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <Layout>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="mb-0">
          <strong>&quot;{product ? product.title : "loading..."}&quot;</strong>{" "}
          will be permanetly deleted
        </h1>
        <span className="text-blue-900 mb-5 text-x">
          Do you still wish to proceed?
        </span>
        <div className="flex gap-2">
          <button onClick={deleteHandler} className="btn-red">
            Yes
          </button>
          <button onClick={goBack} className="btn-default">
            No
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteProduct;
