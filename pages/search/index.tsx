import { useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import Manga from "../../inteface/MangaTypes";

function Search() {
  const [searchResults, setSearchResults] = useState<Manga[]>([]);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto">
        <Searchbar setSearchResults={setSearchResults} />
        {searchResults?.length < 1 && (
          <p className="text-center my-4 text-xl font-semibold italic text-gray-500">
            Try typing &quot;Dragon Ball&quot;
          </p>
        )}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((manga) => (
            <Card
              key={manga.mal_id}
              imgPath={manga.images.webp.large_image_url}
              title={manga.title}
              chapters={manga.chapters}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Search;
