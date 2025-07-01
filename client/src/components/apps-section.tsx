import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { apps } from '@/data/portfolio-data';
import { 
  CheckSquare, 
  Heart, 
  PiggyBank, 
  UtensilsCrossed, 
  Plane, 
  Brain
} from 'lucide-react';

const iconMap = {
  CheckSquare,
  Heart,
  PiggyBank,
  UtensilsCrossed,
  Plane,
  Brain
};

export function AppsSection() {
  return (
    <section id="apps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Applications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of mobile applications I've developed, each solving real-world problems with elegant solutions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const IconComponent = iconMap[app.icon as keyof typeof iconMap] || CheckSquare;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${app.iconBg} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                        <p className="text-gray-600 text-sm">{app.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3">{app.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {app.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
