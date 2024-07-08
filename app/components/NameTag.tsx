import Link from "next/link";
export default function NameTag() {
  return (
    <div className="p-1 bg-violet-500 text-white text-sm font-bold text-center tracking-wider">
      A product by{" "}
      <Link href="https://www.linkedin.com/in/iamrohitbajaj/" target="_blank">
        ROHIT BAJAJ
      </Link>
    </div>
  );
}
