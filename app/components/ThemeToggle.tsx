import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-[#5D2E0A] dark:border-[#8B4513] text-[#160a05] dark:text-[#F5F5DC] hover:bg-[#5D2E0A]/10 dark:hover:bg-[#8B4513]/10 transition-colors font-mono"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        // Moon icon for dark mode
        <svg className="w-5 h-5" fill="none" stroke="#5D2E0A" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      ) : (
        // Sun icon for light mode
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      )}
    </button>
  );
}
