import Head from 'next/head';
import MenuTabs from "@/components/menu/MenuTabs";

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>The Sahara Grill Menu</title>
        <meta name="description" content="Explore the delicious menu of Sahara Grill, featuring a variety of Mediterranean dishes including falafel, shawarma, kebabs, and more." />
      </Head>
      <main className="flex min-h-screen flex-col py-16 px-10 md:px-24">
        <h1 className="aladin-regular text-start text-6xl md:text-8xl lg:text-9xl font-medium mb-5 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
          The Sahara Grill Menu
        </h1>
        <div className="flex flex-row items-center justify-center">
          <MenuTabs />
        </div>
      </main>
    </>
  );
}
