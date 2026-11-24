import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import projectsData from "@/data/ProjectsData.json";
import MyBadge from "@/components/ui/MyBadge";
import Card2 from "@/components/ui/Card2";
import { 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cpu,
  CheckCircle2,
  Video
} from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find project by slug or fallback to id
  const projectIndex = projectsData.findIndex(
    (p) => (p.slug && p.slug.toLowerCase() === slug?.toLowerCase()) || String(p.id) === slug
  );

  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  // Previous and next projects for pagination
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          The project you are looking for does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Top Navigation / Breadcrumbs */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to All Projects
        </Link>
        <span className="text-xs uppercase tracking-wider font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {project.category || "Case Study"}
        </span>
      </div>

      {/* Project Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          {project.fullName || project.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6">
          {project.tagline || project.description}
        </p>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-lg shadow-blue-500/25"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {project.github?.frontend && (
            <a
              href={project.github.frontend}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-700 font-medium text-sm transition"
            >
              <Github className="w-4 h-4" /> Frontend Repo
            </a>
          )}
          {project.github?.backend && (
            <a
              href={project.github.backend}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-gray-200 border border-zinc-700 font-medium text-sm transition"
            >
              <Github className="w-4 h-4" /> Backend Repo
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium text-sm transition"
            >
              <Layers className="w-4 h-4 text-purple-400" /> Figma Design
            </a>
          )}
          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium text-sm transition"
            >
              <Video className="w-4 h-4 text-emerald-400" /> Video Demo
            </a>
          )}
        </div>
      </div>

      {/* Main Project Hero Graphic / Mockup */}
      <div className="mb-14 rounded-2xl border border-white/10 bg-black/60 p-2 shadow-2xl backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Deep-Dive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        {/* Left: Overview & Hard Engineering Challenges */}
        <div className="lg:col-span-2 space-y-10">
          {/* Architectural Overview */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-blue-400" /> System Architecture & Overview
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {project.longDescription || project.description}
            </p>
          </section>

          {/* Hard Engineering Challenges Solved */}
          {project.challengesSolved && project.challengesSolved.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-400" /> Key Engineering Challenges Solved
              </h2>
              <div className="space-y-4">
                {project.challengesSolved.map((challenge, idx) => {
                  const [title, ...descParts] = challenge.split(":");
                  const desc = descParts.join(":");
                  return (
                    <Card2 key={idx} className="p-5 border-gray-800 bg-zinc-950/70">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-white text-base mb-1">
                            {desc ? title : `Challenge #${idx + 1}`}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {desc ? desc.trim() : challenge}
                          </p>
                        </div>
                      </div>
                    </Card2>
                  );
                })}
              </div>
            </section>
          )}

          {/* Core Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-400" /> Functional Deliverables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300 leading-snug">{feature.text}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right: Tech Stack & Metadata Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-800 bg-[#121216] p-6">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-800 pb-3">
              Technologies & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.badges?.map((badge, idx) => (
                <MyBadge key={idx} iconKey={badge.iconKey} text={badge.text} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#121216] p-6 space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-gray-800 pb-3">
              Project Quick Specs
            </h3>
            <div className="text-sm flex justify-between py-1 border-b border-gray-800/50">
              <span className="text-gray-400">Category</span>
              <span className="text-white font-medium">{project.category}</span>
            </div>
            <div className="text-sm flex justify-between py-1 border-b border-gray-800/50">
              <span className="text-gray-400">Architecture</span>
              <span className="text-white font-medium">Headless / Full-Stack</span>
            </div>
            <div className="text-sm flex justify-between py-1">
              <span className="text-gray-400">Status</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Production
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pagination: Next & Prev Project */}
      <div className="pt-8 border-t border-gray-800 flex items-center justify-between">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug || prevProject.id}`}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition" />
            </div>
            <div className="text-left hidden sm:block">
              <span className="text-xs text-gray-500 uppercase tracking-wider block">Previous</span>
              <span className="font-semibold text-sm text-gray-300 group-hover:text-white">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        <Link
          to="/"
          className="text-xs font-mono text-gray-500 hover:text-gray-300 transition"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug || nextProject.id}`}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition group text-right"
          >
            <div className="text-right hidden sm:block">
              <span className="text-xs text-gray-500 uppercase tracking-wider block">Next</span>
              <span className="font-semibold text-sm text-gray-300 group-hover:text-white">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10">
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition" />
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
