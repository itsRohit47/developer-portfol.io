import { Field, Input, Textarea } from "@headlessui/react";
import clsx from "clsx";
export default function TheForm() {
  return (
    <>
      <form>
        <Field className="mt-3">
          <Input
            type="text"
            name="heading"
            placeholder="Heading"
            className={clsx(
              " block w-full rounded-lg border  py-1.5 px-3 text-sm/6 text-gray-900",
              "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
            )}
          />{" "}
        </Field>
        <Field className="mt-3">
          <Input
            type="text"
            name="subheading"
            placeholder="Sub Heading"
            className={clsx(
              " block w-full rounded-lg border  py-1.5 px-3 text-sm/6 text-gray-900",
              "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
            )}
          />{" "}
        </Field>
        <Field className="mt-3">
          <Textarea
            rows={3}
            name="bio"
            placeholder="Bio"
            className={clsx(
              " block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-gray-900",
              "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
            )}
          />{" "}
        </Field>
        <Field className="mt-3">
          <Input
            name="linkedin"
            placeholder="Linkedin URL"
            className={clsx(
              " block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-gray-900",
              "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
            )}
          />{" "}
        </Field>
        <Field className="mt-3">
          <Input
            name="github"
            placeholder="Github URL"
            className={clsx(
              " block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-gray-900",
              "focus:outline-purple-500/50 data-[focus]:outline-2 data-[focus]:-outline-offset-2"
            )}
          />{" "}
        </Field>
      </form>
      <br></br>

     
      
    
    </>
  );
}
