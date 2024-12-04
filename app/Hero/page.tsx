'use client'

import React, { useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";

function BackgroundLinesDemo() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-screen">
      <Button 
        className="absolute top-12 left-[95%] transform -translate-x-full bg-[rgba(128,0,128,0.3)] hover:bg-[rgba(128,0,128,0.9)] text-white font-bold py-4 px-8 text-xl transition-all duration-700 ease-in-out"
        onClick={() => setShowContactForm(true)}
      >
        Contact Us
      </Button>
      <h2 className="underline decoration-4 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 text-white text-4xl md:text-8xl lg:text-9xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
        LeoApex
      </h2>
      <p className="max-w-2xl mx-auto text-lg md:text-4xl dark:text-neutral-400 text-white text-center">
        Just like a lion is King of the Jungle alone, <br /> <span className="">we too are Leaders
        in the World of Technology.</span>
      </p>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </BackgroundLines>
  );
}

export default BackgroundLinesDemo;

