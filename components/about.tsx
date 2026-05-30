'use client';

import { motion } from 'framer-motion';
import { Cloud, Database, Layout, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Gradient Border Background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]" />

            {/* Inner Content */}
            <div className="relative bg-slate-900 rounded-2xl p-1 overflow-hidden">
              <div className="w-full aspect-square bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                <motion.img
                  src="https://res.cloudinary.com/dlccif9no/image/upload/v1780129068/IMG_9505_1_nlwkek.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass px-4 py-2 rounded-lg"
            >
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Software Engineer
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-6 -right-6 glass px-4 py-2 rounded-lg"
            >
              <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                1+ Years
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-slate-200 text-lg leading-relaxed mb-6 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              I&apos;m a passionate developer with 1+ years of experience building web applications.
              My journey started with curiosity and has evolved into a career focused on creating
              delightful user experiences.
            </motion.p>

            <motion.p
              className="text-slate-300 text-base leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              When I&apos;m not coding, you can usually find me experimenting with emerging technologies
            </motion.p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Zap, label: 'Full Stack Development', color: 'text-cyan-400' },
                { icon: Layout, label: 'Minimalist UI/UX', color: 'text-purple-400' },
                { icon: Cloud, label: 'Cloud & CI/CD', color: 'text-rose-400' },
                { icon: Database, label: 'Database Management', color: 'text-blue-400' },
              ].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 ${skill.color}`} />
                    <span className="text-sm font-medium text-slate-200">{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 text-blue-300 hover:border-blue-400 font-semibold transition-all duration-300"
            >
              Let&apos;s Connect
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
