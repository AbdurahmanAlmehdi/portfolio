import { motion } from 'framer-motion';
import { 
  CheckSquare, 
  Heart, 
  PiggyBank, 
  UtensilsCrossed, 
  Plane, 
  Brain,
  Wifi,
  Signal,
  Battery
} from 'lucide-react';
import { apps, type App } from '@/data/portfolio-data';

interface IPhoneMockupProps {
  onAppClick: (appId: string) => void;
}

const iconMap = {
  CheckSquare,
  Heart,
  PiggyBank,
  UtensilsCrossed,
  Plane,
  Brain
};

export function IPhoneMockup({ onAppClick }: IPhoneMockupProps) {
  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || CheckSquare;
  };

  return (
    <div className="flex justify-center">
      <motion.div
        className="animate-float"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Realistic iPhone mockup */}
        <div className="relative">
          <div className="w-80 h-[650px] bg-black rounded-[3rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gray-900 rounded-[2.5rem] relative overflow-hidden">
              {/* iPhone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Screen content */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-700 p-6 pt-10">
                {/* Status bar */}
                <div className="flex justify-between items-center text-white text-sm mb-8">
                  <span>9:41</span>
                  <div className="flex items-center space-x-2">
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>
                
                {/* App icons grid */}
                <div className="grid grid-cols-4 gap-4">
                  {apps.map((app) => {
                    const IconComponent = getIcon(app.icon);
                    return (
                      <motion.div
                        key={app.id}
                        className="cursor-pointer"
                        onClick={() => onAppClick(app.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className={`w-16 h-16 ${app.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="text-white w-8 h-8" />
                        </div>
                        <p className="text-white text-xs text-center mt-1 truncate">{app.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
