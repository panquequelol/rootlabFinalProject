import Image from "next/image";
import axios from "axios";
import Header from "../../components/Header";
import Manga from "../../inteface/MangaTypes";
import MangaRecommendation from "../../inteface/MangaRecommendationTypes";
import Link from "next/link";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { data: mangaDetailsResults } = await axios.get(
    `https://api.jikan.moe/v4/manga/${id}`
  );
  const { data: recommendationsResults } = await axios.get(
    `https://api.jikan.moe/v4/manga/${id}/recommendations`
  );

  return {
    props: {
      manga: mangaDetailsResults.data,
      recommendations: recommendationsResults.data,
    },
  };
}

interface MangaDetailsProps {
  manga: Manga;
  recommendations: MangaRecommendation[];
}

function MangaDetails({ manga, recommendations }: MangaDetailsProps) {
  return (
    <>
      <Head>
        <title>MangaSee - {manga.title}</title>
        <meta
          name="description"
          content={`Details about the manga ${manga.title} by ${manga.authors[0].name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <section className="space-y-4">
          <p className="font-bold text-xl">Some other manga you might like</p>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {recommendations.map(({ entry: manga }) => (
              <li key={manga.mal_id}>
                <Link
                  href={`/${manga.mal_id}`}
                  className="flex flex-col items-center gap-2 hover:brightness-90 transition-all duration-300 h-full w-full bg-gray-100 border border-gray-200 rounded p-1"
                >
                  <Image
                    src={manga.images.webp.small_image_url}
                    width="500"
                    height="500"
                    alt={`${manga.title} manga cover`}
                    className="w-20 rounded"
                  />
                  <p className="text-center font-semibold">{manga.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default MangaDetails;
