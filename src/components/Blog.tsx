import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
<<<<<<< HEAD
import { getAllPosts } from "./Api"; // Make sure the path to api.js is correct

export default function BlogPostSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Step 1

  useEffect(() => {
    setLoading(true); // Start loading
    getAllPosts()
      .then((res) => {
        setBlogPosts(res.data);
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Failed to fetch blog posts:", err);
        setLoading(false); // Stop loading on error
      });
  }, []);
=======
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import blogimg1 from "../assets/blog/blogpost1.jpg";
import blogimg2 from "../assets/blog/blogpost2.jpg";
import blogimg3 from "../assets/blog/blogpost3.jpg";
import blogimg4 from "../assets/blog/blogpost4.jpg";
import blogimg5 from "../assets/blog/blogpost5.jpg";
import blogimg6 from "../assets/blog/blogpost6.jpg";
import blogimg7 from "../assets/blog/blogpost7.jpg";
import blogimg from "../assets/blog/blogpost8.jpg";


export default function BlogPostSection() {
  const blogPosts = [
    // Original 3 posts with matching LinkedIn links
    {
      id: 1,
      image: blogimg1,
      category: "Visual Narrative",
      author: "Hetansa R",
      date: "Mar 5, 2025",
      title: "The Hero's Journey in Hindu Mythology: Beyond the...",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/heros-journey-hindu-mythology-beyond-western-arc-hetansa-rajkotia-u3dsf"
    },
    {
      id: 2,
      image: blogimg2,
      category: "Film Analysis",
      author: "Hetansa R",
      date: "Feb 11, 2025",
      title: "The Self-Discovery Journey in Tamasha",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/self-discovery-journey-tamasha-hetansa-rajkotia-topsf"
    },
    {
      id: 3,
      image: blogimg3,
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
      image: blogimg4,
      category: "Cinematic Theory",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Lights, Colour, Action: How Theory of Filmmaking Aesthetics",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/lights-colour-action-how-theory-filmmaking-aesthetics-rajkotia-tkowf"
    },
    {
      id: 5,
      image: blogimg5,
      category: "Mythological Studies",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "From Yugas to Screenplays: Eternal Cycles of Storytelling",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/from-yugas-screenplays-eternal-cycles-storytelling-hetansa-rajkotia-1b4kf"
    },
    {
      id: 6,
      image: blogimg6,
      category: "Narrative Design",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Timeless Craft: Mythological Narratives & Structures of the Soul",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/timeless-craft-mythological-narratives-structures-soul-rajkotia-notzf"
    },
    {
      id: 7,
      image: blogimg7,
      category: "Emotional Storytelling",
      author: "Hetansa R",
      date: "May 25, 2023",
      title: "Emotional Tapestry of Hi Nanna: Story of Love, Loss & Connection",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/emotional-tapestry-hi-nanna-story-love-loss-bridge-between-rajkotia-fadxf"
    },
    {
      id: 8,
      image: blogimg,
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
>>>>>>> 4aa8e9dee629221b16b69ef18b99474b27fce1fb

  return (
    <div className="min-h-screen w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-bold text-[#2D2D2D] text-center sm:text-left">From my blog post</h2>
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-white rounded-full hover:opacity-90 transition-opacity text-base sm:text-lg md:text-xl font-medium whitespace-nowrap">
            See All
          </button>
        </div>

        {loading ? (
          // Loader here
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#C7619C] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="rounded-[24px] overflow-hidden bg-white h-full">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-3 bg-[#C7619C] rounded-full p-5 cursor-pointer hover:opacity-90 transition-opacity shadow-lg">
                    <ArrowUpRight className="text-white" size={64} />
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
