"use client"
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the Card interface to specify the structure of each partner card
interface Card {
  title: string;
  src: string;
  width: number;
  height: number;
}

// Partners Component
const Partners: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Shutter Cloud",
      src: "https://www.shuttercloud.in/logo.svg",
      width: 300,
      height: 100,
    },
    {
      title: "Housing Mantra",
      src: "https://housingmantra.in/wp-content/uploads/2024/08/20231103_211333.png.webp",
      width: 300,
      height: 200,
    },
    {
      title: "Force Galaxy",
      src: "https://forcegalaxy360.com/_next/image?url=%2Flogonavbar.png&w=640&q=75",
      width: 300,
      height: 200,
    },
    {
      title: "Dudh Dairy",
      src: "https://pngimg.com/uploads/milk/milk_PNG12710.png",
      width: 300,
      height: 100,
    },
  ];

  return (
    <section className=" bg-gradient-to-r bg-slate-950 w-screen h-auto">
      <LampContainer className="h-10">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-white to-purple-900 py-0 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Our Partners
        </motion.h1>
      </LampContainer>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center  bg-slate-950 border border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
          >
            <div className="relative mb-4 w-full aspect-[3/2]">
              <Image
                src={card.src}
                alt={card.title}
                layout="fill" // Makes image responsive
                objectFit="contain" // Ensures image fits properly
                quality={100} // Ensures HD quality
              />
            </div>
            <h3
              className="text-lg font-semibold text-gray-100 truncate w-4/5 text-center"
              title={card.title} // Tooltip with full title on hover
            >
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
