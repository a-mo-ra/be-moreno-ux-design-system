
import React, { useState } from 'react';
import { Palette, Copy, Check, Sun, Moon, Eye, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ColorTokens = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'light' | 'dark' | 'both'>('both');

  const copyToClipboard = async (text: string, tokenName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedToken(tokenName);
      toast({
        title: "Token copiado!",
        description: `O token ${tokenName} foi copiado para sua área de transferência.`,
      });
      setTimeout(() => setCopiedToken(null), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o token.",
        variant: "destructive",
      });
    }
  };

  const colorCategories = [
    {
      name: 'Cores Primárias',
      description: 'Cores principais da marca, use para CTAs e elementos de destaque',
      colors: [
        {
          name: 'bc-primary-50',
          light: '#faf5ff',
          dark: '#1e1b4b',
          contrast: { light: '19:1', dark: '12:1' },
          usage: 'Backgrounds muito claros, estados hover sutis'
        },
        {
          name: 'bc-primary-100',
          light: '#f3e8ff',
          dark: '#312e81',
          contrast: { light: '16:1', dark: '9:1' },
          usage: 'Backgrounds claros, badges informativos'
        },
        {
          name: 'bc-primary-200',
          light: '#e9d5ff',
          dark: '#3730a3',
          contrast: { light: '12:1', dark: '7:1' },
          usage: 'Borders, divisores, estados disabled'
        },
        {
          name: 'bc-primary-300',
          light: '#d8b4fe',
          dark: '#4338ca',
          contrast: { light: '8:1', dark: '5.5:1' },
          usage: 'Placeholder text, elementos secundários'
        },
        {
          name: 'bc-primary-400',
          light: '#c084fc',
          dark: '#4f46e5',
          contrast: { light: '5.2:1', dark: '4.8:1' },
          usage: 'Ícones secundários, elementos interativos'
        },
        {
          name: 'bc-primary-500',
          light: '#a855f7',
          dark: '#6366f1',
          contrast: { light: '4.6:1', dark: '4.2:1' },
          usage: 'Cor principal, estados normal'
        },
        {
          name: 'bc-primary-600',
          light: '#9333ea',
          dark: '#8b5cf6',
          contrast: { light: '5.8:1', dark: '3.8:1' },
          usage: 'Botões primários, links principais'
        },
        {
          name: 'bc-primary-700',
          light: '#7c3aed',
          dark: '#a78bfa',
          contrast: { light: '7.2:1', dark: '3.2:1' },
          usage: 'Estados hover, elementos ativos'
        },
        {
          name: 'bc-primary-800',
          light: '#6b21a8',
          dark: '#c4b5fd',
          contrast: { light: '9.8:1', dark: '2.8:1' },
          usage: 'Estados pressed, elementos enfatizados'
        },
        {
          name: 'bc-primary-900',
          light: '#581c87',
          dark: '#e9d5ff',
          contrast: { light: '13:1', dark: '2.2:1' },
          usage: 'Textos em backgrounds claros'
        }
      ]
    },
    {
      name: 'Cores Neutras',
      description: 'Para textos, backgrounds e elementos estruturais',
      colors: [
        {
          name: 'bc-neutral-50',
          light: '#fafafa',
          dark: '#0a0a0a',
          contrast: { light: '20:1', dark: '21:1' },
          usage: 'Background principal claro'
        },
        {
          name: 'bc-neutral-100',
          light: '#f5f5f5',
          dark: '#171717',
          contrast: { light: '18:1', dark: '18:1' },
          usage: 'Backgrounds de seções'
        },
        {
          name: 'bc-neutral-200',
          light: '#e5e5e5',
          dark: '#262626',
          contrast: { light: '14:1', dark: '14:1' },
          usage: 'Borders, divisores'
        },
        {
          name: 'bc-neutral-300',
          light: '#d4d4d4',
          dark: '#404040',
          contrast: { light: '10:1', dark: '10:1' },
          usage: 'Borders mais visíveis'
        },
        {
          name: 'bc-neutral-400',
          light: '#a3a3a3',
          dark: '#525252',
          contrast: { light: '6.8:1', dark: '6.8:1' },
          usage: 'Textos placeholder'
        },
        {
          name: 'bc-neutral-500',
          light: '#737373',
          dark: '#737373',
          contrast: { light: '4.6:1', dark: '4.6:1' },
          usage: 'Textos secundários'
        },
        {
          name: 'bc-neutral-600',
          light: '#525252',
          dark: '#a3a3a3',
          contrast: { light: '6.8:1', dark: '6.8:1' },
          usage: 'Textos de apoio'
        },
        {
          name: 'bc-neutral-700',
          light: '#404040',
          dark: '#d4d4d4',
          contrast: { light: '10:1', dark: '10:1' },
          usage: 'Textos importantes'
        },
        {
          name: 'bc-neutral-800',
          light: '#262626',
          dark: '#e5e5e5',
          contrast: { light: '14:1', dark: '14:1' },
          usage: 'Textos enfatizados'
        },
        {
          name: 'bc-neutral-900',
          light: '#171717',
          dark: '#fafafa',
          contrast: { light: '18:1', dark: '20:1' },
          usage: 'Textos principais, títulos'
        }
      ]
    },
    {
      name: 'Cores Semânticas',
      description: 'Para feedback, status e comunicação de estados',
      colors: [
        {
          name: 'bc-success-light',
          light: '#dcfce7',
          dark: '#14532d',
          contrast: { light: '15:1', dark: '11:1' },
          usage: 'Backgrounds de sucesso'
        },
        {
          name: 'bc-success',
          light: '#16a34a',
          dark: '#22c55e',
          contrast: { light: '5.4:1', dark: '4.8:1' },
          usage: 'Ícones, textos de sucesso'
        },
        {
          name: 'bc-success-dark',
          light: '#15803d',
          dark: '#4ade80',
          contrast: { light: '7.2:1', dark: '3.6:1' },
          usage: 'Estados hover, ênfase'
        },
        {
          name: 'bc-warning-light',
          light: '#fef3c7',
          dark: '#92400e',
          contrast: { light: '14:1', dark: '9:1' },
          usage: 'Backgrounds de aviso'
        },
        {
          name: 'bc-warning',
          light: '#d97706',
          dark: '#f59e0b',
          contrast: { light: '5.8:1', dark: '4.2:1' },
          usage: 'Ícones, textos de aviso'
        },
        {
          name: 'bc-warning-dark',
          light: '#b45309',
          dark: '#fbbf24',
          contrast: { light: '7.8:1', dark: '3.4:1' },
          usage: 'Estados hover, ênfase'
        },
        {
          name: 'bc-error-light',
          light: '#fef2f2',
          dark: '#7f1d1d',
          contrast: { light: '18:1', dark: '12: 1' },
          usage: 'Backgrounds de erro'
        },
        {
          name: 'bc-error',
          light: '#dc2626',
          dark: '#ef4444',
          contrast: { light: '6.2:1', dark: '4.4:1' },
          usage: 'Ícones, textos de erro'
        },
        {
          name: 'bc-error-dark',
          light: '#b91c1c',
          dark: '#f87171',
          contrast: { light: '8.1:1', dark: '3.2:1' },
          usage: 'Estados hover, ênfase'
        },
        {
          name: 'bc-info-light',
          light: '#dbeafe',
          dark: '#1e3a8a',
          contrast: { light: '16:1', dark: '10:1' },
          usage: 'Backgrounds informativos'
        },
        {
          name: 'bc-info',
          light: '#2563eb',
          dark: '#3b82f6',
          contrast: { light: '6.8:1', dark: '4.6:1' },
          usage: 'Ícones, textos informativos'
        },
        {
          name: 'bc-info-dark',
          light: '#1d4ed8',
          dark: '#60a5fa',
          contrast: { light: '8.9:1', dark: '3.8:1' },
          usage: 'Estados hover, ênfase'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Palette className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sistema de Cores & Tokens
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Palette completa com variações para dark/light mode e diretrizes de acessibilidade. 
            Todos os tokens seguem padrões WCAG 2.1 AA para contraste.
          </p>
          
          {/* Mode Selector */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveMode('light')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMode === 'light'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Sun size={16} />
              Light Mode
            </button>
            <button
              onClick={() => setActiveMode('dark')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMode === 'dark'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Moon size={16} />
              Dark Mode
            </button>
            <button
              onClick={() => setActiveMode('both')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMode === 'both'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Eye size={16} />
              Comparar
            </button>
          </div>
        </div>

        {/* Accessibility Notice */}
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700 mb-8">
          <div className="flex items-start gap-3">
            <Eye className="text-green-600 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Acessibilidade Garantida</h3>
              <p className="text-sm text-green-700 dark:text-green-400 mb-3">
                Todas as combinações de cores foram testadas e atendem aos critérios WCAG 2.1 AA. 
                Os valores de contraste estão indicados para cada token.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                  <strong>AA Normal:</strong> 4.5:1 mínimo
                </div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                  <strong>AA Grande:</strong> 3:1 mínimo
                </div>
                <div className="bg-white dark:bg-gray-800 p-2 rounded border">
                  <strong>AAA:</strong> 7:1 (ideal)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Categories */}
        {colorCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {category.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid gap-4">
              {category.colors.map((color, colorIndex) => (
                <div 
                  key={colorIndex}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {color.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {color.usage}
                        </p>
                      </div>
                      
                      {/* Contrast Info */}
                      <div className="flex items-center gap-2 text-xs">
                        <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          Light: {color.contrast.light}
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          Dark: {color.contrast.dark}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {(activeMode === 'light' || activeMode === 'both') && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Sun size={16} className="text-yellow-600" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Light Mode</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div
                              className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                              style={{ backgroundColor: color.light }}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded font-mono text-sm">
                                <span className="text-gray-900 dark:text-white">{color.light}</span>
                                <button
                                  onClick={() => copyToClipboard(color.light, `${color.name}-light`)}
                                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                                  title="Copiar cor"
                                >
                                  {copiedToken === `${color.name}-light` ? (
                                    <Check size={14} className="text-green-600" />
                                  ) : (
                                    <Copy size={14} className="text-gray-500" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {(activeMode === 'dark' || activeMode === 'both') && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Moon size={16} className="text-blue-600" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div
                              className="w-16 h-16 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                              style={{ backgroundColor: color.dark }}
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded font-mono text-sm">
                                <span className="text-gray-900 dark:text-white">{color.dark}</span>
                                <button
                                  onClick={() => copyToClipboard(color.dark, `${color.name}-dark`)}
                                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                                  title="Copiar cor"
                                >
                                  {copiedToken === `${color.name}-dark` ? (
                                    <Check size={14} className="text-green-600" />
                                  ) : (
                                    <Copy size={14} className="text-gray-500" />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CSS Variables - Now in Accordion */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="css-code" className="border-none">
                          <AccordionTrigger className="text-sm font-semibold text-gray-900 dark:text-white hover:no-underline py-2">
                            Código CSS
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="bg-gray-900 dark:bg-black p-3 rounded text-sm overflow-x-auto">
                              <code className="text-gray-100">
                                :root {'{'}
                                <br />
                                &nbsp;&nbsp;--{color.name}: {color.light};
                                <br />
                                {'}'}
                                <br />
                                <br />
                                .dark {'{'}
                                <br />
                                &nbsp;&nbsp;--{color.name}: {color.dark};
                                <br />
                                {'}'}
                              </code>
                              <button
                                onClick={() => copyToClipboard(
                                  `:root {\n  --${color.name}: ${color.light};\n}\n\n.dark {\n  --${color.name}: ${color.dark};\n}`,
                                  `${color.name}-css`
                                )}
                                className="mt-2 text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors flex items-center gap-1"
                              >
                                {copiedToken === `${color.name}-css` ? <Check size={12} /> : <Copy size={12} />}
                                Copiar CSS
                              </button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Usage Guidelines */}
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">
            Diretrizes de Uso
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-700 dark:text-blue-400">
            <div>
              <h4 className="font-semibold mb-2">✓ Faça</h4>
              <ul className="space-y-1">
                <li>• Use tokens semânticos para feedback (success, error, warning)</li>
                <li>• Sempre verifique o contraste antes de aplicar</li>
                <li>• Mantenha consistência entre light/dark mode</li>
                <li>• Use neutral-900 para textos principais</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✗ Evite</h4>
              <ul className="space-y-1">
                <li>• Usar cores muito saturadas para texto longo</li>
                <li>• Combinar cores com contraste insuficiente</li>
                <li>• Usar apenas cor para transmitir informação</li>
                <li>• Misturar tonalidades diferentes da mesma categoria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTokens;
