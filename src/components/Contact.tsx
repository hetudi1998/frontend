import { useState, useEffect } from "react";
import { Mail, Star, Award, Shield } from "lucide-react";

export default function ContactFormWithTicker() {
  const [email, setEmail] = useState("");
  const [tickerPositionX, setTickerPositionX] = useState(0);


  // Ticker items
  const tickerItems = [
    "Videography",
    "Filmmaker",
    "Vfx Artist",
    "Photography",
    "Photographer",
    "Cinematography",
    "Editor",
    "Visual Effects",
    "Motion Graphics",
  ];

  // Create a long string with items separated by stars
  const tickerText = tickerItems.join(" ★ ");
  useEffect(() => {
    let animationFrameId: number;
    let x = 0;
    const speed = 5;

    const animate = () => {
      x -= speed;
      if (x < -window.innerWidth) x = 0;
      setTickerPositionX(x);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    alert(`Email submitted: ${email}`);
    setEmail("");
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Main Content */}
      <div className="max-w-4xl w-full text-center mb-8 md:mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
          Have a great project idea?
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent mb-8 md:mb-12">Let's talk!</h2>

        {/* Contact Input */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative rounded-full border border-gray-200 overflow-hidden flex items-center shadow-lg m-2">
            <div className="bg-pink-200 p-3 md:p-4 rounded-l-full">
              <Mail className="text-[#C7619C]" size={24} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full flex-grow py-3 md:py-4 px-4 outline-none text-base md:text-lg"
            />
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-b from-[#AB69B3] to-[#C7619C] text-white py-3 md:py-4 px-6 md:px-8 font-semibold transition-colors m-1 rounded-full whitespace-nowrap"
            >
              Send
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-4 md:space-y-0 mt-6 md:mt-8">
          <div className="flex items-center justify-center">
            <Star className="text-gray-700 mr-2" size={20} />
            <span className="text-gray-800 font-medium text-sm md:text-base">
              4.9/5 Average Ratings
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Award className="text-gray-700 mr-2" size={20} />
            <span className="text-gray-800 font-medium text-sm md:text-base">
              6+ Award Nominations
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Shield className="text-gray-700 mr-2" size={20} />
            <span className="text-gray-800 font-medium text-sm md:text-base">B. Des & M.Sc</span>
          </div>
        </div>
      </div>

      {/* Diagonal ticker */}
      <div className="bg-[#C7619C] w-full h-24 md:h-36 relative overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 w-[300%] h-12 md:h-16 bg-white border-y border-pink-400"
          style={{
            transform: `translate(-50%, -50%) rotate(-3deg)`,
          }}
        >
          <div
            className="absolute text-black text-3xl md:text-5xl font-semibold whitespace-nowrap"
            style={{
              transform: `translateX(${tickerPositionX}px)`,
            }}
          >
            {tickerText} ★ {tickerText} ★ {tickerText}
          </div>
        </div>
      </div>
    </div>
  );
}
