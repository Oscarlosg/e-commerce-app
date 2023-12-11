import Layout from "@/components/Layout";
import ProductFrom from "@/components/ProductFrom";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const [productData, setProductData] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=${id}`).then((res) => {
      setProductData(res.data);
    });
  }, [id]);
  return (
    <Layout>
      <h1>Edit Product</h1>
    {productData ? <ProductFrom {...productData} /> : "loading..."}
    </Layout>
  );
};

export default EditProduct;
