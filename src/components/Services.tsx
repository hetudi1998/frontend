import { useState } from "react";
import servicebg from "../assets/service/servicebg.jpg";
import ServiceCard from "./Card";

export default function ServicesSection() {
  const [, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: "filmmaking",
      title: "Filmmaking",
      image: "/src/assets/service/serviceimg1.jpg",
    },
    {
      id: "visual-effects",
      title: "Visual Effects",
      image: "/src/assets/service/serviceimg2.jpg",
    },
    {
      id: "graphic-designing",
      title: "Graphic Designing",
      image: "/src/assets/service/serviceimg3.jpg",
    },
  ];

  return (
    <div className="bg-[#1C1C1D] min-h-[100vh] w-full relative overflow-hidden flex items-center py-20 rounded-[3rem]">
      {/* Background Image with Diagonal Lines */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-[90%] w-full mx-auto relative z-10">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>

          <div className="">
            <p className="text-white text-2xl">
              Bringing ideas to life with storytelling, visuals, and design.
            </p>
            <p className="text-white text-2xl mt-2">
              Explore how I can help elevate your project.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
