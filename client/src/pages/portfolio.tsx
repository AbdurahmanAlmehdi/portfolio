import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AppsSection } from '@/components/apps-section';
import { PackagesSection } from '@/components/packages-section';
import { CompaniesSection } from '@/components/companies-section';
import { TechnologiesSection } from '@/components/technologies-section';
import { ContactSection } from '@/components/contact-section';
import { AppModal } from '@/components/app-modal';
import { usePortfolio } from '@/hooks/use-portfolio';

export default function Portfolio() {
  const { selectedApp, isModalOpen, openAppModal, closeModal } = usePortfolio();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection onAppClick={openAppModal} />
      <AppsSection />
      <PackagesSection />
      <CompaniesSection />
      <TechnologiesSection />
      <ContactSection />
      <AppModal app={selectedApp} isOpen={isModalOpen} onClose={closeModal} />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Abdurahman Ibrahem</h3>
            <p className="text-gray-400 mb-6">Mobile Developer & Open Source Contributor</p>
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Apps
              </button>
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Packages
              </button>
              <button
                onClick={() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Technologies
              </button>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Abdurahman Ibrahem. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
