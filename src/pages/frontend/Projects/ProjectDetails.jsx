import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import projectsData from "@/data/ProjectsData.json";
import { ExternalLink, Github, ArrowLeft, ArrowRight, Layers, Video } from "lucide-react";

export default function ProjectDetails() {
  const { slug } = useParams();

  // Find project by slug or fallback to id
  const projectIndex = projectsData.findIndex(
    (p) => (p.slug && p.slug.toLowerCase() === slug?.toLowerCase()) || String(p.id) === slug
  );

  const project = projectIndex !== -1 ? projectsData[projectIndex] : null;

  // Previous and next projects for pagination
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-semibold text-white mb-2">Project not found</h1>
        <p className="text-zinc-400 text-sm mb-6">The requested case study could not be located.</p>
        <Link
          to="/#projectsSection"
          className="text-xs font-mono text-zinc-300 hover:text-white underline underline-offset-4"
        >
          ← Return to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Editorial Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8">
        <Link to="/#projectsSection" className="hover:text-zinc-300 transition">
          Projects
        </Link>
        <span>/</span>
        <span className="text-zinc-300">{project.slug || project.title}</span>
      </nav>

      {/* Main Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 rounded">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Production
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
          {project.fullName || project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
          {project.tagline || project.description}
        </p>

        {/* Minimal Action Links Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-6 border-t border-zinc-800/80">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-zinc-200 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Visit Live App
            </a>
          )}

          {project.github?.frontend && (
            <a
              href={project.github.frontend}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition"
            >
              <Github className="w-3.5 h-3.5" />
              Client Repo
            </a>
          )}

          {project.github?.backend && (
            <a
              href={project.github.backend}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition"
            >
              <Github className="w-3.5 h-3.5" />
              Server Repo
            </a>
          )}

          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition"
            >
              <Layers className="w-3.5 h-3.5" />
              Figma Design
            </a>
          )}

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition"
            >
              <Video className="w-3.5 h-3.5" />
              Walkthrough
            </a>
          )}
        </div>
      </header>

      {/* Clean Project Mockup / Screenshot */}
      <div className="mb-14 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Editorial Content Flow */}
      <div className="space-y-12">
        {/* Architecture & Context */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Overview &amp; Architecture
          </h2>
          <p className="text-zinc-300 text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </section>

        {/* Technical Highlights / Engineering Notes */}
        {project.challengesSolved && project.challengesSolved.length > 0 && (
          <section className="pt-8 border-t border-zinc-800/80">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Technical Decisions &amp; Engineering Solutions
            </h2>
            <div className="space-y-4">
              {project.challengesSolved.map((challenge, idx) => {
                const [title, ...descParts] = challenge.split(":");
                const desc = descParts.join(":");
                return (
                  <div key={idx} className="border-l border-zinc-800 pl-4 py-0.5">
                    <h3 className="text-sm font-medium text-white mb-1">
                      {desc ? title.trim() : `Decision #${idx + 1}`}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {desc ? desc.trim() : challenge}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Core Capabilities */}
        {project.features && project.features.length > 0 && (
          <section className="pt-8 border-t border-zinc-800/80">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
              Key Capabilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-300">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-zinc-500 select-none">—</span>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack Pills */}
        <section className="pt-8 border-t border-zinc-800/80">
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.badges?.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800/90 px-2.5 py-1 rounded"
              >
                {badge.text}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Minimal Footer Pagination */}
      <footer className="mt-16 pt-8 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug || prevProject.id}`}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>{prevProject.title}</span>
          </Link>
        ) : (
          <span />
        )}

        <Link
          to="/#projectsSection"
          className="text-zinc-500 hover:text-zinc-300 transition"
        >
          View all
        </Link>

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug || nextProject.id}`}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition group"
          >
            <span>{nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <span />
        )}
      </footer>
    </article>
  );
}
