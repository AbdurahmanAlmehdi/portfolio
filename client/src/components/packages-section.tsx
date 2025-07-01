import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ExternalLink, Github } from 'lucide-react';
import { SiNpm } from 'react-icons/si';
import { packages } from '@/data/portfolio-data';

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Source Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the developer community with reusable packages and plugins.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <SiNpm className="text-red-600 text-2xl mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">{pkg.stars}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Weekly Downloads: <span className="font-medium">{pkg.downloads}</span>
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={pkg.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={pkg.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
