import { LayoutGridCards } from '@/components/LayoutGrid';

export default function IntroGridSection() {
  return (
    <div className="h-screen w-full my-20">
      <h2 className="aladin-regular text-center text-8xl md:text-9xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">Learn About Us</h2>
      <p className="text-xl font-extralight text-black dark:text-white pt-10 mx-5 md:mx-10">Click on the pictures below to learn more about us and our values</p>
      <LayoutGridCards />
    </div>
  );
}
