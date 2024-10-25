import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-center text-2xl font-bold mb-6">
        This is Countries Page:
      </h1>
      <ul className="flex flex-wrap justify-center gap-10">
        <li>
          <Link
            href="/country/afghanistan"
            className="text-blue-600 hover:underline"
          >
            Afghanistan
          </Link>
        </li>
        <li>
          <Link
            href="/country/bangladesh"
            className="text-blue-600 hover:underline"
          >
            Bangladesh
          </Link>
        </li>
        <li>
          <Link href="/country/egypt" className="text-blue-600 hover:underline">
            Egypt
          </Link>
        </li>
        <li>
          <Link
            href="/country/indonesia"
            className="text-blue-600 hover:underline"
          >
            Indonesia
          </Link>
        </li>
        <li>
          <Link href="/country/iran" className="text-blue-600 hover:underline">
            Iran
          </Link>
        </li>
        <li>
          <Link
            href="/country/malaysia"
            className="text-blue-600 hover:underline"
          >
            Malaysia
          </Link>
        </li>
        <li>
          <Link
            href="/country/morocco"
            className="text-blue-600 hover:underline"
          >
            Morocco
          </Link>
        </li>
        <li>
          <Link
            href="/country/pakistan"
            className="text-blue-600 hover:underline"
          >
            Pakistan
          </Link>
        </li>
        <li>
          <Link
            href="/country/saudiarabia"
            className="text-blue-600 hover:underline"
          >
            Saudi Arabia
          </Link>
        </li>
        <li>
          <Link
            href="/country/turkey"
            className="text-blue-600 hover:underline"
          >
            Turkey
          </Link>
        </li>
      </ul>
    </div>
  );
}
