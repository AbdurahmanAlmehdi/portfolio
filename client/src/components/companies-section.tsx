import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { companies } from '@/data/portfolio-data';
import { Rocket, Smartphone, Code } from 'lucide-react';

const iconMap = {
  Rocket,
  Smartphone,
  Code
};

export function CompaniesSection() {
  return (
    <section id="companies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading companies to deliver exceptional mobile experiences.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {companies.map((company, index) => {
            const IconComponent = iconMap[company.icon as keyof typeof iconMap] || Rocket;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-4 md:mb-0">
                        <div className={`w-16 h-16 ${company.iconBg} rounded-2xl flex items-center justify-center mr-6`}>
                          <IconComponent className="text-white w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                          <p className="text-gray-600">{company.position}</p>
                          <p className="text-sm text-gray-500">{company.period}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 flex-wrap">
                        {company.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mt-4 leading-relaxed">{company.description}</p>
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
