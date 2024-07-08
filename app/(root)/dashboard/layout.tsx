import NavLinks from "@/app/components/dashboard/NavLinks";
import { ClipboardIcon } from "@heroicons/react/24/outline";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 h-full p-5 grid lg:grid-cols-4 gap-5">
      <div className=" flex flex-col gap-3 py-10 ">
        <h1 className="font-medium text-xl">Dashboard</h1>
        <p className="text-base text-gray-600">
          Everything related to your Portfolio
        </p>
        <div className="bg-white p-2 rounded-lg shadow-sm border text-sm text-center flex gap-2 items-center justify-center">
          <span>DevloperPortfol.io/test</span>{" "}
          <ClipboardIcon width={16}></ClipboardIcon>
        </div>
        <NavLinks></NavLinks>
        <hr></hr>
        <button className="mt-5 text-sm bg-violet-500 p-2 text-white rounded-lg shadow-sm">
          Publish Portfolio
        </button>
      </div>
      <div className="lg:col-span-3">
        {children}
      </div>
    </div>
  );
}
