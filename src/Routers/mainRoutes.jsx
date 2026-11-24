import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/frontend/Home/Home";
import About from "@/pages/frontend/About/About";
import Error from "@/pages/Error";
import ContactPage from "@/pages/contact/ContactPage";
import ServicesSection from "@/pages/frontend/Home/sections/ServicesSection";
import PricingSection from "@/pages/frontend/Home/sections/PricingSection2";
import CTAGetInTouch from "@/pages/frontend/Home/sections/CTAGetInTouch";
import FeaturedProjects from "@/pages/frontend/Home/sections/FeaturedProjects";
import Reviews from "@/pages/frontend/Home/sections/Reviews";
import ProjectDetails from "@/pages/frontend/Projects/ProjectDetails";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: (
          <div className="min-h-svh pt-20">
            <FeaturedProjects />
          </div>
        ),
      },
      {
        path: "/projects/:slug",
        element: <ProjectDetails />,
      },
      {
        path: "/services",
        element: (
          <div className="min-h-svh pt-20">
            <ServicesSection />
            <PricingSection />
          </div>
        ),
      },
      {
        path: "/skills",
        element: <div className="min-h-screen flex items-center justify-center text-xl">Skills Overview</div>,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/reviews",
        element: (
          <div className="min-h-svh pt-20">
            <Reviews />
            <ServicesSection />
          </div>
        ),
      },
    ],
  },
]);

export default mainRoutes;
