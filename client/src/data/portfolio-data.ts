export interface App {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  screenshots: string[];
  description: string;
  features: string[];
  technologies: string[];
}

export interface Package {
  name: string;
  description: string;
  stars: string;
  downloads: string;
  npmUrl: string;
  githubUrl: string;
}

export interface Company {
  name: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  iconBg: string;
  icon: string;
}

export interface Technology {
  name: string;
  rating: number;
}

export interface TechnologyCategory {
  name: string;
  icon: string;
  iconColor: string;
  technologies: Technology[];
}

export const apps: App[] = [
  {
    id: 'mataa-customer',
    screenshots: [

    ],
    name: 'Mataa Customer App',
    category: 'E-commerce & Delivery',
    imageUrl: '/images/mataa_full_logo.png',
    description: 'A comprehensive e-commerce and delivery platform for Libyan customers. Built from scratch with Clean Architecture, the app proved resilient during a major backend migration. Used by over 50,000 users across Libya.',
    features: [
      'Real-time order tracking',
      'Secure payment processing',
      'Push notifications for order updates',
      'Multi-vendor marketplace',
      'User authentication and profiles',
      'Clean Architecture implementation'
    ],
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC', 'Firebase', 'REST APIs']
  },
  {
    id: 'mataa-partner',
    name: 'Mataa Partner App',
    category: 'Business & Vendor Management',
    imageUrl: '/images/mataa_partner.png',
    screenshots: [

    ],
    description: 'Vendor management application integrating with an Odoo-based system for nearly 200 vendors nationwide. Features seamless authentication, data synchronization, and cross-platform compatibility.',
    features: [
      'Odoo system integration',
      'Vendor inventory management',
      'Order processing and fulfillment',
      'Real-time data synchronization',
      'Cross-platform compatibility',
      'Responsive web version'
    ],
    technologies: ['Flutter', 'Dart', 'Odoo Integration', 'Clean Architecture', 'REST APIs']
  },
  {
    id: 'mataa-captain',
    name: 'Mataa Captain',
    category: 'Logistics & Delivery',
    imageUrl: '/images/mataa_captain.png',
    screenshots: [

    ],
    description: 'Driver application for the Mataa delivery network. Features cloud-based delivery verification via image/document uploads and real-time order management for field delivery professionals.',
    features: [
      'Real-time delivery tracking',
      'Cloud-based document verification',
      'Image and document uploads',
      'Route optimization',
      'Order management system',
      'Driver performance analytics'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'Google Maps API']
  },
  {
    id: 'khadamat-customer',
    name: 'Khadamat Customer App',
    category: 'Home Services & Booking',
    imageUrl: '/images/khadamat_customer.png',
    screenshots: [

    ],
    description: 'On-demand home services platform for customers to book various services like plumbing, electrical work, and cleaning. Built with Flutter Clean Architecture ensuring separation of concerns and maintainability.',
    features: [
      'Service booking and scheduling',
      'Real-time technician tracking',
      'Secure payment processing',
      'Service history and reviews',
      'Multi-service categories',
      'Customer support integration'
    ],
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC', 'Firebase']
  },
  {
    id: 'khadamat-technician',
    name: 'Khadamat Technician App',
    category: 'Professional Services & Field Work',
    imageUrl: '/images/khadamat_tech.png',
    screenshots: [

    ],
    description: 'Professional technician application for field service workers. Features secure login, role-based access, and real-time order updates for service professionals across multiple categories.',
    features: [
      'Role-based access control',
      'Real-time job notifications',
      'Service completion tracking',
      'Customer communication tools',
      'Earnings and performance tracking',
      'Professional profile management'
    ],
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'Firebase', 'BLoC']
  },
  {
    id: 'quran-radio',
    name: 'Quran Radio App',
    category: 'Religious & Audio Streaming',
    imageUrl: '/images/quran_fm.png',
    screenshots: [

    ],
    description: 'Flutter app for streaming Quran content with support for background playbook and various reciters. Features a clean, respectful interface designed for spiritual listening experiences.',
    features: [
      'Background audio playback',
      'Multiple Quran reciters',
      'Offline listening capability',
      'Prayer time notifications',
      'Beautiful Islamic UI design',
      'Audio quality selection'
    ],
    technologies: ['Flutter', 'Dart', 'Audio Streaming', 'Background Processing']
  },
  {
    id: 'libya-fm',
    name: 'Libya FM',
    category: 'Radio & Audio Streaming',
    imageUrl: '/images/libya_fm.png',
    screenshots: [

    ],
    description: 'Redesigned and stabilized radio streaming app for Libya FM. Enhanced UI/UX and performance improvements, providing a seamless audio streaming experience for Libyan radio listeners.',
    features: [
      'Live radio streaming',
      'Enhanced UI/UX design',
      'Performance optimization',
      'Stable audio playback',
      'Modern interface design',
      'Broadcasting schedule'
    ],
    technologies: ['Flutter', 'Dart', 'Audio Streaming', 'UI/UX Design']
  }
];

export const packages: Package[] = [
  {
    name: 'apple_foundation_flutter',
    description: 'Flutter plugin providing access to native Apple Foundation framework APIs from Flutter applications. Demonstrates deep platform-channel communication and native iOS integration.',
    stars: '5',
    downloads: '100',
    npmUrl: 'https://pub.dev/packages/apple_foundation_flutter',
    githubUrl: 'https://github.com/AbdurahmanIbrahem/apple_foundation_flutter'
  }
];

export const companies: Company[] = [
  {
    name: 'Mataa App',
    position: 'Mobile Applications Developer (Full Time)',
    period: 'September 2024 – Present',
    description: 'Built the new customer app from scratch with Clean Architecture, which proved resilient during major backend migration. Maintained and enhanced the original customer app, developed both Vendor and Driver apps using shared architecture. Delivered responsive web version of Vendor App and used Flutter Flavors for multiple environments.',
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'BLoC', 'Flutter Flavors', 'fpdart', 'Dartz'],
    iconBg: 'bg-blue-600',
    icon: 'Smartphone'
  },
  {
    name: 'Khadamat',
    position: 'Mobile Applications Developer (Part Time)',
    period: 'May 2024 – Present',
    description: 'Built and maintained Technician and Customer Apps for on-demand home services. Architected apps with Flutter Clean Architecture, developed reusable components and modules. Integrated secure login, role-based access, and real-time order updates.',
    technologies: ['Flutter', 'Dart', 'Clean Architecture', 'Firebase', 'BLoC'],
    iconBg: 'bg-green-600',
    icon: 'Home'
  },
  {
    name: 'Fannak Tech',
    position: 'Mobile Applications Developer (Part Time)',
    period: 'December 2024 – April 2025',
    description: 'Redesigned and stabilized Libya FM radio streaming app, enhancing UI/UX and performance. Participated in multiple Flutter-based projects in production, applying modular architecture and debugging techniques.',
    technologies: ['Flutter', 'Dart', 'UI/UX Design', 'Performance Optimization'],
    iconBg: 'bg-purple-600',
    icon: 'Radio'
  }
];

export const technologyCategories: TechnologyCategory[] = [
  {
    name: 'Mobile Frameworks',
    icon: 'Smartphone',
    iconColor: 'text-blue-600',
    technologies: [
      { name: 'Flutter', rating: 5 },
      { name: 'Dart', rating: 5 },
      { name: 'Swift (iOS Native)', rating: 4 },

    ]
  },
  {
    name: 'Architecture & Patterns',
    icon: 'Code',
    iconColor: 'text-green-600',
    technologies: [
      { name: 'Clean Architecture', rating: 5 },
      { name: 'BLoC/Cubit', rating: 5 },
      { name: 'SOLID Principles', rating: 5 },
      { name: 'Design Patterns', rating: 4 }
    ]
  },
  {
    name: 'Backend & Database',
    icon: 'Server',
    iconColor: 'text-purple-600',
    technologies: [
      { name: 'Firebase', rating: 5 },
      { name: 'REST APIs', rating: 5 },
      { name: 'PostgreSQL', rating: 4 },
      { name: 'Golang', rating: 4 },
      { name: '.NET Web API', rating: 4 }
    ]
  },
  {
    name: 'Tools & DevOps',
    icon: 'Wrench',
    iconColor: 'text-orange-600',
    technologies: [
      { name: 'Git & GitHub', rating: 5 },
      { name: 'Flutter Flavors', rating: 5 },
      { name: 'GoRouter', rating: 5 },
      { name: 'GetIt (DI)', rating: 5 },
      { name: 'Secure Storage', rating: 4 }
    ]
  },
  
];
