import SideNav from "@/components/SideNav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (session) {
    //logged in return
    return (
      <>
        <div className="bg-blue-900 min-h-screen flex">
          <SideNav />
          {
            <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2">
              {children}
            </div>
          }
        </div>
      </>
    );
  }

  return (
    //logged off return
    <div className="bg-blue-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button
          onClick={() => signIn("google")}
          className="bg-white p-2 rounded-lg px-4"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
