import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BlogPostSection() {
  const blogPosts = [
    // Original 3 posts with matching LinkedIn links
    {
      id: 1,
      image: "/src/assets/blog/blogpost1.jpg",
      category: "Visual Narrative",
      author: "Hetansa R",
      date: "Mar 5, 2025",
      title: "The Hero's Journey in Hindu Mythology: Beyond the...",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/heros-journey-hindu-mythology-beyond-western-arc-hetansa-rajkotia-u3dsf"
    },
    {
      id: 2,
      image: "/src/assets/blog/blogpost2.jpg",
      category: "Film Analysis",
      author: "Hetansa R",
      date: "Feb 11, 2025",
      title: "The Self-Discovery Journey in Tamasha",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/self-discovery-journey-tamasha-hetansa-rajkotia-topsf"
    },
    {
      id: 3,
      image: "/src/assets/blog/blogpost3.jpg",
      category: "Directorial Vision",
      author: "Hetansa R",
      date: "Jan 25, 2025",
      title: "Life Through a Cinematic Lens",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/life-through-cinematic-lens-hetansa-rajkotia-yyfgc"
    },

    // Additional LinkedIn articles (4-8)
    {
      id: 4,
      image: "https://picsum.photos/400/300?image=10",
      category: "Cinematic Theory",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Lights, Colour, Action: How Theory of Filmmaking Aesthetics",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/lights-colour-action-how-theory-filmmaking-aesthetics-rajkotia-tkowf"
    },
    {
      id: 5,
      image: "https://picsum.photos/400/300?image=20",
      category: "Mythological Studies",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "From Yugas to Screenplays: Eternal Cycles of Storytelling",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/from-yugas-screenplays-eternal-cycles-storytelling-hetansa-rajkotia-1b4kf"
    },
    {
      id: 6,
      image: "https://picsum.photos/400/300?image=30",
      category: "Narrative Design",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Timeless Craft: Mythological Narratives & Structures of the Soul",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/timeless-craft-mythological-narratives-structures-soul-rajkotia-notzf"
    },
    {
      id: 7,
      image: "https://picsum.photos/400/300?image=40",
      category: "Emotional Storytelling",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Emotional Tapestry of Hi Nanna: Story of Love, Loss & Connection",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/emotional-tapestry-hi-nanna-story-love-loss-bridge-between-rajkotia-fadxf"
    },
    {
      id: 8,
      image: "https://picsum.photos/400/300?image=50",
      category: "Character Archetypes",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Beyond Good & Evil: Lessons from Hindu Mythology's Villains",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/beyond-good-evil-lessons-hindu-mythologys-villains-hetansa-rajkotia-wwfff"
    }
];

  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#2D2D2D] text-center sm:text-left">From my blog post</h2>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-white rounded-full hover:opacity-90 transition-opacity text-base sm:text-lg md:text-xl font-medium whitespace-nowrap"
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>

        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {visiblePosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-[24px] overflow-hidden bg-white h-full w-full"
              >
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      style={{
                        maskImage: `url(${post.mask})`,
                        WebkitMaskImage: `url(${post.mask})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="absolute bottom-0 right-3 bg-[#C7619C] rounded-full p-3 sm:p-4 cursor-pointer hover:opacity-90 transition-opacity shadow-lg z-10"
                    onClick={() => window.open(post.linkedin, '_blank')}>
                    <ArrowUpRight className="text-white w-16 h-16 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-16 xl:h-16" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="inline-block bg-[#F5F5F5] rounded-full px-8 py-3 mb-6">
                    <span className="text-[#2D2D2D] font-medium text-lg">{post.category}</span>
                  </div>
                  
                  <div className="flex items-center text-[#C7619C] mb-4 text-base">
                    <span className="mr-3">•</span>
                    <span className="mr-6">{post.author}</span>
                    <span className="mr-3">•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-[#2D2D2D] leading-tight">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* SVG Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="mask2">
            <path d="M0 37C0 16.5655 16.5655 0 37 0H203H385.5C405.935 0 422.5 16.5655 422.5 37V202.369V285.282C422.5 306.514 404.671 323.39 383.472 322.226L367.783 321.365C328.248 319.195 295 350.667 295 390.261V396.5C295 416.935 278.435 433.5 258 433.5H37C16.5655 433.5 0 416.935 0 396.5V37Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}