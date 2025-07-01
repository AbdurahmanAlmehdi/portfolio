import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ExternalLink, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { type App } from '@/data/portfolio-data';

interface AppModalProps {
  app: App | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AppModal({ app, isOpen, onClose }: AppModalProps) {
  if (!app) return null;



  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <img src={app.imageUrl} alt={app.name} className="w-16 h-16 rounded-2xl" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{app.name}</h2>
              <p className="text-gray-600">{app.category}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{app.description}</p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-2 text-gray-700">
              {app.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {app.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ visibility: app.screenshots.length > 0 ? 'visible' : 'hidden' }}>Screenshots</h3>
            <div className="grid grid-cols-2 gap-4">
              {app.screenshots.map((screenshot, index) => (
                <Card key={index} className="bg-gray-100 rounded-lg aspect-[9/16] flex items-center justify-center">
                  <CardContent className="p-0">
                    <div className="w-full h-full flex items-center justify-center">
                      < img src={screenshot} alt={app.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* <div className="mt-6 space-y-3">
              <Button className="w-full" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
              <Button className="w-full" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                View Source Code
              </Button>
            </div> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
