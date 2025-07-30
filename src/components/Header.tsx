
import React from 'react';
import { Sparkles, FileText, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onGuidelinesClick: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const Header = ({ onGuidelinesClick, darkMode, onDarkModeToggle }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <Sparkles 
                size={16} 
                className="absolute -top-1 -right-1 text-purple-400 animate-pulse" 
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Bê UX Creative</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Design System Library</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onDarkModeToggle}
              className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={onGuidelinesClick}
              className="flex items-center gap-2 px-3 py-2 bg-purple-700 dark:bg-purple-600 text-white rounded-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 text-sm hover:bg-purple-800 dark:hover:bg-purple-700"
            >
              <FileText size={14} />
              <span>Diretrizes UX Creative</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
