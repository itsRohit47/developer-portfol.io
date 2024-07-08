import { login } from "@/app/lib/actions";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-3 max-w-lg mx-auto mt-20">
      <Image src="/icon.svg" width={45} height={45} alt="Logo" />
      <h1 className="text-2xl font-semibold mt-3">Sign in to your account</h1>
      <p className="text-base text-gray-600">Enter your email and password</p>
      <Field className="mt-3">
        <Input
          type="email"
          required
          name="email"
          placeholder="use test@developerportfol.io for testing"
          className={clsx(
            " block w-full rounded-lg border  py-1.5 px-3 text-sm/6 text-gray-900",
            "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
          )}
        />
      </Field>
      <Field className="mt-3">
        <Input
          type="password"
          required
          name="password"
          placeholder="password is test123"
          className={clsx(
            " block w-full rounded-lg border  py-1.5 px-3 text-sm/6 text-gray-900",
            "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
          )}
        />{" "}
      </Field>

      <button
        formAction={login}
        className="bg-violet-500 p-2 text-white text-sm font-semibold rounded-lg mt-3"
      >
        Sign in
      </button>
      <p className="text-base text-gray-600 mt-3">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}
