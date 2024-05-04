import {Button} from "@/components/ui/button";

export default function MenuPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-24">
      <h1 className="text-9xl font-thin">This is our Menu</h1>
      <p className="mt-5 text-lg">
       kabob kabob kabob and more kabob
      </p>
      <Button variant="outline" className="border-2 border-primary text-primary my-10">Click me</Button>
    </main>
  );
}
