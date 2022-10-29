import Head from "next/head";
import Image from "next/image";
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
      <main className="max-w-lg mx-auto font-nunito p-4">
        <h2 className="text-xl">Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Officia undeLorem ipsum
          dolor sit amet consectetur
        </p>
        <button className="p-2 bg-black text-white">Call to action</button>
      </main>
    </div>
  );
}
