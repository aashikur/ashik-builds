import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiFolder, 
  FiTag, 
  FiMail, 
  FiArrowLeft 
} from "react-icons/fi";

export default function Navbar2({
  items = [
    { href: "home", label: "Home", icon: FiHome },
    { href: "aboutMeSection", label: "About", icon: FiUser },
    { href: "servicesSection", label: "Services", icon: FiBriefcase },
    { href: "projectsSection", label: "Projects", icon: FiFolder },
    { href: "pricingSection", label: "Pricing", icon: FiTag },
    { href: "contactSection", label: "Contact", icon: FiMail },
  ],
  className = "",
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  const isHome = location.pathname === "/";
  const isProjectDetail = location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

  // Intersection observer for Home page active section highlight
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items, isHome]);

  // Handle hash scrolling when arriving from other pages to Home (e.g. /#projectsSection)
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
        }
      }, 100);
    }
  }, [location, isHome]);

  const containerClasses = 
    `fixed z-50 -translate-x-1/2 left-1/2 ` +
    `bottom-3 md:top-4 md:bottom-auto ` +
    `px-3 md:px-4 py-2 md:py-2.5 rounded-full ` +
    `backdrop-blur-xl border border-white/20 dark:border-white/10 ` +
    `bg-white/10 dark:bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.36)] ` +
    className;

  const containerStyle = {
    WebkitBackdropFilter: "blur(16px)",
    backdropFilter: "blur(16px)",
  };

  // 1. DETAIL / CASE STUDY VIEW: Render streamlined Back Navigation Pill
  if (isProjectDetail) {
    return (
      <div className={containerClasses} style={containerStyle}>
        <nav className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
          <Link
            to="/#projectsSection"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600/90 hover:bg-blue-600 text-white transition shadow-sm"
          >
            <FiArrowLeft className="text-base" />
            <span>Back to Projects</span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition"
          >
            <FiHome className="text-base" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/#contactSection"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition"
          >
            <FiMail className="text-base" />
            <span className="hidden sm:inline">Contact</span>
          </Link>
        </nav>
      </div>
    );
  }

  // 2. STANDARD / HOME VIEW: Render multi-section pills with intelligent route-aware links
  return (
    <div
      className={
        `min-w-11/12 sm:min-w-2xl flex justify-center ` +
        containerClasses
      }
      style={containerStyle}
    >
      <nav className="flex items-center gap-1 md:gap-2">
        {items.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            isHome={isHome}
            isActive={isHome && activeSection === item.href}
          />
        ))}
      </nav>
    </div>
  );
}

function NavItem({ item, isHome, isActive }) {
  const { href, label, icon: Icon } = item;

  const linkClasses =
    `relative group isolate select-none ` +
    `rounded-full overflow-hidden outline-none ` +
    `px-3 md:px-4 py-2 md:py-2 ` +
    `text-xs sm:text-sm md:text-base font-medium ` +
    `text-zinc-800 dark:text-zinc-200 ` +
    `transition-[color,transform] duration-300 ease-out ` +
    (isActive ? `scale-[1.02] text-white` : `hover:scale-[1.03] active:scale-95`);

  const innerContent = (
    <>
      {/* Active pill background */}
      {isActive && (
        <motion.span
          layoutId="active-pill"
          transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.6 }}
          className="absolute inset-0 -z-10 rounded-full bg-white/40 dark:bg-white/15 border border-white/40 dark:border-white/10 shadow-lg"
          style={{
            WebkitBackdropFilter: "blur(16px)",
            backdropFilter: "blur(16px)",
          }}
        />
      )}

      {/* Hover glow */}
      <span
        className="pointer-events-none absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden
      >
        <span className="absolute inset-0 rounded-full blur-2xl bg-white/30 dark:bg-white/10" />
      </span>

      {/* Icon + Label */}
      <span className="flex items-center gap-1.5 sm:gap-2">
        {Icon && <Icon className="text-base sm:text-lg" />}
        <span className="hidden sm:inline-block">{label}</span>
      </span>
    </>
  );

  // If on Home page, standard smooth hash anchor
  if (isHome) {
    return (
      <a href={`#${href}`} className={linkClasses}>
        {innerContent}
      </a>
    );
  }

  // If on other pages (e.g. /services, /about), Link to /#section so it routes back to Home cleanly
  return (
    <Link to={`/#${href}`} className={linkClasses}>
      {innerContent}
    </Link>
  );
}
