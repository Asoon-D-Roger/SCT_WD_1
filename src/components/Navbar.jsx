import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/asoon logo.webp";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">
              Asoon
              <span className="bg-gradient-to-r from-blue-200 to-blue-700 text-transparent bg-clip-text">
                VR
              </span>{" "}
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 rounded-lg hover:bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-500 ease-in"
            >
              Sign In
            </a>
            <a
              href="#"
              className=" hover:bg-gradient-to-r from-blue-800 to-blue-400 transition-all duration-500 bg-blue-950 py-2 px-3 rounded-lg"
            >
              Create account
            </a>
          </div>

          {/* mobile nav */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 rounded-lg hover:bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-500 ease-in"
              >
                Sign In
              </a>
              <a
                href="#"
                className="hover:bg-gradient-to-r from-blue-700 to-blue-400 transition-all duration-500 bg-blue-900 py-2 px-3 rounded-lg"
              >
                Create account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
