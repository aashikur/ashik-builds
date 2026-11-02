import { useRouteError, useNavigate } from "react-router";
import { MoveLeft } from "lucide-react";
import PortfolioNavbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NavSideLogo from "@/components/layout/NavSideLogo";
import Button from "@/components/ui/Button";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <PortfolioNavbar /> */}
      <NavSideLogo/>
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          {/* Large 404 Number */}
          <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight">
            404
          </h1>

          {/* Error Message */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. The page might have been removed or the link might be broken.
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="pt-4">
            <Button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <MoveLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>

          {/* Error Details (if in development) */}
          {import.meta.env.DEV && error && (
            <div className="mt-8 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 text-left">
              <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-auto">
                {JSON.stringify(error, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Error;
