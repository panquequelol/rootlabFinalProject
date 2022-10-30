import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MangaSee - Details about your favorite manga</title>
        <meta
          name="description"
          content="Everything about your favorite manga series!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-lg mx-auto font-nunito p-4 space-y-2 text-center">
        <h2 className="text-2xl font-black">
          Details about your favorite manga!
        </h2>
        <p>
          Search for mangas, and get details and recommendations more manga to
          read :)
        </p>
        <Link
          href="/search"
          className="py-2 px-4 bg-black text-white hover:brightness-90 transition-all duration-300 rounded-3xl"
        >
          Start searching now!
        </Link>
        <p className="text-xl py-12">
          <h1>René Cáceres</h1>
          <p>rene@outlook.my</p>
          <ul className="text-blue-400 italic underline">
            <li>
              <a
                href="https://github.com/panquequelol"
                target="_blank"
                rel="noreferrer"
              >
                Github profile
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/renecaceresdeveloper/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </li>
          </ul>
        </p>
      </main>
    </div>
  );
}
