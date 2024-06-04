

export default function Sitemap() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl text-primary mt-5">Sitemap</p>
            </div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/#catering">Catering</a>
                </li>
            </ul>
        </div>
    );
}