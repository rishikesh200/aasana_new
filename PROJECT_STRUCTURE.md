# Project Structure Overview

## 📂 Complete File Structure

```
assna_new/
├── src/
│   ├── components/              # Reusable UI Components
│   │   ├── ErrorBoundary/
│   │   │   └── ErrorBoundary.jsx    # Error boundary for catching React errors
│   │   ├── Footer/
│   │   │   └── Footer.jsx           # Site footer with links and social media
│   │   ├── Header/
│   │   │   └── Header.jsx           # Navigation header with responsive menu
│   │   ├── Layout/
│   │   │   └── Layout.jsx           # Main layout wrapper (Header + Footer)
│   │   └── Loading/
│   │       └── Loading.jsx          # Loading spinner component
│   │
│   ├── pages/                   # Page Components
│   │   ├── About/
│   │   │   └── About.jsx            # About page
│   │   ├── Contact/
│   │   │   └── Contact.jsx          # Contact form page
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx        # Protected dashboard page
│   │   ├── Home/
│   │   │   └── Home.jsx             # Home/landing page
│   │   ├── Login/
│   │   │   └── Login.jsx            # Login page with authentication
│   │   ├── NotFound/
│   │   │   └── NotFound.jsx         # 404 error page
│   │   └── Register/
│   │       └── Register.jsx         # Registration page
│   │
│   ├── services/                # API Services
│   │   └── api.js                   # Base API service with axios, interceptors
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   └── useAuth.js               # Authentication hook (login, logout, user state)
│   │
│   ├── utils/                   # Utility Functions
│   │   ├── helpers.js               # General helper functions
│   │   └── validators.js            # Form validation utilities
│   │
│   ├── constants/               # Constants & Configuration
│   │   └── config.js                # App routes, API config, storage keys
│   │
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App-specific styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles (Tailwind import)
│
├── .env.example                 # Environment variables template
├── README.md                    # Project documentation
├── PROJECT_STRUCTURE.md         # This file
├── package.json                 # Dependencies and scripts
└── vite.config.js               # Vite configuration
```

## 🎯 Key Features Implemented

### ✅ Base API Service
- **Location**: `src/services/api.js`
- Axios instance with base URL configuration
- Request interceptor for automatic token injection
- Response interceptor for global error handling
- Methods: `get`, `post`, `put`, `patch`, `delete`
- Timeout and error handling

### ✅ Header Component
- **Location**: `src/components/Header/Header.jsx`
- Responsive navigation menu
- Mobile hamburger menu
- Active route highlighting
- Authentication-aware buttons (Login/Logout)
- Sticky header with shadow

### ✅ Footer Component
- **Location**: `src/components/Footer/Footer.jsx`
- Company information
- Navigation links (Company, Legal, Resources)
- Social media icons
- Responsive grid layout
- Copyright information

### ✅ App Router
- **Location**: `src/App.jsx`
- React Router DOM setup
- Protected routes with authentication check
- All routes defined and working:
  - `/` - Home
  - `/about` - About
  - `/contact` - Contact
  - `/login` - Login
  - `/register` - Register
  - `/dashboard` - Dashboard (protected)
  - `*` - 404 Not Found

### ✅ Layout System
- **Location**: `src/components/Layout/Layout.jsx`
- Wraps all pages with Header and Footer
- Flexbox layout for proper spacing
- Sticky header, flexible content, footer at bottom

### ✅ Additional Components
- **Loading Component**: Reusable loading spinner
- **ErrorBoundary**: Catches React errors gracefully
- **404 Page**: Custom not found page

### ✅ Utilities
- **helpers.js**: Date formatting, debounce, currency, email validation, etc.
- **validators.js**: Form validation functions (required, email, password, etc.)

### ✅ Custom Hooks
- **useAuth**: Authentication state management hook

### ✅ Constants
- **config.js**: Centralized configuration (routes, API URLs, storage keys)

## 🔧 Configuration Files

1. **vite.config.js**: Vite build configuration with React plugin
2. **.env.example**: Template for environment variables
3. **package.json**: Project dependencies and scripts

## 🚀 Next Steps

To use this structure:

1. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Update `VITE_API_BASE_URL` with your backend API URL

2. **Connect to your backend**:
   - Update API endpoints in `src/services/api.js` if needed
   - Modify API calls in pages/components

3. **Customize styling**:
   - Update colors in Tailwind classes
   - Modify component styles as needed
   - Customize Header/Footer branding

4. **Add more pages**:
   - Create new page components in `src/pages/`
   - Add routes in `src/App.jsx`
   - Update navigation in `src/components/Header/Header.jsx`

5. **Extend functionality**:
   - Add more API services in `src/services/`
   - Create more custom hooks in `src/hooks/`
   - Add more utility functions as needed

## 📝 Notes

- All components use functional components with React hooks
- Responsive design with Tailwind CSS
- Error handling at multiple levels (API, routes, components)
- Authentication state managed via localStorage
- Professional folder structure following React best practices

