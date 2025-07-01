export interface App {
  id: string;
  name: string;
  category: string;
  icon: string;
  iconBg: string;
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
    id: 'taskflow',
    name: 'TaskFlow',
    category: 'Productivity & Task Management',
    icon: 'CheckSquare',
    iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
    description: 'A sophisticated task management application designed to help individuals and teams organize, prioritize, and track their work efficiently. TaskFlow combines intuitive design with powerful features to create a seamless productivity experience.',
    features: [
      'AI-powered task prioritization',
      'Real-time team collaboration',
      'Advanced project tracking',
      'Customizable workflows',
      'Smart deadline management',
      'Cross-platform synchronization'
    ],
    technologies: ['React Native', 'TypeScript', 'GraphQL', 'Firebase', 'Redux Toolkit']
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    category: 'Health & Fitness Tracking',
    icon: 'Heart',
    iconBg: 'bg-gradient-to-br from-red-400 to-red-600',
    description: 'A comprehensive fitness tracking application that helps users maintain a healthy lifestyle through detailed workout monitoring, nutrition tracking, and health insights. FitTrack integrates with various wearable devices for accurate data collection.',
    features: [
      'Workout planning and tracking',
      'Nutrition and calorie monitoring',
      'Wearable device integration',
      'Progress analytics and insights',
      'Social challenges and sharing',
      'Personal trainer connectivity'
    ],
    technologies: ['Flutter', 'Dart', 'HealthKit', 'Google Fit', 'Firebase']
  },
  {
    id: 'budgetwise',
    name: 'BudgetWise',
    category: 'Personal Finance Management',
    icon: 'PiggyBank',
    iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    description: 'An intelligent personal finance management app that helps users take control of their financial health. BudgetWise provides comprehensive budgeting tools, expense tracking, and investment portfolio management in one secure platform.',
    features: [
      'Smart expense categorization',
      'Bill reminders and alerts',
      'Investment portfolio tracking',
      'Budget planning and analysis',
      'Bank account synchronization',
      'Financial goal setting'
    ],
    technologies: ['React Native', 'Redux', 'Plaid API', 'Node.js', 'MongoDB']
  },
  {
    id: 'recipebook',
    name: 'RecipeBook',
    category: 'Food & Cooking',
    icon: 'UtensilsCrossed',
    iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600',
    description: 'A delightful cooking companion that brings together recipe discovery, meal planning, and cooking guidance. RecipeBook helps users explore new cuisines, plan meals, and cook with confidence through step-by-step instructions.',
    features: [
      'Recipe discovery and search',
      'Meal planning calendar',
      'Shopping list generation',
      'Step-by-step cooking guide',
      'Nutritional information',
      'Community recipe sharing'
    ],
    technologies: ['React Native', 'Firebase', 'Algolia Search', 'Stripe API']
  },
  {
    id: 'travelmate',
    name: 'TravelMate',
    category: 'Travel & Navigation',
    icon: 'Plane',
    iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
    description: 'Your ultimate travel companion for planning, booking, and managing trips. TravelMate provides comprehensive travel tools including itinerary planning, local recommendations, and real-time travel updates.',
    features: [
      'Trip planning and itinerary',
      'Flight and hotel booking',
      'Local recommendations',
      'Offline maps and navigation',
      'Travel document storage',
      'Expense tracking during trips'
    ],
    technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Stripe', 'REST APIs']
  },
  {
    id: 'mindspace',
    name: 'MindSpace',
    category: 'Mental Health & Wellness',
    icon: 'Brain',
    iconBg: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    description: 'A comprehensive mental wellness platform that provides tools for meditation, stress management, and emotional well-being. MindSpace offers personalized wellness programs and professional support resources.',
    features: [
      'Guided meditation sessions',
      'Mood tracking and analysis',
      'Stress management tools',
      'Professional therapist connection',
      'Wellness challenges',
      'Progress tracking and insights'
    ],
    technologies: ['React Native', 'Firebase', 'WebRTC', 'Push Notifications']
  }
];

export const packages: Package[] = [
  {
    name: 'react-native-smooth-picker',
    description: 'A smooth and customizable picker component for React Native with haptic feedback and gesture support.',
    stars: '1.2k',
    downloads: '15.8k',
    npmUrl: 'https://npmjs.com/package/react-native-smooth-picker',
    githubUrl: 'https://github.com/alexmorgan/react-native-smooth-picker'
  },
  {
    name: 'flutter-animated-charts',
    description: 'Beautiful animated chart library for Flutter with support for line, bar, and pie charts.',
    stars: '856',
    downloads: '8.3k',
    npmUrl: 'https://pub.dev/packages/flutter-animated-charts',
    githubUrl: 'https://github.com/alexmorgan/flutter-animated-charts'
  },
  {
    name: 'mobile-auth-flow',
    description: 'Complete authentication flow for mobile apps with biometric support and social login integration.',
    stars: '2.1k',
    downloads: '22.5k',
    npmUrl: 'https://npmjs.com/package/mobile-auth-flow',
    githubUrl: 'https://github.com/alexmorgan/mobile-auth-flow'
  },
  {
    name: 'react-native-camera-kit',
    description: 'Advanced camera component with QR code scanning, filters, and real-time processing capabilities.',
    stars: '3.7k',
    downloads: '31.2k',
    npmUrl: 'https://npmjs.com/package/react-native-camera-kit',
    githubUrl: 'https://github.com/alexmorgan/react-native-camera-kit'
  },
  {
    name: 'flutter-secure-storage-plus',
    description: 'Enhanced secure storage solution for Flutter with encryption and biometric protection.',
    stars: '1.9k',
    downloads: '18.7k',
    npmUrl: 'https://pub.dev/packages/flutter-secure-storage-plus',
    githubUrl: 'https://github.com/alexmorgan/flutter-secure-storage-plus'
  },
  {
    name: 'mobile-performance-monitor',
    description: 'Real-time performance monitoring and analytics for mobile applications with crash reporting.',
    stars: '1.4k',
    downloads: '12.1k',
    npmUrl: 'https://npmjs.com/package/mobile-performance-monitor',
    githubUrl: 'https://github.com/alexmorgan/mobile-performance-monitor'
  }
];

export const companies: Company[] = [
  {
    name: 'TechCorp Solutions',
    position: 'Senior Mobile Developer',
    period: '2022 - Present',
    description: 'Led a team of 5 developers in building cross-platform mobile applications for Fortune 500 clients. Implemented CI/CD pipelines, established coding standards, and mentored junior developers. Successfully delivered 8 major projects with 99.9% uptime and 4.8+ app store ratings.',
    technologies: ['React Native', 'Flutter', 'TypeScript'],
    iconBg: 'bg-blue-600',
    icon: 'Rocket'
  },
  {
    name: 'InnovateMobile Inc.',
    position: 'Mobile Developer',
    period: '2020 - 2022',
    description: 'Developed mobile applications for healthcare and fintech sectors. Specialized in creating HIPAA-compliant healthcare apps and secure payment solutions. Optimized app performance resulting in 40% faster load times and improved user retention by 25%.',
    technologies: ['React Native', 'Redux', 'Firebase'],
    iconBg: 'bg-green-600',
    icon: 'Smartphone'
  },
  {
    name: 'StartupHub',
    position: 'Junior Mobile Developer',
    period: '2018 - 2020',
    description: 'Worked on multiple startup projects, rapidly prototyping and iterating on mobile applications. Gained experience in agile development methodologies and direct client communication. Built MVP applications that helped secure $2M+ in funding for various startups.',
    technologies: ['Flutter', 'Dart', 'Node.js'],
    iconBg: 'bg-purple-600',
    icon: 'Code'
  }
];

export const technologyCategories: TechnologyCategory[] = [
  {
    name: 'Mobile Frameworks',
    icon: 'Smartphone',
    iconColor: 'text-blue-600',
    technologies: [
      { name: 'React Native', rating: 5 },
      { name: 'Flutter', rating: 4 },
      { name: 'Xamarin', rating: 3 },
      { name: 'Ionic', rating: 3 }
    ]
  },
  {
    name: 'Languages',
    icon: 'Code',
    iconColor: 'text-green-600',
    technologies: [
      { name: 'JavaScript/TypeScript', rating: 5 },
      { name: 'Dart', rating: 4 },
      { name: 'Swift', rating: 3 },
      { name: 'Kotlin', rating: 3 }
    ]
  },
  {
    name: 'Backend & Database',
    icon: 'Server',
    iconColor: 'text-purple-600',
    technologies: [
      { name: 'Node.js', rating: 5 },
      { name: 'Firebase', rating: 5 },
      { name: 'MongoDB', rating: 4 },
      { name: 'PostgreSQL', rating: 3 }
    ]
  },
  {
    name: 'Tools & DevOps',
    icon: 'Wrench',
    iconColor: 'text-orange-600',
    technologies: [
      { name: 'Git & GitHub', rating: 5 },
      { name: 'Docker', rating: 4 },
      { name: 'CI/CD', rating: 4 },
      { name: 'Jest & Detox', rating: 4 }
    ]
  }
];
