import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="dark:bg-neutral-800 bg-zinc-100 text-black dark:text-white">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center justify-center mb-4 md:mb-0 md:col-span-4">
                        <Image
                            src="/saharagrillgray.svg"
                            alt="logo"
                            width={200}
                            height={100}
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
                        <Link href="#catering">
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
                            suite 105
                            <br />
                            Woodstock, Georgia 30188, United States
                        </p>
                    </div>
                    {/* Hours Section */}
                    <div className="flex flex-col items-center text-center mb-4 md:mb-0 md:col-span-2">
                        <p className="text-lg lg:text-xl font-bold">Hours</p>
                        <p className="text-sm lg:text-md mt-2 font-thin">Monday - Thursday: 11am - 8:30pm</p>
                        <p className="text-sm lg:text-md mt-2 font-thin">Friday - Saturday: 11am - 9pm</p>
                        <p className="text-sm lg:text-md mt-2 font-thin">Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
