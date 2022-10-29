import Image from "next/image";
import { Genre } from "../inteface/MangaTypes";

interface CardProps {
  title: string;
  imgPath: string;
  chapters?: number;
  genres: Genre[];
}

function Card({ title, imgPath, chapters, genres }: CardProps) {
  return (
    <article className="grid grid-cols-2 border border-gray-300 bg-gray-100 shadow rounded-2xl p-4 gap-4 hover:brightness-90 transition-all duration-300">
      <div>
        <Image
          src={imgPath}
          alt={`${title} manga cover`}
          className="rounded-xl w-36"
          height="500"
          width="500"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{chapters || <span className="italic">no info</span>} chapters</p>
        <ul className="flex gap-1 flex-wrap">
          {genres.map((genre) => (
            <li
              className="text-sm bg-gray-200 w-fit border-gray-300 py-0.5 px-1 border rounded-lg flex items-center"
              key={genre.mal_id}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Card;
