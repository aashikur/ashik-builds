// IconLibrary.jsx
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaFigma } from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiBootstrap, 
  SiRedux, 
  SiNextdotjs, 
  SiGithub, 
  SiDocker, 
  SiPostman, 
  SiTypescript, 
  SiPostgresql, 
  SiPrisma, 
  SiDrizzle, 
  SiCloudflare, 
  SiZod 
} from 'react-icons/si';
import { GiPolarStar, GiCrystalBall } from 'react-icons/gi';

export const IconLibrary = {
  // Frontend
  react: <FaReact className="w-4 h-4 text-sky-400" />,
  nextjs: <SiNextdotjs className="w-4 h-4 text-white" />,
  typescript: <SiTypescript className="w-4 h-4 text-blue-500" />,
  html: <FaHtml5 className="w-4 h-4 text-orange-500" />,
  css: <FaCss3Alt className="w-4 h-4 text-blue-500" />,
  javascript: <FaJsSquare className="w-4 h-4 text-yellow-400" />,
  tailwind: <SiTailwindcss className="w-4 h-4 text-cyan-400" />,
  bootstrap: <SiBootstrap className="w-4 h-4 text-purple-600" />,
  redux: <SiRedux className="w-4 h-4 text-purple-500" />,
  figma: <FaFigma className="w-4 h-4 text-pink-500" />,

  // Backend
  node: <FaNodeJs className="w-4 h-4 text-emerald-500" />,
  express: <SiExpress className="w-4 h-4 text-gray-300" />,
  mongodb: <SiMongodb className="w-4 h-4 text-green-500" />,
  postgresql: <SiPostgresql className="w-4 h-4 text-sky-500" />,
  drizzle: <SiDrizzle className="w-4 h-4 text-lime-400" />,
  prisma: <SiPrisma className="w-4 h-4 text-teal-400" />,
  cloudflare: <SiCloudflare className="w-4 h-4 text-amber-500" />,
  zod: <SiZod className="w-4 h-4 text-blue-400" />,
  python: <FaPython className="w-4 h-4 text-yellow-500" />,

  // Dev Tools
  git: <FaGitAlt className="w-4 h-4 text-red-500" />,
  github: <SiGithub className="w-4 h-4 text-gray-300" />,
  docker: <SiDocker className="w-4 h-4 text-blue-400" />,
  postman: <SiPostman className="w-4 h-4 text-orange-500" />,

  // Misc / Extras
  star: <GiPolarStar className="w-4 h-4 text-pink-500" />,
  crystal: <GiCrystalBall className="w-4 h-4 text-purple-500" />,
};
