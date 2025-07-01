import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Abdurahman Ibrahem</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('apps')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Apps
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Packages
              </button>
              <button
                onClick={() => scrollToSection('companies')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('technologies')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Technologies
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('apps')}
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection('companies')}
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('technologies')}
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 w-full text-left"
            >
              Technologies
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-blue-600 font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
