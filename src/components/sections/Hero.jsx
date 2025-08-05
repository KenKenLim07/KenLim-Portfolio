import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import profileImage from '../../assets/profile.jpg';

export const Hero = () => {
  const heroRef = useRef(null);
  const { isDarkMode } = useTheme();

  // Set dynamic height for hero section
  useEffect(() => {
    const updateHeroHeight = () => {
      if (heroRef.current) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 64;
        const viewportHeight = window.innerHeight;
        const availableHeight = viewportHeight - navbarHeight;
        heroRef.current.style.height = `${availableHeight}px`;
        heroRef.current.style.minHeight = `${availableHeight}px`;
      }
    };
    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);
    return () => window.removeEventListener('resize', updateHeroHeight);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollContainer = document.getElementById('root') || window;
      const isRootScrolling = !!document.getElementById('root');
      const currentScrollY = isRootScrolling ? scrollContainer.scrollTop : window.scrollY;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + currentScrollY;
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 64;
      const targetScrollY = elementTop - navbarHeight - 20;
      const finalScrollY = Math.max(0, targetScrollY);
      if (isRootScrolling) {
        scrollContainer.scrollTo({ top: finalScrollY, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: finalScrollY, behavior: 'smooth' });
      }
    }
  };

  const techStack = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.276 0-.56.015-.854.05C3.95 1.5 4.72 3.44 6.004 5.76 4.43 6.868 3.278 8.545 2.542 10.5c.324.022.66.034 1.006.034 1.345 0 3.107-.96 4.888-2.623 1.78 1.652 3.542 2.602 4.887 2.602.276 0 .56-.015.854-.05 1.14-1.15 1.91-3.09 3.194-5.41-1.575-1.108-2.727-2.785-3.463-4.74-.324-.022-.66-.034-1.006-.034zm-.005 1.372c.28 0 .593.018.932.054.892 1.7 2.047 3.535 3.342 5.4-1.295 1.865-2.45 3.7-3.342 5.4-.339.036-.652.054-.932.054-.28 0-.593-.018-.932-.054-.892-1.7-2.047-3.535-3.342-5.4 1.295-1.865 2.45-3.7 3.342-5.4.339-.036.652-.054.932-.054z"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.414-.511-.06-.854-.234-1.195-.855-.326-.45-.38-.855-.326-1.38.09-.495.465-.975.975-1.14.39-.15.855-.12 1.23.105.42.27.675.645.795 1.125.21.675.27 1.23.195 1.89-.105.675-.42 1.23-.975 1.65-.555.42-1.23.675-1.965.675-1.14 0-2.055-.375-2.745-1.125-.69-.75-1.02-1.755-.975-2.88.045-1.125.42-2.055 1.125-2.745.705-.69 1.62-1.065 2.745-1.125.555-.015 1.11.075 1.65.27.54.195 1.05.495 1.5.885.45.39.825.855 1.125 1.38.3.525.51 1.125.63 1.755.12.63.15 1.29.09 1.95-.06.66-.21 1.32-.45 1.95-.24.63-.57 1.23-.99 1.77-.42.54-.93 1.02-1.53 1.44-.6.42-1.29.75-2.04.99-.75.24-1.56.36-2.4.36-1.8 0-3.24-.6-4.32-1.8-1.08-1.2-1.62-2.76-1.62-4.68 0-1.92.54-3.48 1.62-4.68 1.08-1.2 2.52-1.8 4.32-1.8 1.8 0 3.24.6 4.32 1.8 1.08 1.2 1.62 2.76 1.62 4.68 0 1.92-.54 3.48-1.62 4.68z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.625,0.519-1.125,1.924-1.125 c1.693,0,2.316,0.374,2.316,1.374c0,0.142,0.114,0.253,0.256,0.253h1.114c0.141,0,0.254-0.112,0.254-0.253 c0-1.254-0.924-2.252-2.67-2.252c-1.764,0-3.14,0.795-3.14,2.252c0,1.771,1.576,2.252,3.987,2.763c2.73,0.36,3.009,0.547,3.009,1.186 c0,0.651-0.554,1.125-1.924,1.125c-1.693,0-2.316-0.374-2.316-1.374c0-0.141-0.114-0.253-0.256-0.253h-1.114 c-0.141,0-0.254,0.112-0.254,0.253c0,1.254,0.924,2.252,2.67,2.252c1.764,0,3.14-0.795,3.14-2.252V13.993z"/>
        </svg>
      )
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm4-9c-1.5 0-2.5-1-2.5-2.5S12.5 2.5 14 2.5s2.5 1 2.5 2.5S15.5 7 14 7z"/>
        </svg>
      )
    },
    {
      name: 'Firebase',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-16a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984 14.3 7.147z"/>
        </svg>
      )
    },
    {
      name: 'Supabase',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          <path d="M7 8h10v2H7V8zm0 4h10v2H7v-2zm0 4h8v2H7v-2z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    },
    {
      name: 'Vite',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"/>
        </svg>
      )
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M23.546 10.93 13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      )
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M24 13.89c0-.042-.003-.084-.007-.125.004-.041.007-.083.007-.125 0-1.654-1.346-3-3-3h-.563l.286-.857c.176-.527.133-1.09-.12-1.586L20.21 6.27c-.253-.496-.698-.84-1.228-.982l-2.708-.677-2.708.677c-.53.142-.975.486-1.228.982l-1.543 3.017c-.253.496-.296 1.059-.12 1.586l.286.857H12c-1.654 0-3 1.346-3 3 0 .042.003.084.007.125-.004.041-.007.083-.007.125 0 1.654 1.346 3 3 3h.563l-.286.857c-.176.527-.133 1.09.12 1.586l1.543 3.017c.253.496.698.84 1.228.982l2.708.677 2.708-.677c.53-.142.975-.486 1.228-.982l1.543-3.017c.253-.496.296-1.059.12-1.586L23.437 17h.563c1.654 0 3-1.346 3-3"/>
        </svg>
      )
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
          <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2zm0 4h6v2H8v-2z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero-viewport-dynamic flex flex-col justify-start relative overflow-hidden pt-4"
    >
      <div className="max-w-3xl mx-auto px-3">
        {/* Main Content - Flexible height matching */}
        <div className="mt-2 flex flex-row items-start w-full min-h-[400px]">
          {/* Left: Bordered Box with Floating Label */}
          <div
            className={`relative flex-1 flex items-start justify-center min-w-0 w-7/12 p-2 md:p-4`}
          >
            <div
              className={`relative w-full border border-gray-300 dark:border-neutral-700 rounded-lg p-3 md:p-6 shadow-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-[#0e0e0e] text-gray-200' : 'bg-white text-neutral-900'
              }`}
            >
              {/* Floating Label */}
              <div
                className={`absolute -top-3 left-4 px-2 py-0.5 text-xs font-bold uppercase tracking-wide border border-gray-300 dark:border-neutral-400 rounded ${
                  isDarkMode ? 'bg-[#0e0e0e] text-gray-200' : 'bg-white text-neutral-700'
                }`}
                style={{ 
                  letterSpacing: '0.08em',
                  backgroundColor: isDarkMode ? '#0e0e0e' : '#ffffff'
                }}
              >
                Hi, I'm Jose Marie Lim
              </div>
              <div className="space-y-2 mt-2">
                <p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{
                    fontSize: 'clamp(14px, 2.8vw, 18px)',
                    lineHeight: 'clamp(1.4, 2.5vw, 1.6)'
                  }}
                >
                  I specialize in identifying complex problems and crafting elegant solutions that drive real impact. I transform challenges into opportunities by combining technical expertise with strategic thinking. Currently focused on building robust, user-centric applications that solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Profile Picture and Buttons */}
          <div className="flex flex-col items-center justify-start w-5/12 gap-3 md:gap-4 p-2 md:p-4">
            {/* Profile Picture */}
            <motion.div
              className="mb-2 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border-2 shadow-lg p-1 ${
                isDarkMode 
                  ? 'border-neutral-600/50 bg-neutral-800' 
                  : 'border-gray-300/50 bg-white'
              }`}>
                <img
                  src={profileImage}
                  alt="Jose Marie Lim"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>

            <motion.button
              onClick={() => scrollToSection('projects')}
              className={`py-2 md:py-3 rounded-lg border-2 font-semibold shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isDarkMode
                  ? 'bg-white text-black border-neutral-200 hover:border-neutral-300'
                  : 'bg-gray-900 text-white border-transparent'
              }`}
              style={{
                width: 'clamp(80px, 15vw, 224px)',
                fontSize: 'clamp(12px, 2.5vw, 16px)',
                paddingLeft: 'clamp(8px, 2vw, 16px)',
                paddingRight: 'clamp(8px, 2vw, 16px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                <svg 
                  className="flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ width: 'clamp(12px, 2.5vw, 16px)', height: 'clamp(12px, 2.5vw, 16px)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="hidden sm:inline">View Projects</span>
                <span className="sm:hidden">Projects</span>
              </span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className={`py-2 md:py-3 rounded-lg border-2 font-semibold shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isDarkMode
                  ? 'border-neutral-600 hover:border-neutral-500 bg-neutral-900 text-white'
                  : 'border-neutral-400 hover:border-neutral-500 bg-white text-gray-900'
              }`}
              style={{
                width: 'clamp(80px, 15vw, 224px)',
                fontSize: 'clamp(12px, 2.5vw, 16px)',
                paddingLeft: 'clamp(8px, 2vw, 16px)',
                paddingRight: 'clamp(8px, 2vw, 16px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                <svg 
                  className="flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ width: 'clamp(12px, 2.5vw, 16px)', height: 'clamp(12px, 2.5vw, 16px)' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">Contact Me</span>
                <span className="sm:hidden">Contact</span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Tech Stack Section - Directly after main content */}
        <div className="w-full mt-0">
          <div className={`relative flex flex-wrap justify-center items-center gap-2 md:gap-3 px-4 py-2 rounded-lg ${
            isDarkMode 
              ? 'bg-[#0e0e0e]' 
              : 'bg-white'
          }`}>
            {techStack.map((tech, index) => (
      <motion.div 
                key={tech.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <motion.div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg border-2 ${
                    isDarkMode 
                      ? 'bg-neutral-800 border-neutral-600 hover:border-neutral-500 text-gray-300' 
                      : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  title={tech.name}
                >
                  {tech.icon}
        </motion.div>
      </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 