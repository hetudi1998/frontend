import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { getAllPosts } from "./Api"; // Make sure the path to api.js is correct

type BlogPost = {
  id: string | number;
  image: string;
  title: string;
  category: string;
  author: string;
  date: string;
};

export default function BlogPostSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
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
