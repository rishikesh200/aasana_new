# Assana - Professional Web Application

A modern, professional web application built with React, Vite, Tailwind CSS, and React Router.

## 🚀 Features

- **Professional Structure**: Well-organized folder structure following best practices
- **API Service Layer**: Centralized API management with axios and interceptors
- **Routing**: Complete routing setup for public pages
- **Components**: Reusable Header, Footer, and Layout components
- **Public Website**: Clean, public-facing website without authentication
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Error Handling**: Error boundaries and global error handling
- **Utilities**: Helpful utility functions and validators

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Site footer
│   ├── Layout/         # Main layout wrapper
│   ├── Loading/        # Loading spinner component
│   └── ErrorBoundary/  # Error boundary component
├── pages/              # Page components
│   ├── Home/           # Home page
│   ├── About/          # About page
│   ├── Contact/        # Contact page
│   └── NotFound/       # 404 error page
├── services/           # API services
│   └── api.js          # Base API configuration
├── hooks/              # Custom React hooks (for future use)
├── utils/              # Utility functions
│   ├── helpers.js      # Helper functions
│   └── validators.js   # Form validators
├── constants/          # Constants and configuration
│   └── config.js       # App configuration
├── App.jsx             # Main app component with routing
└── main.jsx            # Application entry point
```

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (copy from `.env.example`):
```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

3. Start the development server:
```bash
npm run dev
```

## 📝 Available Routes

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `*` - 404 Not Found page

## 🔧 Configuration

### API Configuration

Update the API base URL in `.env` file:
```
VITE_API_BASE_URL=your_api_url_here
```

Or modify `src/constants/config.js` for default values.

### Routes

Routes are defined in `src/constants/config.js` under the `ROUTES` object.

## 🎨 Styling

This project uses Tailwind CSS v4 for styling. Customize the theme in your CSS files or Tailwind configuration.

## 📦 Key Dependencies

- **React 19** - UI library
- **Vite 7** - Build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS 4** - Utility-first CSS framework

## 🚦 API Service

The API service (`src/services/api.js`) includes:
- Response interceptors for error handling
- Global error handling
- Timeout configuration
- Standard HTTP methods (GET, POST, PUT, PATCH, DELETE)

Example usage:
```javascript
import { apiService } from './services/api';

// GET request
const data = await apiService.get('/users');

// POST request
const result = await apiService.post('/users', { name: 'John' });
```

## 📱 Responsive Design

All components are built with mobile-first approach and are fully responsive.


## 🎯 Next Steps

- Add more pages and components as needed
- Connect to your backend API
- Customize styling and branding
- Add more features based on your requirements

## 📄 License

MIT
