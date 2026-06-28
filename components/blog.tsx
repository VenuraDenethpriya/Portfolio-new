'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Automating AWS DNS Pinholes with Go',
    excerpt: 'A comprehensive guide to automating AWS DNS pinholes and managing Route 53 records programmatically using Go.',
    date: 'Recent',
    readTime: '5 min read',
    category: 'Go',
    link: 'https://medium.com/@venurameedum/automating-aws-dns-pinholes-with-go-a489909f0afc'
  },
  {
    id: 2,
    title: 'Monitoring Application Health with Prometheus & Grafana',
    excerpt: 'Building a complete DevOps control room to monitor application health and metrics using Prometheus and Grafana.',
    date: 'Recent',
    readTime: '8 min read',
    category: 'Monitoring',
    link: 'https://medium.com/@venurameedum/building-a-devops-control-room-monitoring-application-health-with-prometheus-and-grafana-321c95259d06'
  },
  {
    id: 3,
    title: 'Implementing GitOps: Zero Downtime Deployments',
    excerpt: 'Implementing GitOps practices to achieve seamless, zero downtime deployments for microservices architectures.',
    date: 'Recent',
    readTime: '4 min read',
    category: 'GitOps',
    link: 'https://medium.com/@venurameedum/implementing-gitops-achieving-zero-downtime-deployments-for-a-microservices-architecture-b16a17588c3e'
  },
  {
    id: 4,
    title: 'Zero to Cloud: Deploying Your First AWS Server with Terraform',
    excerpt: 'A comprehensive guide to provisioning and deploying your first AWS EC2 server using Terraform for Infrastructure as Code (IaC).',
    date: 'Recent',
    readTime: '6 min read',
    category: 'Terraform',
    link: 'https://medium.com/@venurameedum/zero-to-cloud-deploying-your-first-aws-server-with-terraform-520f742504e3'
  },
  {
    id: 5,
    title: 'Enterprise-Grade CI/CD Pipeline for React & Go',
    excerpt: 'Learn how to build a robust CI/CD pipeline using Docker, GitHub Actions, and AWS for modern web applications.',
    date: 'Recent',
    readTime: '4 min read',
    category: 'CI/CD',
    link: 'https://medium.com/@venurameedum/how-to-build-an-enterprise-grade-ci-cd-pipeline-for-react-go-using-docker-github-actions-aws-bd971c7d079b'
  },
  {
    id: 6,
    title: 'Automating MERN Stack Deployments',
    excerpt: 'A complete walkthrough on automating MERN stack deployments using Docker, Jenkins, and Trivy for security scanning.',
    date: 'Recent',
    readTime: '4 min read',
    category: 'DevOps',
    link: 'https://medium.com/@venurameedum/automating-mern-stack-deployments-with-docker-jenkins-and-trivy-ca7880bfefeb'
  },
  {
    id: 7,
    title: 'React & Laravel CI/CD Pipeline on AWS EC2',
    excerpt: 'The ultimate guide to setting up a Jenkins CI/CD pipeline to deploy a React and Laravel full-stack application on AWS.',
    date: 'Recent',
    readTime: '6 min read',
    category: 'Jenkins',
    link: 'https://medium.com/@venurameedum/the-ultimate-guide-to-deploying-a-react-laravel-app-with-a-jenkins-ci-cd-pipeline-on-aws-ec2-4cfd9daafd2a'
  },
  {
    id: 8,
    title: 'Auto-Deploying a React Vite App on AWS EC2',
    excerpt: 'Discover how to automatically deploy a blazing-fast React Vite frontend to an AWS EC2 instance using GitHub Actions.',
    date: 'Recent',
    readTime: '3 min read',
    category: 'GitHub Actions',
    link: 'https://medium.com/@venurameedum/a-complete-guide-to-auto-deploying-a-react-vite-app-on-aws-ec2-using-github-actions-dffaf833fa1b'
  },
  {
    id: 9,
    title: 'Auto-Deploying a Node.js App on AWS EC2',
    excerpt: 'A step-by-step tutorial on configuring GitHub Actions to automatically deploy your Node.js backend to AWS.',
    date: 'Recent',
    readTime: '5 min read',
    category: 'Backend',
    link: 'https://medium.com/@venurameedum/a-complete-guide-to-auto-deploying-a-node-js-app-on-aws-ec2-using-github-actions-1b5bd0b7d5d7'
  },
  {
    id: 10,
    title: 'Jenkins Installation on AWS EC2 Instance',
    excerpt: 'A beginner-friendly, step-by-step guide on how to successfully install and configure Jenkins on an Amazon EC2 Linux server.',
    date: 'Recent',
    readTime: '1 min read',
    category: 'Tutorial',
    link: 'https://medium.com/@venurameedum/jenkins-installation-on-aws-ec2-instance-09beb8d689ee'
  }
];

export function Blog() {
  const [showAll, setShowAll] = useState(false);
  
  // Calculate which posts to display based on state
  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 4);

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
          layout
        >
          {/* AnimatePresence handles elements entering and leaving the DOM smoothly */}
          <AnimatePresence>
            {displayedPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 flex flex-col hover:bg-white/20 transition-all duration-300 group rounded-2xl block outline-none focus:ring-2 focus:ring-blue-500 no-underline"
                
                // We moved the animations directly to the item instead of relying on the parent container
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                whileHover={{ translateY: -5 }}
                layout
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-300 mb-6 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <span className="text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform flex items-center gap-2">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button */}
        {blogPosts.length > 4 && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            layout
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold text-sm transition-all bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/50 text-blue-300 flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'Show All Articles'}
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}