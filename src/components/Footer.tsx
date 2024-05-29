import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="dark:bg-neutral-800 bg-zinc-100 text-black dark:text-white">
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/saharagrillgray.svg"
                            alt="logo"
                            width={200}
                            height={100}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Contact Us</p>
                        <p className="text-md mt-2">470-787-2200</p>
                        <p className="text-sm mt-2">
                        12910 Highway 92
                        <br />
                         suite 105
                         <br />
                          Woodstock, Georgia 30188, United States
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-lg font-bold">Hours</p>
                        <p className="text-sm mt-2">Monday - Friday: 11am - 10pm</p>
                        <p className="text-sm mt-2">Saturday - Sunday: 11am - 11pm</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                       <Link href= "Menu">
                        <p>
                            Menu
                        </p>
                        </Link>
                        <Link href= "About">
                        <p>
                            About
                        </p>
                        </Link>
                        <Link href= "Catering">
                        <p>
                            Catering
                        </p>
                        </Link>
                        <Link href= "Sitemap">
                        <p>
                            Sitemap
                        </p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}