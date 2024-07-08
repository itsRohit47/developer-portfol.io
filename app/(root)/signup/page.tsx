import { signup } from "@/app/lib/actions";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <form className="flex flex-col gap-3 max-w-lg mx-auto mt-20">
      <Image src="/icon.svg" width={45} height={45} alt="Logo" />
      <h1 className="text-2xl font-semibold mt-3">Create an account</h1>
      <p className="text-base text-gray-600">Enter your email and password</p>
      <Field className="mt-3">
        <Input
          type="email"
          required
          name="email"
          placeholder="name@example.com"
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
          placeholder="*******"
          className={clsx(
            " block w-full rounded-lg border  py-1.5 px-3 text-sm/6 text-gray-900",
            "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
          )}
        />{" "}
      </Field>
      <Field className="flex items-center justify-center gap-2 mt-3">
        <Label className="text-base font-semibold text-gray-900">
          developer<span className="text-violet-500">portfol.io/</span>
        </Label>
        <Input
          type="text"
          required
          name="uname"
          placeholder="yourname"
          className={clsx(
            " block w-full rounded-lg border  py-1.5 px-3 text-sm/6 text-gray-900",
            "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
          )}
        />{" "}
      </Field>
      <Field className="flex items-center gap-4 mt-3">
        <Input
          type="checkbox"
          required
          name="agree"
          className="rounded-full bg-purple-500"
        />{" "}
        <Label className="text-base text-gray-600">
          i accept{" "}
          <Link href="/tos" className="font-semibold underline">
            TOS
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="font-semibold underline">
            Privacy Policy
          </Link>
        </Label>
      </Field>
      <button
        formAction={signup}
        className="bg-violet-500/50 p-2 text-white text-sm font-semibold rounded-lg mt-3"
      >
        Create account (Won't work, use test login)
      </button>
      <p className="text-base text-gray-600 mt-3">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
