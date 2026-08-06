import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Search,
  Clock,
  ThumbsUp,
  MessageSquare,
  X,
  Send,
  Calendar
} from 'lucide-react';
import { BlogPost, BlogComment } from '../types';

interface BlogProps {
  blogs: BlogPost[];
}

export const Blog: React.FC<BlogProps> = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);
  const [newCommentAuthor, setNewCommentAuthor] = useState<string>('');
  const [newCommentContent, setNewCommentContent] = useState<string>('');
  const [blogListState, setBlogListState] = useState<BlogPost[]>(blogs);

  const allTags = ['All', ...Array.from(new Set(blogListState.flatMap((b) => b.tags)))];

  const filteredBlogs = blogListState.filter((b) => {
    const matchesTag = selectedTag === 'All' || b.tags.includes(selectedTag);
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBlogListState((prev) =>
      prev.map((b) => (b.id === id ? { ...b, likes: b.likes + 1 } : b))
    );
    if (activeBlog && activeBlog.id === id) {
      setActiveBlog((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeBlog || !newCommentAuthor.trim() || !newCommentContent.trim()) return;

    const newComment: BlogComment = {
      id: `c-${Date.now()}`,
      author: newCommentAuthor.trim(),
      content: newCommentContent.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    const updatedBlog = {
      ...activeBlog,
      comments: [...activeBlog.comments, newComment]
    };

    setActiveBlog(updatedBlog);
    setBlogListState((prev) =>
      prev.map((b) => (b.id === activeBlog.id ? updatedBlog : b))
    );

    setNewCommentAuthor('');
    setNewCommentContent('');
  };

  return (
    <section id="blogs" className="py-20 relative overflow-hidden">
      <div className="w-[85%] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Technical Insights & Writings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Software Engineering &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-300 dark:to-blue-400">
              AI Articles
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            In-depth engineering tutorials, Next.js architecture guides, Gemini AI integration patterns, and security blueprints.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Tags */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none bg-white/80 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedTag === tag
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-500 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 backdrop-blur-md shadow-sm dark:shadow-none"
            />
          </div>
        </div>

        {/* Blog Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              onClick={() => setActiveBlog(post)}
              className="p-6 rounded-3xl bg-white/80 dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between backdrop-blur-md"
            >
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#0a0f1d] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{post.publishedAt}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed font-light">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleLike(post.id, e)}
                    className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>{post.likes}</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{post.comments.length}</span>
                  </span>
                </div>

                <span className="text-indigo-400 font-bold group-hover:underline">
                  Read Article →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Reader */}
        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {activeBlog && (
                <div
                  onClick={() => setActiveBlog(null)}
                  className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/90 dark:bg-slate-950/95 backdrop-blur-2xl overflow-y-auto"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0a0f1d] text-slate-900 dark:text-white rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 shadow-2xl overflow-y-auto my-8 space-y-8"
                  >
                    <button
                      onClick={() => setActiveBlog(null)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Article Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold">
                          {activeBlog.category}
                        </span>
                        <span>{activeBlog.publishedAt}</span>
                        <span>•</span>
                        <span>{activeBlog.readTime}</span>
                      </div>

                      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                        {activeBlog.title}
                      </h1>

                      <div className="flex items-center gap-3 pt-2">
                        <img
                          src={activeBlog.author.avatar}
                          alt=""
                          className="w-10 h-10 rounded-full border border-indigo-500"
                        />
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            {activeBlog.author.name}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">Senior Software Engineer</span>
                        </div>
                      </div>
                    </div>

                    {/* Article Banner */}
                    <div className="h-64 rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-white/10">
                      <img src={activeBlog.image} alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Article Content */}
                    <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed font-sans whitespace-pre-wrap font-light">
                      {activeBlog.content}
                    </div>

                    {/* Article Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/10">
                      {activeBlog.tags.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Like Button */}
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Did you find this technical article helpful?
                      </span>
                      <button
                        onClick={(e) => handleLike(activeBlog.id, e)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 shadow-md cursor-pointer transition-colors"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>Like Article ({activeBlog.likes})</span>
                      </button>
                    </div>

                    {/* Comments Section */}
                    <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-white/10">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <span>Comments ({activeBlog.comments.length})</span>
                      </h3>

                      {/* Add Comment Form */}
                      <form onSubmit={handleAddComment} className="space-y-3 bg-slate-50 dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-white/10">
                        <input
                          type="text"
                          placeholder="Your name or title (e.g. Lead Engineer)..."
                          value={newCommentAuthor}
                          onChange={(e) => setNewCommentAuthor(e.target.value)}
                          required
                          className="w-full p-2.5 rounded-xl bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                        <textarea
                          placeholder="Share your technical thoughts or feedback..."
                          value={newCommentContent}
                          onChange={(e) => setNewCommentContent(e.target.value)}
                          required
                          rows={3}
                          className="w-full p-2.5 rounded-xl bg-white dark:bg-[#0a0f1d] border border-slate-200 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer hover:bg-indigo-500 transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Post Comment</span>
                        </button>
                      </form>

                      {/* Comment List */}
                      <div className="space-y-3">
                        {activeBlog.comments.map((c) => (
                          <div
                            key={c.id}
                            className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1 text-xs"
                          >
                            <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                              <span>{c.author}</span>
                              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{c.date}</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">{c.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}

      </div>
    </section>
  );
};
