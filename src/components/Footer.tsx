import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="dark:bg-neutral-900 bg-zinc-100 text-black dark:text-white">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center justify-center mb-4 md:mb-0 md:col-span-4">
                        <Image
                            src="/saharagrillgray.svg"
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </div>
                    {/* Links Section */}
                    <div className="flex flex-row items-center justify-center gap-8 mb-4 md:mb-0 md:col-span-4 lg:order-first">
                        <Link href="/menu">
                            <p className="text-lg lg:text-xl">Menu</p>
                        </Link>
                        <Link href="/about">
                            <p className="text-lg lg:text-xl">About</p>
                        </Link>
                        <Link href="/#catering">
                            <p className="text-lg lg:text-xl">Catering</p>
                        </Link>
                        <Link href="/sitemap">
                            <p className="text-lg lg:text-xl">Sitemap</p>
                        </Link>
                    </div>
                    {/* Contact Section */}
                    <div className="flex flex-col items-center text-center mb-4 md:mb-0 md:col-span-2">
                        <p className="text-lg lg:text-xl font-bold">Contact Us</p>
                        <p className="text-md lg:text-lg mt-2 font-thin">470-787-2200</p>
                        <p className="text-sm lg:text-md mt-2 font-thin">
                            12910 Highway 92
                            <br />
                            Suite 105
                            <br />
                            Woodstock, Georgia 30188
                        </p>
                    </div>
                   
                    {/* Hours Section */}
                    <div className="flex flex-col items-center text-center mb-4 md:mb-0 md:col-span-2">
                        <p className="text-lg lg:text-xl font-bold">Hours</p>
                        <p className="text-md lg:text-lg mt-2 font-thin">
                            Sunday - Monday
                            <br />
                            Closed
                        </p>
                        <p className="text-md lg:text-lg mt-2 font-thin">
                            Tuesday - Thursday
                            <br />
                            11AM - 8PM
                        </p>
                        <p className="text-md lg:text-lg mt-2 font-thin">
                            Friday - Saturday
                            <br />
                            11AM - 9PM
                        </p>
                    </div>
                  
                <p className="text-sm text-center md:col-span-4">
                    &copy; 2024 The Sahara Grill. All rights reserved.
                </p>
                </div>
            </div>
        </footer>
    );
}
