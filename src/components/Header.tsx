import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Shield, AlertCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-700" />
            <span className="text-xl font-bold text-purple-900">SafeTransit</span>
          </NavLink>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/research" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
            >
              Research
            </NavLink>
            <NavLink 
              to="/systems-analysis" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
            >
              Systems Analysis
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
            >
              Resources
            </NavLink>
          </nav>
          
          <NavLink 
            to="/emergency" 
            className="hidden md:flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <AlertCircle className="h-4 w-4" />
            <span>Emergency</span>
          </NavLink>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/research" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </NavLink>
            <NavLink 
              to="/systems-analysis" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Systems Analysis
            </NavLink>
            <NavLink 
              to="/resources" 
              className={({isActive}) => 
                `${isActive ? 'text-purple-700 font-medium' : 'text-gray-700'} hover:text-purple-600 transition-colors`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink 
              to="/emergency" 
              className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <AlertCircle className="h-4 w-4" />
              <span>Emergency</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;