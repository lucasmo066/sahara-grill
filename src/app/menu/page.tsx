import MenuTabs from "@/components/menu/MenuTabs";

export default function MenuPage() {
  return (
    <main className="flex min-h-screen flex-col py-16 px-24">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-10  bg-clip-text text-transparent bg-gradient-to-b from-red-800 to-red-600">The Sahara Grill Menu</h1>
      <div className="flex flex-row">
        <MenuTabs />
      </div>
    </main>
  );
}
