'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'Shadcn', 'Framer Motion'],
  },
  {
    title: 'Backend',
    skills: ['Go (Golang)', 'Node.js', 'Express', 'Python', 'RESTful APIs'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'AWS', 'GCP', 'Azure', 'Oracle Cloud', 'Vercel', 'Cloudflare'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Linux', 'Jenkins', 'Terraform'],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass p-8 hover:bg-white/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ translateY: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      borderColor: 'rgb(96, 165, 250)',
                      color: 'rgb(147, 197, 253)',
                      scale: 1.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
