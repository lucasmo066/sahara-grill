'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { z } from 'zod';

const emailSchema = z.string().email({ message: "Invalid email address" });

const GetLatestForm = () => {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      emailSchema.parse(email);
      setError('');
      
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail('');
        setSignedUp(true);
        setTimeout(() => setSignedUp(false), 3000); // Reset after 3 seconds
      } else {
        const data = await response.json();
        setError(data.message || 'Error saving email');
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message);
      }
    }
  };

  return (
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
  );
};

export default GetLatestForm;
