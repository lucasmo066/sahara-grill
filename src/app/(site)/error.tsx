'use client'

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl text-primary mt-5">Error...</p>
                <Button className="bg-primary px-14 py-6">
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        </div>
    );
}