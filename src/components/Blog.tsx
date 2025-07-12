import { Calendar, User, BookOpen, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // 🔁 adjust path if needed
import AdminPanel from "./AdminPanel";

interface BlogPost {
  id: string;
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 4);

  // Fetch from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date:
            typeof data.date === "string"
              ? data.date
              : data.date?.toDate().toISOString().split("T")[0],
        };
      }) as BlogPost[];
      setBlogPosts(posts);
    });

    return () => unsubscribe();
  }, []);

 

  const formatDisplayDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (blogPosts.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-lg text-gray-500">
        Loading blog posts...
      </div>
    );
  }

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