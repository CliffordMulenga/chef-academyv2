'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
// import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { GiCook } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";




// Default team members data
const defaultMembers = [
  {
    name: 'Robert Brown',
    role: 'CEO & Co-Founder',
    dept: 'management',
    imageUrl:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Leslie Livingston',
    role: 'CTO & Co-Founder',
    dept: 'management',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Joseph McFall',
    role: 'Executive Chef',
    dept: 'instructor',
    imageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Helene Engels',
    role: 'Nice Role',
    dept: 'instructor',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    name: 'Thom Belly',
    role: 'Nice Role',
    dept: 'instructor',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Bonnie Green',
    role: 'Student Affairs',
    dept: 'management',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Roberta Casas',
    role: 'Nice Role',
    dept: 'instructor',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
  {
    name: 'Jesse Leos',
    role: 'Strategic Partnership',
    dept: 'management',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
    ],
  },
];

export default function TeamSection({
  title = 'Our people make us great',
  subtitle = "At our culinary school, you'll interact with talented professionals and train with expert instructors, tackle complex culinary techniques, and sharpen your creativity through hands on training and real world culinary problem solving.",
  members = defaultMembers,
  className,
}

) {

    const [activeTab, setActiveTab] = useState('staff');
  
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden py-16 md:py-24 border-2',
        className,
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <h2 className="from-foreground/80 via-foreground to-foreground/80 dark:from-foreground/70 dark:via-foreground dark:to-foreground/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground md:text-lg">{subtitle}</p>
        </motion.div>
        
        <div className="flex justify-center gap-1 sm:justify-start sm:gap-4 mb-8">
          <button
              onClick={() => setActiveTab('staff')}
              className={`px-6 py-2 rounded-full text-[10px] md:text-sm font-medium transition flex items-center gap-1 cursor-pointer ${activeTab === 'staff' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
             <RiTeamFill size={16}/>Staff
            </button>
            <button
              onClick={() => setActiveTab('management')}
              className={`px-6 py-2 rounded-full text-[10px] md:text-sm font-medium transition flex items-center gap-1 cursor-pointer ${activeTab === 'management' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
             <GrUserManager size={16}/> Management
            </button>
            <button
              onClick={() => setActiveTab('instructor')}
              className={`px-6 py-2 md:py-2 rounded-full text-[10px] md:text-sm font-medium transition flex items-center gap-1 cursor-pointer ${activeTab === 'instructor' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
                }`}
            >
              <GiCook size={16}/> Instructors
            </button>
          </div>

        
        {/* Team members grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">

          {/* show all staff */}
          {members.map((member, index) => (
            activeTab === 'staff' && (
            <TeamMemberCard key={member.name} member={member} index={index} />
            )
          ))}

          {/* show management only */}
          {members.filter((member) => (
            member.dept === 'management'
          )

          ).map((member, index) => (
            activeTab === 'management' && (
            <TeamMemberCard key={member.name} member={member} index={index} />
            )
          ))}

          {/* show instructors only */}
          {members.filter((member) => (
            member.dept === 'instructor'
          )

          ).map((member, index) => (
            activeTab === 'instructor' && (
            <TeamMemberCard key={member.name} member={member} index={index} />
            )
          ))}
        </div>
      </div>
    </section>
  );
}

// card design
function TeamMemberCard({
  member,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl"
    >
      {/* Image container */}
      <div className="bg-muted relative aspect-square overflow-hidden rounded-xl">
        <div className="from-background/80 absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <img
          src={member.imageUrl}
          alt={member.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Social links that appear on hover */}
        {member.socialLinks && (
          <div className="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all"
              >
                {link.platform === 'twitter' && (
                  <FaXTwitter className="h-5 w-5" />
                )}
                {link.platform === 'linkedin' && (
                  <FaLinkedinIn className="h-5 w-5" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Name and role */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-primary text-sm">{member.role}</p>
      </div>
    </motion.div>
  );
}
