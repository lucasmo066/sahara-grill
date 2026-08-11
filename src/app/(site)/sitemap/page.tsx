import Link from 'next/link';

export default function Sitemap() {
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <div className="flex flex-col justify-center items-center pt-10">
        <p className="aladin-regular text-start text-8xl md:text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
          Sitemap
        </p>
      </div>
      <ul className="text-4xl text-primary font-extralight p-20 space-y-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="text-2xl pl-6 text-black dark:text-white">
          <Link href="/#location">Location</Link>
        </li>
        <li className="text-2xl pl-6 text-black dark:text-white">
          <Link href="/#hours">Hours</Link>
        </li> 
        <li className="text-2xl pl-6 text-black dark:text-white">
          <Link href="/#whatsnew">What&apos;s New</Link>
        </li>
        <li className="text-2xl pl-6 text-black dark:text-white">
          <Link href="/#cateringcard">Catering</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/#catering">Private Events</Link>
        </li>
      </ul>
    </div>
  );
}
