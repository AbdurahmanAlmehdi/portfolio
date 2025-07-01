# Portfolio Web Application - Replit Configuration

## Overview

This is a modern full-stack portfolio web application built with React and Express. The app showcases a mobile developer's work through an interactive portfolio featuring apps, packages, work experience, and technologies. It includes a contact form system and is designed with a mobile-first approach using contemporary web technologies.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS for utility-first styling
- **Component Library**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL-based sessions
- **API Design**: RESTful API endpoints with JSON responses

### Development Setup
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: ESBuild for server bundling, Vite for client bundling
- **Type Checking**: TypeScript strict mode enabled
- **Code Quality**: Path mapping for clean imports

## Key Components

### Frontend Components
1. **Portfolio Pages**: Interactive sections for apps, packages, companies, technologies
2. **iPhone Mockup**: Interactive mobile device simulation for app showcase
3. **Contact Form**: Form validation with real-time feedback
4. **App Modal**: Detailed view for individual applications
5. **Navigation**: Smooth scrolling navigation between sections

### Backend Services
1. **Contact API**: Handles contact form submissions with validation
2. **Storage Layer**: Abstracted storage interface (currently in-memory, designed for database)
3. **Request Logging**: Comprehensive API request/response logging
4. **Error Handling**: Centralized error handling with proper HTTP status codes

### Shared Schema
- **Database Schema**: Drizzle schema definitions for users and contacts
- **Validation**: Zod schemas for runtime type validation
- **Type Safety**: Full TypeScript integration between client and server

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests with validation
3. **Data Storage**: Currently uses in-memory storage (MemStorage class)
4. **Response Handling**: JSON responses with proper error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority
- **Forms**: React Hook Form with Hookform resolvers
- **Animation**: Framer Motion, Embla Carousel
- **Utilities**: date-fns, clsx, nanoid

### Development Dependencies
- **Build Tools**: Vite, ESBuild, TypeScript
- **Database**: Drizzle Kit, Neon Database serverless
- **Development**: TSX for TypeScript execution
- **Replit Integration**: Custom Vite plugins for Replit environment

## Deployment Strategy

### Development Mode
- Vite dev server with HMR for client
- TSX for running TypeScript server directly
- Integrated development experience with hot reloading

### Production Build
- Client: Vite builds to `dist/public` directory
- Server: ESBuild bundles server to `dist/index.js`
- Static file serving from Express server
- Environment-based configuration

### Database Migration
- Drizzle Kit for database migrations
- Schema push command for development
- PostgreSQL dialect configuration

### Environment Configuration
- Database URL configuration
- Development/production mode detection
- Replit-specific integrations when available

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```