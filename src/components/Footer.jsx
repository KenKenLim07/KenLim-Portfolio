import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t ${isDarkMode ? 'border-gray-800 bg-black' : 'border-gray-200 bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Bottom Section */}
        <div className={`${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Jose Marie Lim. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#privacy"
                className={`text-sm transition-colors ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className={`text-sm transition-colors ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 