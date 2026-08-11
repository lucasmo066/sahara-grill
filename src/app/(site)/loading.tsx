

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="animate-spin w-20 h-20 border-t-2 border-b-2 border-primary rounded-full"></div>
                <p className="text-xl text-primary mt-5">Loading...</p>
            </div>
        </div>
    );
}