import { cn } from "@/lib/utils";

function Ourservices() {
  return (
    <>
      <div>
        <div className="px-4 md:px-0">
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 text-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Our Expertise Driving Success through This...
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6 w-full px-4 md:px-0 mb-24 mt-12">
          {/* Technology Card */}
          <div className="w-full md:max-w-xs">
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-72 md:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-1 border-gray-400",
                "bg-[url(https://img.freepik.com/free-vector/blue-futuristic-networking-technology-vector_53876-151537.jpg?t=st=1732960681~exp=1732964281~hmac=e414eb7dbdac0933c8a43b49d264b02898b994148a7e586fc3636cf189ad114c&w=360)] bg-cover bg-center",
                "hover:bg-[url(https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM0OTUzMjMzNjM1NzM1NjM1NzM1NjM1NzM1NjM1NzM1NjM1NzM1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif)] bg-cover bg-center", // Funny technology GIF
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500 transform hover:scale-105"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 text-center">
                  Technology
                </h1>
              </div>
            </div>
          </div>

          {/* Research Card */}
          <div className="w-full md:max-w-xs">
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-72 md:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-1 border-gray-400",
                "bg-[url(https://images.pexels.com/photos/1194775/pexels-photo-1194775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center",
                "hover:bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzBnNW1qdGFtZ3JseGtteXVvbDlsaGUyanVsa2JicTZrYmpzcXA1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wk3oA29xGiHM98ECQ7/giphy.webp)]", // Funny research GIF
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500 transform hover:scale-105"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 text-center">
                  Research
                </h1>
              </div>
            </div>
          </div>

          {/* Marketing Card */}
          <div className="w-full md:max-w-xs">
            <div
              className={cn(
                "group w-full cursor-pointer overflow-hidden relative card h-72 md:h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border-1 border-gray-400",
                "bg-[url(https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-center",
                "hover:bg-[url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFnOXZzNTAwbXR4dXZ0N3EwZ2M5MnlyOTMxazN4NWc1dXE2OGkzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6wVFPKZDkPL9l6fpKY/giphy.webp)]", // Funny marketing GIF
                "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                "transition-all duration-500 transform hover:scale-105"
              )}
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 text-center">
                  Marketing
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourservices;
