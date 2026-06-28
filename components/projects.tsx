'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 2,
    title: 'Lost & Found Report System',
    category: 'developments',
    description: 'Interactive dashboard for visualizing business metrics and KPIs with real-time updates.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    preview: 'https://lfrs.wenuradenethpriya.com',
    github: 'https://github.com/VenuraDenethpriya/LFRS.git',
    images: [
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161143/Screenshot_301_abzbin.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161140/Screenshot_309_ppxewd.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161148/Screenshot_302_l9pzbe.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161141/Screenshot_304_giu6gw.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161141/Screenshot_303_hmfppn.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161141/Screenshot_305_ybu1va.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161140/Screenshot_308_w9wskd.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780161140/Screenshot_307_m7aj5m.png',
    ],
  },
  {
    id: 5,
    title: 'ERP System',
    category: 'developments',
    description: 'Comprehensive component library and design system for enterprise applications.',
    tags: ['React', 'Go Lang', 'PostgreSQL', 'Docker', 'GitHub Actions', 'AWS'],
    preview: 'https://coresync.wenuradenethpriya.com/',
    github: 'https://github.com/VenuraDenethpriya/CoreSync-ERP.git',
    images: [
      // 'https://res.cloudinary.com/dlccif9no/image/upload/v1780162998/Screenshot_318_ufqugj.png',
      // 'https://res.cloudinary.com/dlccif9no/image/upload/v1780163003/Screenshot_323_uszn1j.png',
      // 'https://res.cloudinary.com/dlccif9no/image/upload/v1780162997/Screenshot_321_p9huaw.png',
      // 'https://res.cloudinary.com/dlccif9no/image/upload/v1780162997/Screenshot_320_kungoz.png',
      // 'https://res.cloudinary.com/dlccif9no/image/upload/v1780162997/Screenshot_322_ottk0p.png',
    ],
  },
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'developments',
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
    id: 4,
    title: 'Renewaa Site',
    category: 'developments',
    description: 'Comprehensive component library and design system for enterprise applications.',
    tags: ['Next.js', 'Docker', 'GitHub Actions'],
    preview: 'https://renewaa.com',
    github: 'https://github.com/VenuraDenethpriya/Renewaa-Website.git',
    images: [
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162998/Screenshot_318_ufqugj.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780163003/Screenshot_323_uszn1j.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162997/Screenshot_321_p9huaw.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162997/Screenshot_320_kungoz.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162997/Screenshot_322_ottk0p.png',
    ],
  },
  {
    id: 3,
    title: 'Travel Agency Site',
    category: 'developments',
    description: 'Full-featured social networking application with messaging, notifications, and feeds.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    preview: 'https://travelagency.wenuradenethpriya.com',
    github: 'https://github.com/VenuraDenethpriya/travel_agency.git',
    images: [
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162009/Screenshot_310_wgp2wg.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162008/Screenshot_311_swqlsi.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162009/Screenshot_313_mddypc.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162007/Screenshot_314_riicvf.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162009/Screenshot_316_bupqui.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162010/Screenshot_315_emtvm3.png',
      'https://res.cloudinary.com/dlccif9no/image/upload/v1780162008/Screenshot_312_gvy2t2.png',
    ],
  },
  {
    id: 15,
    title: 'Automating AWS DNS Pinholes with Go',
    category: 'devOps',
    description: 'A comprehensive guide to automating AWS DNS pinholes and managing Route 53 records programmatically using Go.',
    tags: ['Go', 'AWS', 'Route 53', 'Automation'],
    preview: 'https://medium.com/@venurameedum/automating-aws-dns-pinholes-with-go-a489909f0afc',
    github: '',
    images: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg'],
  },
  {
    id: 13,
    title: 'Monitoring with Prometheus & Grafana',
    category: 'devOps',
    description: 'Building a complete DevOps control room to monitor application health using Prometheus and Grafana.',
    tags: ['Prometheus', 'Grafana', 'Monitoring', 'DevOps'],
    preview: 'https://medium.com/@venurameedum/building-a-devops-control-room-monitoring-application-health-with-prometheus-and-grafana-321c95259d06',
    github: '',
    images: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg'],
  },
  {
    id: 14,
    title: 'GitOps: Zero Downtime Deployments',
    category: 'devOps',
    description: 'Implementing GitOps practices to achieve seamless, zero downtime deployments for microservices architectures.',
    tags: ['GitOps', 'Microservices', 'CI/CD', 'DevOps'],
    preview: 'https://medium.com/@venurameedum/implementing-gitops-achieving-zero-downtime-deployments-for-a-microservices-architecture-b16a17588c3e',
    github: '',
    images: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'],
  },
  {
    id: 12,
    title: 'Zero to Cloud: AWS with Terraform',
    category: 'devOps',
    description: 'A comprehensive guide to provisioning and deploying your first AWS EC2 server using Terraform for Infrastructure as Code (IaC).',
    tags: ['Terraform', 'AWS EC2', 'IaC', 'Cloud'],
    preview: 'https://medium.com/@venurameedum/zero-to-cloud-deploying-your-first-aws-server-with-terraform-520f742504e3',
    github: '',
    images: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg'],
  },
  {
    id: 6,
    title: 'Enterprise CI/CD for React & Go',
    category: 'devOps',
    description: 'How to build an enterprise-grade CI/CD pipeline using Docker, GitHub Actions, and AWS.',
    tags: ['Docker', 'GitHub Actions', 'AWS', 'CI/CD'],
    preview: 'https://medium.com/@venurameedum/how-to-build-an-enterprise-grade-ci-cd-pipeline-for-react-go-using-docker-github-actions-aws-bd971c7d079b',
    github: '',
    images: ['https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 7,
    title: 'Automating MERN Deployments',
    category: 'devOps',
    description: 'A comprehensive guide to automating MERN stack deployments with Docker, Jenkins, and Trivy.',
    tags: ['Docker', 'Jenkins', 'Trivy', 'MERN'],
    preview: 'https://medium.com/@venurameedum/automating-mern-stack-deployments-with-docker-jenkins-and-trivy-ca7880bfefeb',
    github: '',
    images: ['https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 8,
    title: 'React & Laravel Jenkins CI/CD on AWS',
    category: 'devOps',
    description: 'The ultimate guide to deploying a React & Laravel app with a Jenkins CI/CD pipeline on AWS EC2.',
    tags: ['Jenkins', 'AWS EC2', 'React', 'Laravel'],
    preview: 'https://medium.com/@venurameedum/the-ultimate-guide-to-deploying-a-react-laravel-app-with-a-jenkins-ci-cd-pipeline-on-aws-ec2-4cfd9daafd2a',
    github: '',
    images: ['https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 9,
    title: 'Auto-Deploy React Vite App on AWS',
    category: 'devOps',
    description: 'A complete guide to auto-deploying a React Vite application on an AWS EC2 instance using GitHub Actions.',
    tags: ['AWS EC2', 'GitHub Actions', 'React', 'Vite'],
    preview: 'https://medium.com/@venurameedum/a-complete-guide-to-auto-deploying-a-react-vite-app-on-aws-ec2-using-github-actions-dffaf833fa1b',
    github: '',
    images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 10,
    title: 'Auto-Deploy Node.js on AWS EC2',
    category: 'devOps',
    description: 'Learn how to automatically deploy a Node.js backend to AWS EC2 using GitHub Actions.',
    tags: ['Node.js', 'AWS EC2', 'GitHub Actions'],
    preview: 'https://medium.com/@venurameedum/a-complete-guide-to-auto-deploying-a-node-js-app-on-aws-ec2-using-github-actions-1b5bd0b7d5d7',
    github: '',
    images: ['https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop'],
  },
  {
    id: 11,
    title: 'Jenkins Installation on AWS EC2',
    category: 'devOps',
    description: 'Step-by-step tutorial on how to install and configure Jenkins on an AWS EC2 instance.',
    tags: ['Jenkins', 'AWS EC2', 'Linux'],
    preview: 'https://medium.com/@venurameedum/jenkins-installation-on-aws-ec2-instance-09beb8d689ee',
    github: '',
    images: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg'],
  }
];

const categories = ['all', 'developments', 'devOps'];

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
              className={`px-6 py-2 rounded-full font-semibold text-sm capitalize transition-all ${activeCategory === category
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
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
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
                    onClick={() => {
                      // ✨ NEW LOGIC: Open Medium directly for devOps, open modal for developments
                      if (project.category === 'devOps') {
                        window.open(project.preview, '_blank', 'noopener,noreferrer');
                      } else {
                        openPreview(project.id, currentImageIndex);
                      }
                    }}
                  />

                  {/* Image Navigation (Only shows if more than 1 image) */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          prevImage(project.id, project.images.length);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                      >
                        ←
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
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
                            className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'
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
                      {/* ✨ NEW LOGIC: Change button text based on category */}
                      {project.category === 'devOps' ? 'Read Article' : 'Preview'}
                    </motion.a>

                    {/* ✨ NEW LOGIC: Only render GitHub button if a link exists */}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/50 text-purple-300 rounded-lg font-semibold text-sm transition-all text-center"
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Image Preview Modal (Remains Unchanged) */}
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
                  src={
                    projects.find((p) => p.id === previewModal.projectId)?.images[
                    previewModal.imageIndex
                    ]
                  }
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
                    {previewModal.imageIndex + 1} /{' '}
                    {projects.find((p) => p.id === previewModal.projectId)?.images.length}
                  </motion.p>

                  {/* Dot Indicators */}
                  <div className="flex gap-2 flex-wrap justify-center max-w-xs">
                    {projects
                      .find((p) => p.id === previewModal.projectId)
                      ?.images.map((_, idx) => (
                        <motion.button
                          key={idx}
                          className={`rounded-full transition-all ${idx === previewModal.imageIndex
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
