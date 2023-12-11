import Layout from "@/components/Layout"
import { useRouter } from "next/router"


const DeleteProduct = () => {
    const router = useRouter()
    function goBack(){
        router.push("/products")
    }
  return (
    <Layout>
    <div>DeleteProduct</div>
    </Layout>
  )
}

export default DeleteProduct