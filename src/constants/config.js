// Application constants and configuration

export const APP_NAME = 'Assana';
export const APP_VERSION = '1.0.0';

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://assana-site-backend.vercel.app/api',
  TIMEOUT: 10000,
};

// Route paths
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  // Colorectal Clinic routes
  // COLORECTAL_SYMPTOMS: '/colorectal-symptoms',
  // PILES_HAEMORRHOIDS: '/piles-haemorrhoids',
  // BANDING_PILES: '/banding-piles',
  // LASER_SURGERY_PILES: '/laser-surgery-piles',
  // ANAL_FISSURE: '/anal-fissure',
  // ANAL_FISTULA: '/anal-fistula',
  // AFTER_ANAL_SURGERY: '/after-anal-surgery',
  // PELVIC_FLOOR_PROBLEMS: '/pelvic-floor-problems',
  // COLON_RECTAL_CANCER: '/colon-rectal-cancer',
  
  // Gut Wellness routes
  // GUT_BRAIN_AXIS: '/gut-brain-axis',
  
  // Education routes
  // EDUCATIONAL_RESOURCES: '/educational-resources',
  // HEALTH_ARTICLES: '/health-articles',
  
  // Products routes
  // OUR_PRODUCTS: '/our-products',
  // SHOP: '/shop',
  
  // Wellness Programmes routes
  // COLON_HYDROTHERAPY: '/colon-hydrotherapy',
  // ASSANA_BUTT_CHECK: '/assana-butt-check',
  // NEW_MOMS_PROGRAMME: '/new-moms-programme',
  // MENOPAUSE_PROGRAMME: '/menopause-programme',
  // SENIOR_CITIZENS_PROGRAMME: '/senior-citizens-programme',
};

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'theme',
};

// Theme configuration
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Breakpoints (for responsive design)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
};

