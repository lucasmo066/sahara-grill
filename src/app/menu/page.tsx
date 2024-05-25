import MenuTabs from "@/components/menu/MenuTabs";

export default function MenuPage() {
  return (
    <main className="flex min-h-screen flex-col py-16 px-10 md:px-24">
      <h1 className="aladin-regular text-3xl sm:text-6xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-800 to-red-600">
        The Sahara Grill Menu
      </h1>
      <div className="flex flex-row items-center justify-center">
        <MenuTabs />
      </div>
    </main>
  );
}
