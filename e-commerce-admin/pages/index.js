import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          className="bg-white p-2 rounded-lg px-4"
        >
          sign out
        </button>
        <div className=""> We are logged in through google! yahoo!!!!</div>
        Signed in as {session.user.name} <br />
      </>
    );
  } else {
    return (
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
}
