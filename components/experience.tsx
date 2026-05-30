'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Cloud,
  Server,
  BrainCircuit,
  Terminal,
  Wifi,
  Code,
  Figma,
  FileCode2,
  Globe,
  Layout,
  Rocket,
  Gem,
  Atom,
  Database,
  FileCode,
  Palette
} from 'lucide-react';

const experienceData = [
  {
    year: '2025',
    role: 'Software Engineer',
    company: 'Renewaa Pvt. Ltd',
    description: 'Developed client-facing applications and implemented design systems.',
    skills: ['React', 'Go', 'TypeScript', 'Go (Golang)', 'Flutter', 'ClarkAuth', 'PostgreSQL', 'AWS', 'GitHub Actions', 'Linux', 'Figma'],
  },
  {
    year: '2025',
    role: 'Intern Software Engineer',
    company: 'Renewaa Pvt. Ltd',
    description: 'Developed client-facing applications and implemented design systems.',
    skills: ['React', 'Go', 'TypeScript', 'Go (Golang)', 'Flutter', 'ClarkAuth', 'PostgreSQL', 'AWS', 'GitHub Actions', 'Linux', 'Figma'],
  }
];

const educationData = [
  {
    degree: 'Bachelor of Science Honours in Business Information Systems',
    field: 'Information Systems',
    institution: 'University of Sri Jayewardenepura, Sri Lanka',
    year: '2025',
    period: '2022 - 2025',
    details: 'Graduated with Second Class Honors. Specialized in software engineering, modern web technologies, and systems architecture. Key academic work included developing a full-stack Lost and Found Reporting System (LFRS).',
  },
  {
    degree: 'DevOps Certification Course',
    field: 'CI/CD & Deployment',
    institution: 'CodingGura',
    year: '2026',
    period: '2026 - 2026',
    details: 'Project-oriented program centered on modern DevOps methodologies. Gained hands-on experience in designing CI/CD pipelines, automating workflows, containerization, and managing continuous deployment for scalable software systems.',
  },
  {
    degree: 'Full-stack Engineering for Developers Certification Course',
    field: 'Full-stack development',
    institution: 'STEMLink',
    year: '2024',
    period: '2024 - 2024',
    details: 'Intensive, project-driven program focused on modern full-stack development practices. Gained practical, hands-on experience building, testing, and deploying scalable web applications.',
  }
];

const certificationsData = [
  {
    name: 'ACE Multicloud Network Associate',
    issuer: 'Aviatrix',
    date: '2025',
    credentialId: '2025-27701',
    link: 'https://www.credly.com/badges/0c11327d-97b7-4eae-96ea-7424ad01c815/public_url',
    icon: Cloud,
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    credentialId: '322630164OCI25FNDCFA',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=98BD671794B799D00F09831398931F9A842A81BFBF81FDAD767F5C693A3C659E',
    icon: Server,
  },
  {
    name: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: '2025',
    credentialId: '',
    link: 'https://www.kaggle.com/learn/certification/venuradenethpriya/intro-to-machine-learning',
    icon: BrainCircuit,
  },
  {
    name: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: '29de2869-b23a-4d72-8a98-40c203c86f1c',
    link: 'https://www.credly.com/badges/d0e00e3f-ca43-46ef-8512-9e98c1362b20',
    icon: Terminal,
  },
  {
    name: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: '3558de47-8783-4965-b83a-99b19f0c65e2',
    link: 'https://www.credly.com/badges/ab3ee7e3-c032-4429-9b5b-7ae0e661573a',
    icon: Wifi,
  },
  {
    name: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    credentialId: 'daac1bfb-f4e5-4ab8-a357-4e986c470a5f',
    link: 'https://www.credly.com/badges/feb1483e-b5ae-4763-ba63-457068d4b5b7',
    icon: Code,
  },
  {
    name: 'Figma for UX Design',
    issuer: 'LinkedIn',
    date: '2024',
    credentialId: 'c61236d39c3ae0d8c0d03dbf8085f4c63c7bed18cea1ab253170a9421d0f825f',
    link: 'https://www.linkedin.com/learning/certificates/c61236d39c3ae0d8c0d03dbf8085f4c63c7bed18cea1ab253170a9421d0f825f',
    icon: Figma,
  },
  {
    name: 'Introduction to C#',
    issuer: 'Sololearn',
    date: '2024',
    credentialId: 'CC-UBZGNM4P',
    link: 'https://www.sololearn.com/en/certificates/CC-UBZGNM4P',
    icon: FileCode2,
  },
  {
    name: 'Web Development',
    issuer: 'Sololearn',
    date: '2024',
    credentialId: 'CC-ZOFFC036',
    link: 'https://www.sololearn.com/en/certificates/CC-ZOFFC036',
    icon: Globe,
  },
  {
    name: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    credentialId: 'fMQNgRHRqI',
    link: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',
    icon: FileCode2,
  },
  {
    name: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    credentialId: '1N9A6q8vEw',
    link: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',
    icon: Layout,
  },
  {
    name: 'Build and Deploy Web App with Modern Tooling',
    issuer: 'LinkedIn',
    date: '2024',
    credentialId: 'f30e74abfca0665a2a203274a63ed05759c66127273d69e0df81e15b20a2e217',
    link: 'https://www.linkedin.com/learning/certificates/f30e74abfca0665a2a203274a63ed05759c66127273d69e0df81e15b20a2e217',
    icon: Rocket,
  },
  {
    name: 'Ruby on Rails 7 Essential Training',
    issuer: 'LinkedIn',
    date: '2024',
    credentialId: '93bb2ef51b249f9c3fa760bcb6d9143e48b910a284427dea4ee3ec69fc32095f',
    link: 'https://www.linkedin.com/learning/certificates/93bb2ef51b249f9c3fa760bcb6d9143e48b910a284427dea4ee3ec69fc32095f',
    icon: Gem,
  },
  {
    name: 'Free Bootcamp on JavaScript & ReactJs from A to Z',
    issuer: 'DevTown',
    date: '2024',
    credentialId: '',
    link: 'https://www.cert.devtown.in/verify/Z1nivdF',
    icon: Atom,
  },
  {
    name: 'SQL Intermediate',
    issuer: 'Sololearn',
    date: '2023',
    credentialId: 'CC-TPL9WXED',
    link: 'https://www.sololearn.com/en/certificates/CC-TPL9WXED',
    icon: Database,
  },
  {
    name: 'Introduction to HTML',
    issuer: 'Sololearn',
    date: '2023',
    credentialId: 'CC-NAHNP5ZP',
    link: 'https://www.sololearn.com/en/certificates/CC-NAHNP5ZP',
    icon: FileCode,
  },
  {
    name: 'Adobe Photoshop 2021 Basics',
    issuer: 'Udemy',
    date: '2021',
    credentialId: 'UC-dd571678-8d3b-4f5e-8bba-8c2afa099c9b',
    link: 'https://www.udemy.com/certificate/UC-dd571678-8d3b-4f5e-8bba-8c2afa099c9b/',
    icon: Palette,
  },
];
export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="experience" className="section-container bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-slate-300">Experience, Education & Certifications</p>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 border border-white/20 mb-12 rounded-lg p-1">
            <TabsTrigger value="experience" className="rounded-md">Professional</TabsTrigger>
            <TabsTrigger value="education" className="rounded-md">Education</TabsTrigger>
            <TabsTrigger value="certifications" className="rounded-md">Certifications</TabsTrigger>
          </TabsList>

          {/* Professional Experience Tab */}
          <TabsContent value="experience">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experienceData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="flex gap-6">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative z-10"
                      />
                      {index < experienceData.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-blue-400/50 to-transparent mt-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="glass-hover p-6 flex-1 rounded-lg">
                      <span className="text-blue-400 text-sm font-semibold">{item.year}</span>
                      <h3 className="text-2xl font-bold text-white mt-2">{item.role}</h3>
                      <p className="text-blue-300 font-semibold mt-1">{item.company}</p>
                      <p className="text-slate-300 mt-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {educationData.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="flex gap-6">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full relative z-10"
                      />
                      {index < educationData.length - 1 && (
                        <div className="w-1 h-24 bg-gradient-to-b from-cyan-400/50 to-transparent mt-4" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="glass-hover p-6 flex-1 rounded-lg">
                      <span className="text-cyan-400 text-sm font-semibold">{item.year}</span>
                      <h3 className="text-2xl font-bold text-white mt-2">{item.degree}</h3>
                      <p className="text-cyan-300 font-semibold mt-1">{item.field}</p>
                      <p className="text-slate-400 text-sm mt-2">{item.institution}</p>
                      <p className="text-slate-400 text-sm mt-1 font-medium">{item.period}</p>
                      <p className="text-slate-300 mt-4">{item.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certificationsData.map((cert, index) => {
                // FIXED: Assign the icon to a capitalized variable so React knows it's a component
                const Icon = cert.icon;
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="glass-hover p-6 rounded-lg cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                          {cert.name}
                        </h3>
                        <p className="text-purple-400 text-sm">{cert.issuer}</p>
                      </div>
                      
                      {/* FIXED: Render it as an actual component */}
                      <div className="ml-2 flex-shrink-0">
                        <Icon className="w-8 h-8 text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-2">Issued: {cert.date}</p>
                    <p className="text-slate-500 text-xs mb-4">ID: {cert.credentialId}</p>
                    <motion.a
                      href={cert.link}
                      whileHover={{ x: 5 }}
                      className="inline-block text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
                    >
                      View Credential →
                    </motion.a>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
