import { BookOpenIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="bg-stone-900 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-4">
        <div className="flex items-center text-2xl font-black">
          <BookOpenIcon className="h-8 w-8" />
          <h1>MangaSee</h1>
        </div>
        <nav>
          <ul className="flex gap-4 font-bold">
            <li>Search</li>
            <li>Random</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
