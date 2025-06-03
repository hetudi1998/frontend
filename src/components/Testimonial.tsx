import { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/service/servicebg.jpg";
import quotedown from "../assets/quote-down.svg";

export default function TestimonialCarousel() {
  const carouselRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });

  const testimonials = [
    {
      name: "Sarah",
      title: "Marketing Manager",
      rating: 5,
      text: `She has a unique ability to transform raw footage into something extraordinary.
             Her understanding of color theory and cinematic aesthetics elevates every project.
             She's professional, patient, and truly passionate about her work.`,
      profilePic: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Karan Malhotra",
      title: "Compositing Artist",
      rating: 5,
      text: `From editing to visual effects, Hetansa is a powerhouse of creativity.
             She not only understands the technical aspects of post-production but also brings fresh ideas that enhance storytelling.`,
      profilePic: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Michael",
      title: "Film Director",
      rating: 5,
      text: `Working with a true visual artist has transformed our production quality.
             The attention to detail and creative problem-solving brought our vision to life in ways we hadn't imagined possible.`,
      profilePic: "https://i.pravatar.cc/100?img=3",
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      const { scrollWidth, offsetWidth } = carouselRef.current;
      setDragConstraints({ right: 0, left: -(scrollWidth - offsetWidth) });
    }
  }, []);

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={20} className="text-[#C7619C] fill-[#C7619C]" />
      ));
  };

  return (
    <div
      className="w-full bg-[#1C1C1D] text-white py-12 px-4 relative overflow-hidden rounded-[3rem] min-h-[80vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto">
        {/* Header Section */}
        <section className="text-center mb-16 w-full pt-12">
          <h2 className="text-4xl font-bold mb-4 mx-auto max-w-sm">
            <span className="text-white mr-3">Testimonials That Speak to</span>
            <span className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">
              My Results
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            "I take pride in delivering impactful, high-quality work. Here’s
            what my clients have to say about their experience. Their words
            reflect the dedication, creativity, and professionalism I bring to
            every project. Let their success stories inspire confidence in what
            I can do for you."
          </p>
        </section>

        {/* Draggable Carousel */}
        <section>
          <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={dragConstraints}
              className="flex gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="min-w-[80%] md:min-w-[45%] bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 border-1 border-black hover:border-[#979797]"
                >
                  {/* Header: Profile + Rating + Quote Icon */}
                  <header className="flex justify-between items-start ">
                    {/* Profile & Info */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.profilePic}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <p className="text-base font-semibold text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-400">{testimonial.title}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center">
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                        <span className="ml-2 text-sm text-white font-medium">
                          {testimonial.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <img
                      src={quotedown}
                      alt="Quote Down"
                      className="w-24 h-24 opacity-60"
                    />
                  </header>

                  {/* Testimonial Text */}
                  <p className="text-white text-base leading-relaxed whitespace-pre-line">
                    {testimonial.text}
                  </p>
                </article>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
