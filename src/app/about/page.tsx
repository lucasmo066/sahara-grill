import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col my-5 mx-10 lg:mx-20">
      <h1 className="aladin-regular text-start text-9xl font-medium mb-5 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        About Us
      </h1>
      <Image
        src="/menu/oldpic.png"
        alt="Picture of the Edwar family working together at The Sahara Grill"
        width={300}
        height={300}
        className="mb-6 w-[40rem] h-[30rem] lg:mb-0 lg:w-3/4 xl:w-3/7 lg:h-auto object-cover rounded-3xl"
      />
      <p>
        With over 20 years of experience in the restaurant industry, Eddie and Vickie are thrilled to open their very own establishment, a dream come true for this dedicated couple.<br />
        Alongside their son Tony, they have crafted a welcoming and relaxed family atmosphere that invites guests to feel at home.<br />
        Their other two sons, Andrew and Aidan, are still in high school but are proud to contribute by helping out on weekends and whenever needed.
      </p>
      <p>
        Eddie, Vickie, and their family are committed to providing the highest quality dining experience.<br />
        All of their food is prepared fresh daily, using only the finest and freshest ingredients.<br />
        Their signature spices, a closely guarded family secret, add a unique and unmatched flavor to every dish.<br />
        This dedication to quality and family values ensures that every meal is not just a dining experience but a warm, inviting journey into the heart of a family-owned business.
      </p>
    </main>
  );
}
