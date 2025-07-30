import React, { useState, useEffect } from 'react';
import { Palette, Grid2X2, Type, Zap, Book, Code, FileText, ChevronRight, ChevronLeft, Sparkles, BookOpen, PencilLine } from 'lucide-react';
import Header from '@/components/Header';
import ColorTokens from '@/components/design-system/ColorTokens';
import TypographyScale from '@/components/design-system/TypographyScale';
import ComponentLibrary from '@/components/design-system/ComponentLibrary';
import GridSystem from '@/components/design-system/GridSystem';
import ShadowSystem from '@/components/design-system/ShadowSystem';
import IconLibrary from '@/components/design-system/IconLibrary';
import NavigationSystem from '@/components/design-system/NavigationSystem';
import FormSystem from '@/components/design-system/FormSystem';
import NamingConventions from '@/components/design-system/NamingConventions';
import DesignGuidelines from '@/components/design-system/DesignGuidelines';
import DocumentationGuide from '@/components/design-system/DocumentationGuide';

const Index = () => {
  const [activeSection, setActiveSection] = useState('colors');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [showDocumentation, setShowDocumentation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navigationItems = [
    { id: 'colors', label: 'Cores & Tokens', icon: Palette },
    { id: 'typography', label: 'Tipografia', icon: Type },
    { id: 'components', label: 'Componentes', icon: Grid2X2 },
    { id: 'shadows', label: 'Sombras', icon: Sparkles },
    { id: 'icons', label: 'Ícones', icon: Zap },
    { id: 'grid', label: 'Grid System', icon: Book },
    { id: 'navigation', label: 'Navegação', icon: Code },
    { id: 'forms', label: 'Formulários', icon: FileText },
    { id: 'naming', label: 'Nomenclatura & Tokens', icon: PencilLine }
  ];

  const renderActiveSection = () => {
    if (showGuidelines) {
      return <DesignGuidelines />;
    }

    if (showDocumentation) {
      return <DocumentationGuide />;
    }

    switch (activeSection) {
      case 'colors':
        return <ColorTokens />;
      case 'typography':
        return <TypographyScale />;
      case 'components':
        return <ComponentLibrary />;
      case 'shadows':
        return <ShadowSystem />;
      case 'icons':
        return <IconLibrary />;
      case 'grid':
        return <GridSystem />;
      case 'navigation':
        return <NavigationSystem />;
      case 'forms':
        return <FormSystem />;
      case 'naming':
        return <NamingConventions />;
      default:
        return <ColorTokens />;
    }
  };

  const handleGuidelinesClick = () => {
    setShowGuidelines(!showGuidelines);
    setShowDocumentation(false);
  };

  const handleDocumentationClick = () => {
    setShowDocumentation(!showDocumentation);
    setShowGuidelines(false);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowGuidelines(false);
    setShowDocumentation(false);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        onGuidelinesClick={handleGuidelinesClick}
        darkMode={darkMode}
        onDarkModeToggle={handleDarkModeToggle}
      />
      
      <div className="flex">
        {/* Sidebar - Fixed */}
        <div className={`${sidebarCollapsed ? 'w-20' : 'w-72'} transition-all duration-300 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed left-0 top-20 bottom-0 z-30`}>
          <div className="p-4 h-full overflow-y-auto">
            {/* Documentation Button */}
            <div className="mb-6">
              <button
                onClick={handleDocumentationClick}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                  showDocumentation
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400'
                } ${sidebarCollapsed ? 'justify-center' : ''}`}
                title={sidebarCollapsed ? 'Guia de Uso' : ''}
              >
                <BookOpen 
                  size={18} 
                  className={`transition-transform duration-200 ${
                    showDocumentation ? 'scale-110' : 'group-hover:scale-105'
                  } flex-shrink-0 ${sidebarCollapsed ? 'mx-auto' : ''}`}
                />
                {!sidebarCollapsed && (
                  <span className="font-medium truncate">Guia de Uso</span>
                )}
              </button>
            </div>

            <nav>
              <div className="space-y-1">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id && !showGuidelines && !showDocumentation;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSectionClick(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                      } ${sidebarCollapsed ? 'justify-center' : ''}`}
                      title={sidebarCollapsed ? item.label : ''}
                    >
                      <IconComponent 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          isActive ? 'scale-110' : 'group-hover:scale-105'
                        } flex-shrink-0 ${sidebarCollapsed ? 'mx-auto' : ''}`}
                      />
                      {!sidebarCollapsed && (
                        <span className="font-medium truncate">{item.label}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Sidebar Toggle Button - Fixed position relative to sidebar */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`absolute top-1/2 transform -translate-y-1/2 ${sidebarCollapsed ? '-right-4' : '-right-4'} w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-purple-700 z-40`}
            aria-label={sidebarCollapsed ? 'Expandir menu' : 'Recolher menu'}
          >
            {sidebarCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className={`flex-1 ${sidebarCollapsed ? 'ml-20' : 'ml-72'} transition-all duration-300 p-6`}>
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
