import { LayoutGridCards } from '@/components/LayoutGrid';

export default function IntroGridSection() {
  return (
    <div className="h-screen w-full my-20 border-y border-dotted">
      <h3 className="text-xl font-extralight text-black dark:text-white pt-10 mx-5 md:mx-10">Click on the pictures below to learn more about us and our values</h3>
      <LayoutGridCards />
    </div>
  );
}
