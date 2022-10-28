import { BookOpenIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex justify-between max-w-lg mx-auto items-center">
      <div className="flex items-center text-2xl font-bold py-2">
        <BookOpenIcon className="h-8 w-8" />
        <h1>MangaSee</h1>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>Search</li>
          <li>Random</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
