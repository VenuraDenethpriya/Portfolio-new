'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'fullstack',
    description: 'A modern e-commerce solution with real-time inventory management and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    preview: 'https://technest.wenuradenethpriya.com',
    github: 'https://github.com/VenuraDenethpriya/E-commerce-site.git',
    images: [
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143035/Screenshot_289_lkcgnu.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143035/Screenshot_290_mjrioz.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143035/Screenshot_291_dindwo.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143034/Screenshot_292_yaekpj.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143034/Screenshot_293_m0mbms.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143035/Screenshot_294_svcxdg.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143034/Screenshot_296_irwq19.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143034/Screenshot_295_ga9nv4.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143034/Screenshot_297_jx4uiv.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780143034/Screenshot_298_odm0kx.png',
    ],
  },
  {
    id: 2,
    title: 'Lost & Found Report System',
    category: 'frontend',
    description: 'Interactive dashboard for visualizing business metrics and KPIs with real-time updates.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    preview: 'https://lfrs.wenuradenethpriya.com',
    github: 'https://github.com/VenuraDenethpriya/LFRS.git',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=300&fit=crop',
    ],
  },
  {
    id: 3,
    title: 'Social Media App',
    category: 'fullstack',
    description: 'Full-featured social networking application with messaging, notifications, and feeds.',
    tags: ['Next.js', 'PostgreSQL', 'Real-time'],
    preview: 'https://example.com/social',
    github: 'https://github.com/example/social',
    images: [
      'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1516414775068-bb385b6b91b6?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    ],
  },
  {
    id: 4,
    title: 'Design System',
    category: 'frontend',
    description: 'Comprehensive component library and design system for enterprise applications.',
    tags: ['React', 'Storybook', 'Tailwind CSS'],
    preview: 'https://example.com/design-system',
    github: 'https://github.com/example/design-system',
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    ],
  },
  {
    id: 5,
    title: 'AI Chat Application',
    category: 'fullstack',
    description: 'Intelligent chatbot powered by machine learning with context awareness.',
    tags: ['Python', 'FastAPI', 'React', 'TensorFlow'],
    preview: 'https://example.com/ai-chat',
    github: 'https://github.com/example/ai-chat',
    images: [
      'https://images.unsplash.com/photo-1515378791036-0648a3e3d34d?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f5ae4e8e7f9?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    ],
  },
  {
    id: 6,
    title: 'Mobile App',
    category: 'frontend',
    description: 'Cross-platform mobile application with offline support and sync capabilities.',
    tags: ['React Native', 'Firebase', 'Redux'],
    preview: 'https://example.com/mobile',
    github: 'https://github.com/example/mobile',
    images: [
      'https://images.unsplash.com/photo-1512941691920-25bef266aad1?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511376979264-c8440dd00c5e?w=500&h=300&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f5ae4e8e7f9?w=500&h=300&fit=crop',
    ],
  },
];

const categories = ['all', 'frontend', 'fullstack'];

interface PreviewState {
  isOpen: boolean;
  projectId: number | null;
  imageIndex: number;
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<{ [key: number]: number }>({});
  const [previewModal, setPreviewModal] = useState<PreviewState>({
    isOpen: false,
    projectId: null,
    imageIndex: 0,
  });

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getImageIndex = (projectId: number) => selectedImageIndex[projectId] || 0;

  const nextImage = (projectId: number, totalImages: number) => {
    setSelectedImageIndex((prev) => {
      const currentIndex = prev[projectId] ?? 0;
      return {
        ...prev,
        [projectId]: (currentIndex + 1) % totalImages,
      };
    });
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setSelectedImageIndex((prev) => {
      const currentIndex = prev[projectId] ?? 0;
      return {
        ...prev,
        [projectId]: (currentIndex - 1 + totalImages) % totalImages,
      };
    });
  };

  const openPreview = (projectId: number, imageIndex: number) => {
    setPreviewModal({ isOpen: true, projectId, imageIndex });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, projectId: null, imageIndex: 0 });
  };

  const nextPreviewImage = () => {
    if (previewModal.projectId === null) return;
    const project = projects.find((p) => p.id === previewModal.projectId);
    if (project) {
      setPreviewModal((prev) => ({
        ...prev,
        imageIndex: (prev.imageIndex + 1) % project.images.length,
      }));
    }
  };

  const prevPreviewImage = () => {
    if (previewModal.projectId === null) return;
    const project = projects.find((p) => p.id === previewModal.projectId);
    if (project) {
      setPreviewModal((prev) => ({
        ...prev,
        imageIndex: (prev.imageIndex - 1 + project.images.length) % project.images.length,
      }));
    }
  };

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm capitalize transition-all ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'glass text-slate-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => {
            const currentImageIndex = getImageIndex(project.id);
            const currentImage = project.images[currentImageIndex];

            return (
              <motion.div
                key={project.id}
                className="glass group overflow-hidden flex flex-col h-full rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ translateY: -10 }}
              >
                {/* Image Carousel */}
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 cursor-pointer">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => openPreview(project.id, currentImageIndex)}
                  />

                  {/* Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          prevImage(project.id, project.images.length);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      >
                        ←
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          nextImage(project.id, project.images.length);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      >
                        →
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {project.images.map((_, idx) => (
                          <motion.div
                            key={idx}
                            className={`h-2 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? 'w-6 bg-white'
                                : 'w-2 bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-slate-800/50 border border-slate-700 rounded-full text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <motion.a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/50 text-blue-300 rounded-lg font-semibold text-sm transition-all text-center"
                    >
                      Preview
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/50 text-purple-300 rounded-lg font-semibold text-sm transition-all text-center"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewModal.isOpen && previewModal.projectId !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="relative w-full h-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full text-white transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={closePreview}
              >
                ✕
              </motion.button>

              {/* Image Display */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  key={previewModal.imageIndex}
                  src={projects.find((p) => p.id === previewModal.projectId)?.images[previewModal.imageIndex]}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Navigation Buttons */}
                {projects.find((p) => p.id === previewModal.projectId)?.images.length! > 1 && (
                  <>
                    <motion.button
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevPreviewImage}
                    >
                      ←
                    </motion.button>

                    <motion.button
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextPreviewImage}
                    >
                      →
                    </motion.button>
                  </>
                )}
              </div>

              {/* Image Counter and Indicators */}
              {projects.find((p) => p.id === previewModal.projectId) && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                  {/* Counter */}
                  <motion.p className="text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                    {previewModal.imageIndex + 1} / {projects.find((p) => p.id === previewModal.projectId)?.images.length}
                  </motion.p>

                  {/* Dot Indicators */}
                  <div className="flex gap-2 flex-wrap justify-center max-w-xs">
                    {projects
                      .find((p) => p.id === previewModal.projectId)
                      ?.images.map((_, idx) => (
                        <motion.button
                          key={idx}
                          className={`rounded-full transition-all ${
                            idx === previewModal.imageIndex
                              ? 'w-3 h-3 bg-white'
                              : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                          }`}
                          onClick={() =>
                            setPreviewModal((prev) => ({
                              ...prev,
                              imageIndex: idx,
                            }))
                          }
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* Project Info */}
              {projects.find((p) => p.id === previewModal.projectId) && (
                <motion.div
                  className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-lg text-white max-w-xs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-bold text-sm">
                    {projects.find((p) => p.id === previewModal.projectId)?.title}
                  </h4>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
