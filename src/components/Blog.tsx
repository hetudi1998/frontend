import { Calendar, User, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AdminPanel from "./AdminPanel";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  mask: string;
  linkedin: string;
}

export default function BlogPostSection() {
  // Default blog posts
  const defaultBlogPosts: BlogPost[] = [
    {
      id: 1,
      image: "/src/assets/blog/blogpost1.jpg",
      category: "Visual Narrative",
      author: "Hetansa R",
      date: "2025-03-05",
      title: "The Hero's Journey in Hindu Mythology: Beyond the Western Arc",
      excerpt: "Exploring the timeless narratives of Hindu mythology and their profound impact on modern storytelling...",
      readTime: "8 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/heros-journey-hindu-mythology-beyond-western-arc-hetansa-rajkotia-u3dsf"
    },
    {
      id: 2,
      image: "/src/assets/blog/blogpost2.jpg",
      category: "Film Analysis",
      author: "Hetansa R",
      date: "2025-02-11",
      title: "The Self-Discovery Journey in Tamasha",
      excerpt: "A deep dive into the cinematic masterpiece that explores identity, dreams, and the courage to be authentic...",
      readTime: "6 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/self-discovery-journey-tamasha-hetansa-rajkotia-topsf"
    },
    {
      id: 3,
      image: "/src/assets/blog/blogpost3.jpg",
      category: "Directorial Vision",
      author: "Hetansa R",
      date: "2025-01-25",
      title: "Life Through a Cinematic Lens",
      excerpt: "How everyday moments transform into extraordinary stories when viewed through the lens of cinema...",
      readTime: "7 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/life-through-cinematic-lens-hetansa-rajkotia-yyfgc"
    },
    {
      id: 4,
      image: "https://picsum.photos/400/300?image=10",
      category: "Cinematic Theory",
      author: "Hetansa R",
      date: "2023-05-25",
      title: "Lights, Colour, Action: How Theory of Filmmaking Aesthetics",
      excerpt: "Understanding the fundamental principles that make visual storytelling compelling and emotionally resonant...",
      readTime: "10 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/lights-colour-action-how-theory-filmmaking-aesthetics-rajkotia-tkowf"
    },
    {
      id: 5,
      image: "https://picsum.photos/400/300?image=20",
      category: "Mythological Studies",
      author: "Hetansa R",
      date: "2023-05-25",
      title: "From Yugas to Screenplays: Eternal Cycles of Storytelling",
      excerpt: "How ancient Indian concepts of time and cycles influence modern narrative structures...",
      readTime: "9 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/from-yugas-screenplays-eternal-cycles-storytelling-hetansa-rajkotia-1b4kf"
    },
    {
      id: 6,
      image: "https://picsum.photos/400/300?image=30",
      category: "Narrative Design",
      author: "Hetansa R",
      date: "2023-05-25",
      title: "Timeless Craft: Mythological Narratives & Structures of the Soul",
      excerpt: "The art of crafting stories that resonate with the deepest parts of human consciousness...",
      readTime: "12 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/timeless-craft-mythological-narratives-structures-soul-rajkotia-notzf"
    },
    {
      id: 7,
      image: "https://picsum.photos/400/300?image=40",
      category: "Emotional Storytelling",
      author: "Hetansa R",
      date: "2023-05-25",
      title: "Emotional Tapestry of Hi Nanna: Story of Love, Loss & Connection",
      excerpt: "Analyzing the delicate balance of emotions in contemporary Indian cinema...",
      readTime: "8 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/emotional-tapestry-hi-nanna-story-love-loss-bridge-between-rajkotia-fadxf"
    },
    {
      id: 8,
      image: "https://picsum.photos/400/300?image=50",
      category: "Character Archetypes",
      author: "Hetansa R",
      date: "2023-05-25",
      title: "Beyond Good & Evil: Lessons from Hindu Mythology's Villains",
      excerpt: "Understanding the complexity of antagonists and what they teach us about human nature...",
      readTime: "11 min read",
      mask: "/src/assets/masks/mask2.svg",
      linkedin: "https://www.linkedin.com/pulse/beyond-good-evil-lessons-hindu-mythologys-villains-hetansa-rajkotia-wwfff"
    }
  ];

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);
  const [showAll, setShowAll] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 4);

  // Auto-scroll effect for featured post
  useEffect(() => {
    const handleScroll = () => {
      // This effect is no longer needed as scrollY is removed.
      // Keeping it for now as per instructions, but it will be removed in a subsequent edit.
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load blogs from localStorage on component mount
  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogPosts');
    if (savedBlogs) {
      try {
        const parsedBlogs = JSON.parse(savedBlogs);
        setBlogPosts(parsedBlogs);
      } catch (error) {
        console.error('Error loading blogs from localStorage:', error);
        setBlogPosts(defaultBlogPosts);
      }
    }
  }, []);

  // Handle blog updates from admin panel
  const handleBlogsUpdate = (updatedBlogs: BlogPost[]) => {
    setBlogPosts(updatedBlogs);
    // Save to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
  };

  // Format date for display
  const formatDisplayDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Subtle background tint */}
      <div className="absolute inset-0 bg-background" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary px-6 py-3 rounded-full mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Cinematic Insights</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-6">
            Stories That Illuminate
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of mythology, cinema, and human experience through thoughtful analysis and creative storytelling.
          </p>
        </motion.div>

        {/* Featured Post (First Post) */}
        {visiblePosts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 border-2 border-primary" />
              <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-primary shadow-2xl flex flex-col lg:flex-row">
                {/* Image on the left, always visible and fills height */}
                <div className="relative w-full lg:w-1/2 min-h-[260px] lg:min-h-[400px] flex-shrink-0 flex items-stretch">
                  <img 
                    src={visiblePosts[0].image}
                    alt={visiblePosts[0].title}
                    className="w-full h-full object-cover rounded-3xl border-b-4 border-primary"
                    style={{ minHeight: '260px', maxHeight: '500px' }}
                  />
                </div>
                {/* Content on the right */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary px-4 py-2 rounded-full mb-6 w-fit">
                    <span className="text-primary font-semibold text-sm">{visiblePosts[0].category}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 leading-tight">
                    {visiblePosts[0].title}
                  </h3>
                  <p className="text-text-light text-lg mb-8 leading-relaxed">
                    {visiblePosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-primary mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-semibold">{visiblePosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">{formatDisplayDate(visiblePosts[0].date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-semibold">{visiblePosts[0].readTime}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(visiblePosts[0].linkedin, '_blank')}
                    className="inline-flex items-center gap-3 bg-primary text-white font-extrabold px-8 py-4 rounded-full hover:bg-secondary transition-all duration-300 w-fit group shadow-lg border-2 border-primary"
                    style={{ backgroundColor: '#287094', color: '#fff' }}
                  >
                    <span>Read Full Article</span>
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid Posts */}
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visiblePosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredPost(post.id)}
                onHoverEnd={() => setHoveredPost(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 border border-primary" />
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-primary shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <motion.div
                      animate={{ scale: hoveredPost === post.id ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-48"
                    >
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-2xl border-b-4 border-primary"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent"></div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(post.linkedin, '_blank')}
                        className="absolute top-4 right-4 bg-primary text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-secondary border border-primary shadow"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary px-3 py-1 rounded-full mb-4">
                      <span className="text-primary font-semibold text-sm">{post.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-light text-sm mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-primary text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span className="font-semibold">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span className="font-semibold">{formatDisplayDate(post.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span className="font-semibold">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More / See Less Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 bg-primary text-white font-extrabold px-8 py-4 rounded-full hover:bg-secondary transition-all duration-300 group shadow-lg border-2 border-primary"
            style={{ backgroundColor: '#287094', color: '#fff' }}
          >
            <span> {showAll ? "See Less" : "See More"} </span>
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {showAll ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              )}
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Admin Panel */}
      <AdminPanel 
        onBlogsUpdate={handleBlogsUpdate}
        currentBlogs={blogPosts}
      />

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