import { LayoutGridCards } from '@/components/LayoutGrid';

export default function IntroGridSection() {
  return (
    <div className="h-screen my-10 w-full border-2 border-red-500">
        <h2 className="text-3xl font-extralight text-primary mt-10">Come see at us at our Woodstock Location today</h2>
      <LayoutGridCards />
    </div>
  );
}
