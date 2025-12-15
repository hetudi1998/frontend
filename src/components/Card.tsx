
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  image: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ServiceCard = ({ title, image, onMouseEnter, onMouseLeave }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D tilt effect handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave();
  };
  const handleMouseEnter = () => {
    if (onMouseEnter) onMouseEnter();
  };

  // Scroll to contact section
  const handleButtonClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={cardRef}
      className="w-full h-[600px] rounded-3xl overflow-hidden border-2 border-zinc-500 transition-colors duration-300 group perspective"
      style={{
        background: 'rgba(23, 23, 23, 0.45)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Header */}
      <div className="px-6 py-12">
        <h2 className="text-white text-[32px] font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      <div className="w-full h-[2px] bg-zinc-500 group-hover:bg-white/20" />

      {/* Card stack and image */}
      <div className="relative pt-20 h-[calc(100%-140px)]">
        {/* Background card layers */}
        <div className="absolute top-12 left-4 right-4 h-[85%] bg-[#454545] rounded-3xl z-0 transition-transform duration-300 group-hover:rotate-6 group-hover:translate-x-4 group-hover:translate-y-2 opacity-60" />
        <div className="absolute top-16 left-2 right-2 h-[85%] bg-[#9E9D9D] rounded-3xl z-0 transition-transform duration-300 group-hover:rotate-3 group-hover:translate-x-2 group-hover:translate-y-1 opacity-40" />

        {/* Foreground image card */}
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl h-full transition-transform duration-300 group-hover:-rotate-2 group-hover:translate-y-[-4px]">
          <div className="relative h-full rounded-3xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-[#171717] right-0 bottom-0 w-36 h-36 rounded-tl-[60%] " />
            {/* Floating gradient button over image */}
            <div className="absolute bottom-2 right-2 z-20">
              <button
                onClick={handleButtonClick}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-[#AB69B3] to-[#C7619C] group-hover:from-[#AC396B] group-hover:to-[#AC396B] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <ArrowUpRight color="white" className="w-16 h-16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;