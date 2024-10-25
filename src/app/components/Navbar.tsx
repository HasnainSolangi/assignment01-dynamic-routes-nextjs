import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-green-500 p-3 text-black font-bold text-xl flex justify-between px-10">
        <div className="flex space-x-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <Link href={"/feedback"}>Feedback</Link>
          <Link href={"/country"}>Country</Link>
        </div>
      </nav>
    </div>
  );
}