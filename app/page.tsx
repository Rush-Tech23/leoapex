'use client';

// import Image from "next/image";

import Partners from "./Partners/page";
import Ourservices from "./Ourservicec/page";
import Footer from "./Footer/page";
import BackgroundLinesDemo from "./Hero/page";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Full-page background styling */}
        <div
          className="fixed inset-0 overflow-auto"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(128, 0, 128, 0.3) 0%,
                rgba(128, 0, 128, 0.2) 40%,
                rgba(128, 0, 128, 0.1) 70%,
                rgba(128, 0, 128, 0.05) 85%,
                transparent 100%
              ),
              linear-gradient(to bottom, #050505, #050505)
            `,
          }}
        />
        {/* Main content wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-start">
          <div id="BackgroundLinesDemo" >
            <BackgroundLinesDemo/>
          </div>
          <div id="Partners" className="mt-12">
            <Partners/>
          </div>
          <div id="Ourservices" className="mt-12">
            <Ourservices />
          </div>
          <div id="Footer" className="mt-12 z-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
