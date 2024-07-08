import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/app/lib/utils/supabase/server";
import { signout } from "../lib/actions";

export default async function NavBar() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error.message);
  }

  const user = data?.user;

  return (
    <nav className="px-5 py-3 flex items-center justify-between border-b">
      <Link href="/" className="">
        <Image src="/icon.svg" width={45} height={45} alt="Logo" />
      </Link>
      <div className="flex gap-5 items-center justify-center text-sm">
        {user ? (
          <form className="flex gap-5 items-center justify-center text-sm" action={signout}>
            <div className="text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300 border">
              {user.email}
            </div>
            <Link href="/dashboard">Dashboard</Link>
            <button className="">Sign out</button>
          </form>
        ) : (
          <Link
            href="/login"
            className="text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300 border"
          >
            Sign in / sign up
          </Link>
        )}
      </div>
    </nav>
  );
}
