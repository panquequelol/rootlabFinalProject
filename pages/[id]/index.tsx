import Image from "next/image";
import axios from "axios";
import Header from "../../components/Header";
import Manga from "../../inteface/MangaTypes";

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { data: result } = await axios.get(
    `https://api.jikan.moe/v4/manga/${id}`
  );
  const { data } = result;

  return {
    props: {
      manga: data,
    },
  };
}

interface MangaDetailsProps {
  manga: Manga;
}

function MangaDetails({ manga }: MangaDetailsProps) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Image
            src={manga.images.webp.large_image_url}
            width="500"
            height="500"
            alt={`${manga.title} manga cover`}
          />
          <div className="space-y-4">
            <div>
              <h2 className="font-black text-3xl">{manga.title}</h2>
              <h3>
                {manga.title_english}; {manga.title_japanese}
              </h3>
              <p>
                By{" "}
                {manga.authors.map((author) => (
                  <strong key={author.mal_id}>{author.name}. </strong>
                ))}
              </p>
            </div>
            <p>
              <span className="font-bold">Status:</span> {manga.status}
            </p>
            <div>
              <p className="font-bold">Genres</p>
              <ul className="flex gap-2">
                {manga.genres.map((genre) => (
                  <li
                    className="text-sm bg-gray-200 w-fit border-gray-300 py-0.5 px-1 border rounded-lg flex items-center"
                    key={genre.mal_id}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold">Themes</p>
              <ul className="flex gap-2">
                {manga.themes.map((theme) => (
                  <li
                    className="text-sm bg-gray-200 w-fit border-gray-300 py-0.5 px-1 border rounded-lg flex items-center"
                    key={theme.mal_id}
                  >
                    {theme.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold">Background</p>
              <p>{manga.background}</p>
            </div>
            <div>
              <p className="font-bold">Synopsis</p>
              <p>{manga.synopsis}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MangaDetails;
