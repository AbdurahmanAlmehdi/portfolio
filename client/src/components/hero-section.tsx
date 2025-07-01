import { motion } from 'framer-motion';
import { IPhoneMockup } from './iphone-mockup';

interface HeroSectionProps {
  onAppClick: (appId: string) => void;
}

export function HeroSection({ onAppClick }: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Mobile Developer
            <span className="text-blue-600"> Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, performant mobile applications with cutting-edge technologies. 
            Explore my work through interactive demos and discover the apps that make a difference.
          </p>
        </motion.div>
        
        <IPhoneMockup onAppClick={onAppClick} />
        
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-600">👆 Tap any app to see details</p>
        </motion.div>
      </div>
    </section>
  );
}
