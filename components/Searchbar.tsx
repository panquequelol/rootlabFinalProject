import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

interface SearchBarProps {
  setSearchResults: any;
}

function Searchbar({ setSearchResults }: SearchBarProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // debounce, search when 200 miliseconds have pass from previus input change
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(debouncedSearchQuery), 200);
    return () => clearTimeout(timer);
  }, [debouncedSearchQuery]);

  async function search() {
    const { data }: any = await axios.get("https://api.jikan.moe/v4/manga", {
      params: {
        q: searchQuery,
        limit: 12,
      },
    });
    setSearchResults(data.data);
    console.log(data.data);
  }

  useEffect(() => {
    if (searchQuery !== "") {
      search();
    }
  }, [searchQuery]);

  return (
    <div className="border border-gray-300 bg-gray-100 rounded-3xl p-1.5 flex gap-2">
      <MagnifyingGlassIcon className="h-6 w-6 shrink-0 text-gray-500" />
      <input
        type="search"
        name="search"
        id="search"
        ref={searchInputRef}
        onChange={(e) => setDebouncedSearchQuery(e.target.value)}
        value={debouncedSearchQuery}
        className="bg-transparent w-full focus:outline-none"
        placeholder="Search manga titles"
      />
      {searchQuery && (
        <button
          aria-label="Limpiar búsqueda"
          className="px-2"
          onClick={() => {
            setDebouncedSearchQuery("");
            searchInputRef.current?.focus(); // focus back to input once cleared
          }}
        >
          <XMarkIcon className="h-6 w-6 text-gray-500 shrink-0" />
        </button>
      )}
    </div>
  );
}

export default Searchbar;
