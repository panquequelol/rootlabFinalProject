import Image from "next/image";

interface CardProps {
  title: string;
  imgPath: string;
  chapters?: number;
}

function Card({ title, imgPath, chapters }: CardProps) {
  return (
    <article className="flex border border-gray-300 shadow rounded-3xl p-4">
      <div className="w-36">
        <Image
          src={imgPath}
          alt={`${title} manga cover`}
          width={500}
          height={500}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{chapters || <span className="italic">no info</span>} chapters</p>
      </div>
    </article>
  );
}

export default Card;
