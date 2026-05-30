'use client';

import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Jenkins installation on AWS EC2 instance',
    excerpt: 'Explore the latest features and improvements in Next.js 14 and how to leverage them.',
    date: 'Mar 15, 2024',
    readTime: '1 min read',
    category: 'Tutorial',
    link: ''
  },
  {
    id: 2,
    title: 'Mastering Framer Motion Animations',
    excerpt: 'A comprehensive guide to creating smooth, performant animations with Framer Motion.',
    date: 'Mar 10, 2024',
    readTime: '12 min read',
    category: 'Guide',
  },
  {
    id: 3,
    title: 'React Hooks Best Practices',
    excerpt: 'Learn the best practices for using React Hooks and common pitfalls to avoid.',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    category: 'Tips',
  },
  {
    id: 4,
    title: 'Building Scalable APIs',
    excerpt: 'Strategies for designing APIs that can handle growth and scale effectively.',
    date: 'Feb 28, 2024',
    readTime: '10 min read',
    category: 'Architecture',
  },
];

export function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="section-container">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest <span className="gradient-text">Articles</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="glass p-8 flex flex-col hover:bg-white/20 transition-all duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-400 uppercase">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h3>

              <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                <time className="text-xs text-slate-500">{post.date}</time>
                <span className="text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
