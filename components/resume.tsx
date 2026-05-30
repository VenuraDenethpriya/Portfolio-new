'use client';

import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';

export function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const resumeUrl = '/WenuraResume.pdf';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Wenura Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-container bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-slate-300">Download or preview my comprehensive resume</p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          variants={itemVariants}
          className="glass-hover p-8 rounded-lg mb-8 border-l-4 border-l-blue-400"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Full Resume</h3>
              <p className="text-slate-300 mb-4">
                Complete overview of my professional experience, skills, education, and certifications.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ Professional Experience & Achievements</li>
                <li>✓ Technical Skills & Expertise</li>
                <li>✓ Education & Certifications</li>
                <li>✓ Project Highlights</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 md:flex-row">
              <motion.button
                onClick={() => setIsPreviewOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/50 text-purple-300 rounded-lg font-semibold transition-all"
              >
                <Eye size={20} />
                Preview
              </motion.button>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/50 text-blue-300 rounded-lg font-semibold transition-all"
              >
                <Download size={20} />
                Download PDF
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Resume Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years Experience', value: '1+' },
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies', value: '10+' },
            { label: 'Certifications', value: '4+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-lg text-center"
            >
              <p className="text-2xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Preview Modal */}
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-950 rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10"
            >
              {/* Modal Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/95 backdrop-blur">
                <h3 className="text-xl font-bold text-white">Resume Preview</h3>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 text-slate-300">
                <div className="bg-white text-black rounded-lg p-8 space-y-6">
                  {/* Header */}
                  <div className="text-center border-b pb-6">
                    <h1 className="text-3xl font-bold text-black mb-2">Wenura Denethpriya</h1>
                    <p className="text-slate-600">Full Stack Developer | React | Node.js | Cloud Architecture</p>
                    <div className="flex justify-center gap-4 mt-4 text-sm text-slate-600">
                      <span>📧 wenuradenethpriya.com</span>
                      <span>📱 +94 77 306 2266</span>
                      <span>📍 Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h2 className="text-lg font-bold text-black mb-2">Professional Summary</h2>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Experienced full-stack developer with 1+ years of expertise in building scalable web applications. 
                      Proficient in React, Node.js, and cloud technologies. Proven track record of delivering high-quality 
                      solutions and leading cross-functional teams.
                    </p>
                  </div>

                  {/* Experience */}
                  <div>
                    <h2 className="text-lg font-bold text-black mb-3">Professional Experience</h2>
                    <div className="space-y-4 text-sm">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-black">Software Engineer</h3>
                            <p className="text-slate-600">Renewaa Pvt. Ltd</p>
                          </div>
                          <span className="text-slate-600">Oct. 2025 - Present</span>
                        </div>
                        <p className="text-slate-700 mt-1">Developing client-facing applications and implemented design systems.</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-black">Intern Software Engineer</h3>
                            <p className="text-slate-600">Renewaa Pvt. Ltd</p>
                          </div>
                          <span className="text-slate-600">Apr. 2025 - Oct. 2025</span>
                        </div>
                        <p className="text-slate-700 mt-1">Developed client-facing applications and implemented design systems.</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h2 className="text-lg font-bold text-black mb-2">Technical Skills</h2>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-black mb-1">Frontend & Mobile</p>
                        <p className="text-slate-700">React, Next.js, TypeScript, Flutter, Tailwind CSS, Shadcn, Framer Motion</p>
                      </div>
                      <div>
                        <p className="font-semibold text-black mb-1">Backend</p>
                        <p className="text-slate-700">Go (Golang), Node.js, Express, Python, RESTful APIs</p>
                      </div>
                      <div>
                        <p className="font-semibold text-black mb-1">Databases & Cloud</p>
                        <p className="text-slate-700">MongoDB, PostgreSQL, Supabase, AWS, GCP, Azure, Oracle Cloud, Vercel</p>
                      </div>
                      <div>
                        <p className="font-semibold text-black mb-1">DevOps & Tools</p>
                        <p className="text-slate-700">Docker, Kubernetes, GitHub Actions, Linux, Jenkins</p>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-lg font-bold text-black mb-2">Education</h2>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-semibold text-black">Bachelor of Science Honours in Business Information Systems</p>
                        <p className="text-slate-600">University of Sri Jayewardenepura, Sri Lanka • 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 flex gap-3 p-6 border-t border-white/10 bg-slate-900/95 backdrop-blur">
                <motion.button
                  onClick={() => setIsPreviewOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all"
                >
                  Close
                </motion.button>
                <motion.button
                  onClick={() => {
                    handleDownload();
                    setIsPreviewOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/50 text-blue-300 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
