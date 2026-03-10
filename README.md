# Huỳnh Huệ Minh Giàu

# YOOEDU - Education Center Management System

## Overview

YOOEDU is a comprehensive education center management system designed to streamline administrative operations for educational institutions. This project serves as the practical foundation for a React development pre-course, providing students with hands-on experience building a real-world application using industry-standard technologies.

## Project Purpose

This project is developed as part of a React hands-on practice course for final-year university students. The primary objectives are:

- To provide practical experience with industry-standard React development workflows
- To simulate real-world project development environments
- To teach collaborative development using Scrum framework
- To expose students to the complete product development lifecycle from analysis to deployment

## Technology Stack

### Core Technologies

- **React** 19.2.0 - UI library
- **TypeScript** 5.9.3 - Programming language
- **Vite** 7.2.4 - Build tool

### State Management

- **Redux Toolkit** 2.11.2 - Global state managementv
- **React Redux** 9.2.0 - React bindings for Redux

### Routing

- **React Router** 7.11.0 - Client-side routing

### Styling

- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **Tailwind Merge** 3.4.0 - Utility for merging Tailwind classes
- **Class Variance Authority** 0.7.1 - Component variant management
- **Clsx** 2.1.1 - Conditional className utility

### UI Components

- **Radix UI** - Headless UI components
- **Lucide React** 0.561.0 - Icon library
- **React Select** 5.10.2 - Select component
- **React Data Grid** 7.0.0-beta.59 - Data grid component
- **React Day Picker** 9.13.0 - Date picker component

### Form Handling

- **React Hook Form** 7.68.0 - Form state management
- **Zod** 4.1.13 - Schema validation
- **@hookform/resolvers** 5.2.2 - Form resolvers for Zod

### HTTP & Data

- **Axios** 1.13.2 - HTTP client

### Authentication

- **JWT Decode** 4.0.0 - JWT token parsing
- **JS Cookie** 3.0.5 - Cookie handling

### Utilities

- **Date-fns** 4.1.0 - Date manipulation
- **Lodash.isequal** 4.5.0 - Deep equality checking
- **Next Themes** 0.4.6 - Theme management
- **Sonner** 2.0.7 - Toast notifications
- **CMDK** 1.1.1 - Command palette

### Development

- **ESLint** 9.39.1 - Linting
- **@vitejs/plugin-react** 5.1.1 - React plugin for Vite
- **Tailwind Vite** 4.1.18 - Tailwind plugin for Vite

## Project Modules

### Administration Module

- CRUD operations for student information
- CRUD operations for teacher and teaching assistant information
- Course management
- Shift management (weekday and time)
- Class management (1 class per course, multiple shifts per class)
- Student registration into classes
- Authorization management
- Attendance tracking
- Payment processing and tuition fee management
- Parent notifications

### Academic Module

- Student attendance tracking
- Class change management
- Student status management
- Study result recording
  - Test grades
  - Teacher comments

## Course Structure

### Phase 1: Pre-course Knowledge Refinement (3 Weeks)

The initial phase focuses on building a solid foundation before diving into the main project. Students will:

- Set up development environment with modern tools
- Learn React fundamentals with hands-on practice
- Understand TypeScript integration
- Build a mini Student Management System progressively

### Phase 2: Build YOOEDU Project (12 Weeks)

The main phase follows Scrum methodology where students:

- Work on real YOOEDU features
- Experience collaborative development
- Follow industry best practices
- Participate in sprint cycles

## Getting Started

### Prerequisites

- Node.js (latest stable version)
- npm or yarn
- Git
- Visual Studio Code (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
/src
├── /components
│   └── /shared         # Shared components used throughout the app
├── /config             # Application configuration
├── /layout             # Route layouts
├── /mock               # Mock data
├── /pages              # Page components
├── /services           # Data services (localStorage API for Phase 1)
└── ...
```

## Development Guidelines

- Use React functional components exclusively
- Utilize Tailwind CSS for all styling
- Write fully typed TypeScript code
- Follow ESLint rules for code quality
- Use meaningful variable and function names

## Documentation

Detailed exercise instructions are available in the `/docs` directory:

- `/docs/day-1/exercise.md` - Day 1 exercise specifications

## License

This project is developed for educational purposes as part of the YOOEDU training course.
