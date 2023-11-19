import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2 className="my-auto">
          Welcome, <b>{session?.user?.name.split(" ")[0]}!</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg">
          <Image
            src={session?.user?.image}
            alt="Profile image"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="px-2 m-auto">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
