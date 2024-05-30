'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { z } from 'zod';

const emailSchema = z.string().email({ message: "Invalid email address" });

const WhatsNewCard = () => {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = () => {
    try {
      emailSchema.parse(email);
      setEmail('');
      setSignedUp(true);
      setError('');
      setTimeout(() => setSignedUp(false), 3000); // Reset after 3 seconds
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message);
      }
    }
  };

  return (
    <div className="col-span-12 md:col-span-7 p-5 h-[70rem] md:h-[60rem] border-2 border-primary rounded-3xl">
      <h2 className="aladin-regular text-start text-9xl font-medium mb-10 bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-950">
        What&apos;s New
      </h2>
      <div className="h-[30rem] flex flex-col items-center gap-4">
        <div className="flex justify-center items-center w-full">
          <Image
            src="/dailyspecials.png"
            alt="Sahara Grill has Daily Specials on Wraps and Plates"
            width={400}
            height={400}
            className="object-fill h-[25rem] w-[30rem]"
          />
        </div>
        <div className="mt-10 text-center relative">
          <h3 className="text-5xl font-extrabold mb-4">Get the Latest</h3>
          <p className="text-xl font-light mb-6 mx-5">
            Sign up with your email to receive exclusive news + events for The Sahara Grill.
          </p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border-2 rounded-2xl px-6 py-2 m-2 mb-4"
          />
          {error && <p className="text-red-500 absolute top-full right-20">{error}</p>}
          <Button
            onClick={handleSignUp}
            className={`px-14 py-4 mt-4 ${signedUp ? 'bg-green-500 text-white' : 'text-white'}`}
          >
            {signedUp ? 'Signed Up' : 'Sign Up'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatsNewCard;
