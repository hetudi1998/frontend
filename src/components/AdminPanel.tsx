import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye, 
  EyeOff, 
  Upload,
  BookOpen,
  Calendar,
  User,
  Link,
  Image as ImageIcon
} from "lucide-react";

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

interface AdminPanelProps {
  onBlogsUpdate: (blogs: BlogPost[]) => void;
  currentBlogs: BlogPost[];
}

export default function AdminPanel({ onBlogsUpdate, currentBlogs }: AdminPanelProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const ADMIN_PASSWORD = "cinema2024";
  const [blogs, setBlogs] = useState<BlogPost[]>(currentBlogs);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>("");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "",
    author: "",
    date: "",
    readTime: "",
    image: "",
    linkedin: "",
    mask: "/src/assets/masks/mask2.svg"
  });

  const categories = [
    "Visual Narrative",
    "Film Analysis", 
    "Directorial Vision",
    "Cinematic Theory",
    "Mythological Studies",
    "Narrative Design",
    "Emotional Storytelling",
    "Character Archetypes"
  ];

  useEffect(() => {
    setBlogs(currentBlogs);
  }, [currentBlogs]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setFormData(prev => ({ ...prev, image: result }));
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && editingBlog) {
      // Update existing blog
      const updatedBlogs = blogs.map(blog => 
        blog.id === editingBlog.id 
          ? { ...formData, id: editingBlog.id }
          : blog
      );
      setBlogs(updatedBlogs);
      onBlogsUpdate(updatedBlogs);
      setEditingBlog(null);
      setIsEditing(false);
    } else {
      // Add new blog
      const newBlog: BlogPost = {
        ...formData,
        id: Date.now()
      };
      const updatedBlogs = [newBlog, ...blogs];
      setBlogs(updatedBlogs);
      onBlogsUpdate(updatedBlogs);
    }

    // Reset form
    setFormData({
      title: "",
      excerpt: "",
      category: "",
      author: "",
      date: "",
      readTime: "",
      image: "",
      linkedin: "",
      mask: "/src/assets/masks/mask2.svg"
    });
    setImagePreview("");
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setIsEditing(true);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      author: blog.author,
      date: blog.date,
      readTime: blog.readTime,
      image: blog.image,
      linkedin: blog.linkedin,
      mask: blog.mask
    });
    setImagePreview(blog.image);
  };

  const handleDelete = (id: number) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
    onBlogsUpdate(updatedBlogs);
  };

  const handleCancel = () => {
    setEditingBlog(null);
    setIsEditing(false);
    setFormData({
      title: "",
      excerpt: "",
      category: "",
      author: "",
      date: "",
      readTime: "",
      image: "",
      linkedin: "",
      mask: "/src/assets/masks/mask2.svg"
    });
    setImagePreview("");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Password modal handler
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
      setPasswordInput("");
    } else {
      setPasswordError("Incorrect password. Try again.");
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (!isAuthenticated) setIsVisible(true);
          else setIsVisible(!isVisible);
        }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isVisible && isAuthenticated ? <X className="w-6 h-6" /> : <Edit className="w-6 h-6" />}
      </motion.button>

      {/* Password Modal */}
      <AnimatePresence>
        {isVisible && !isAuthenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xs flex flex-col items-center"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900">Admin Access</h2>
              <form onSubmit={handlePasswordSubmit} className="w-full flex flex-col gap-4">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter admin password"
                  autoFocus
                />
                {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Unlock
                  </motion.button>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsVisible(false);
                    setPasswordInput("");
                    setPasswordError("");
                  }}
                  className="text-gray-400 hover:text-gray-700 text-xs mt-2"
                >
                  Cancel
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Panel */}
      <AnimatePresence>
        {isVisible && isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-40 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Blog Admin</h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Add/Edit Form */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  {isEditing ? <Edit className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  {isEditing ? "Edit Blog Post" : "Add New Blog Post"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter blog post title..."
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.excerpt}
                      onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Enter a brief excerpt..."
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Author *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter author name..."
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  {/* Read Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Read Time *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.readTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, readTime: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., 8 min read"
                    />
                  </div>

                  {/* LinkedIn URL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.linkedin}
                      onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="https://www.linkedin.com/pulse/..."
                    />
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blog Image *
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            required={!isEditing}
                          />
                        </label>
                      </div>
                      {imagePreview && (
                        <div className="relative">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-32 object-cover rounded-lg border"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      {isEditing ? "Update Post" : "Add Post"}
                    </motion.button>
                    {isEditing && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleCancel}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>

              {/* Blog Posts List */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Manage Blog Posts ({blogs.length})
                </h3>
                
                <div className="space-y-4">
                  {blogs.map((blog) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">
                            {blog.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {blog.category} • {formatDate(blog.date)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {blog.readTime} • {blog.author}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleEdit(blog)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDelete(blog.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 