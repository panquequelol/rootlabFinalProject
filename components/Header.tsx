import {
  BookOpenIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-stone-900 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <div className="flex items-center text-2xl font-black">
          <BookOpenIcon className="h-8 w-8" />
          <Link href="/">
            <h1>MangaSee</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-4 font-bold">
            <li className="bg-white text-black rounded-2xl p-2 hover:brightness-90 duration-300">
              <Link href="/search" className="flex gap-2">
                <span>Search</span>
                <MagnifyingGlassCircleIcon className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
