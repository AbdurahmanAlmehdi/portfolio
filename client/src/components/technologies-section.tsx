import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { technologyCategories } from '@/data/portfolio-data';
import { Smartphone, Code, Server, Wrench } from 'lucide-react';

const iconMap = {
  Smartphone,
  Code,
  Server,
  Wrench
};

export function TechnologiesSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="technologies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies & Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern mobile applications across platforms.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologyCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Code;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <IconComponent className={`${category.iconColor} w-5 h-5 mr-2`} />
                      {category.name}
                    </h3>
                    <div className="space-y-3">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center justify-between">
                          <span className="text-gray-700">{tech.name}</span>
                          <div className="flex">
                            {renderStars(tech.rating)}
                          </div>
                        </div>
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
