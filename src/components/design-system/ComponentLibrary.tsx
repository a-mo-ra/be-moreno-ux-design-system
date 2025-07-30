import React, { useState } from 'react';
import { Grid, Copy, Check, Heart, Star, User, Search, Figma } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const ComponentLibrary = () => {
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);

  const copyToClipboard = async (code: string, componentName: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedComponent(componentName);
      toast({
        title: "Copiado!",
        description: `Código do ${componentName} copiado para a área de transferência.`,
      });
      setTimeout(() => setCopiedComponent(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o código.",
        variant: "destructive"
      });
    }
  };

  const buttonVariants = [
    {
      name: 'Primary Button',
      component: (
        <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg shadow-purple-500/25">
          Botão Primário
        </button>
      ),
      code: `<button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg shadow-purple-500/25">
  Botão Primário
</button>`
    },
    {
      name: 'Secondary Button',
      component: (
        <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-200 transition-all duration-200">
          Botão Secundário
        </button>
      ),
      code: `<button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-200 transition-all duration-200">
  Botão Secundário
</button>`
    },
    {
      name: 'Icon Button',
      component: (
        <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg shadow-purple-500/25">
          <Heart size={16} />
        </button>
      ),
      code: `<button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg shadow-purple-500/25">
  <Heart size={16} />
</button>`
    }
  ];

  const inputVariants = [
    {
      name: 'Text Input',
      component: (
        <div className="w-full max-w-xs">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
          />
        </div>
      ),
      code: `<input
  type="text"
  placeholder="Digite seu nome"
  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
/>`
    },
    {
      name: 'Search Input',
      component: (
        <div className="w-full max-w-xs relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
          />
        </div>
      ),
      code: `<div className="relative">
  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  <input
    type="text"
    placeholder="Pesquisar..."
    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
  />
</div>`
    }
  ];

  const cardVariants = [
    {
      name: 'Basic Card',
      component: (
        <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">João Silva</h3>
              <p className="text-sm text-gray-500">Designer UX</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Criando experiências digitais incríveis.
          </p>
        </div>
      ),
      code: `<div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
      <User size={16} className="text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">João Silva</h3>
      <p className="text-sm text-gray-500">Designer UX</p>
    </div>
  </div>
  <p className="text-gray-700 text-sm">
    Criando experiências digitais incríveis.
  </p>
</div>`
    },
    {
      name: 'Feature Card',
      component: (
        <div className="bg-white rounded-xl p-4 border border-gray-200 max-w-xs hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-200 group">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
            <Star size={20} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Componentes Premium
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            Biblioteca completa com mais de 100 componentes.
          </p>
          <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors">
            Saiba mais →
          </button>
        </div>
      ),
      code: `<div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-200 group">
  <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
    <Star size={20} className="text-white" />
  </div>
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    Componentes Premium
  </h3>
  <p className="text-gray-600 text-sm mb-3">
    Biblioteca completa com mais de 100 componentes.
  </p>
  <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors">
    Saiba mais →
  </button>
</div>`
    }
  ];

  const renderComponentSection = (title: string, components: any[]) => (
    <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-elevation-2 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      <div className="space-y-8">
        {components.map((item) => (
          <div key={item.name} className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
              <button
                onClick={() => copyToClipboard(item.code, item.name)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
              >
                {copiedComponent === item.name ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} />
                )}
                Copiar código
              </button>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-600 flex items-center justify-center min-h-[120px]">
              {item.component}
            </div>
            
            <Accordion type="single" collapsible>
              <AccordionItem value="code">
                <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white">
                  Código CSS
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap break-all">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <Grid size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Biblioteca de Componentes</h2>
          <p className="text-gray-600 dark:text-gray-300">Componentes prontos para usar em seus projetos</p>
        </div>
      </div>

      {renderComponentSection('Botões', buttonVariants)}
      {renderComponentSection('Inputs', inputVariants)}
      {renderComponentSection('Cards', cardVariants)}

      {/* Configuration Guidelines */}
      <div className="bg-white dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <Figma size={20} className="text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Figma Specifications</h3>
        </div>
        <Separator className="mb-6" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Auto Layout - Componentes</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div><strong>Botões:</strong> Largura: Hug contents | Altura: Hug contents</div>
              <div><strong>Cards:</strong> Largura: Fill container | Altura: Hug contents</div>
              <div><strong>Inputs:</strong> Largura: Fill container | Altura: Fixed (40px)</div>
              <div><strong>Ícones:</strong> Largura: Fixed | Altura: Fixed</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Configuração de Sombras</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div><strong>Elevação 1:</strong> X:0 Y:1 Blur:3 Spread:0 Color:rgba(0,0,0,0.1)</div>
              <div><strong>Elevação 2:</strong> X:0 Y:4 Blur:6 Spread:-1 Color:rgba(0,0,0,0.1)</div>
              <div><strong>Purple Glow:</strong> X:0 Y:4 Blur:14 Color:rgba(147,51,234,0.25)</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Sistema de Grid por Dispositivo</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <strong>Mobile (320-768px):</strong><br/>
              Colunas: 4-6 | Gutter: 16px | Margin: 16px
            </div>
            <div>
              <strong>Tablet (768-1024px):</strong><br/>
              Colunas: 8-12 | Gutter: 24px | Margin: 24px
            </div>
            <div>
              <strong>Desktop (1024px+):</strong><br/>
              Colunas: 12+ | Gutter: 32px | Margin: 48px
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Componentes</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Mantenha consistência visual</li>
              <li>• Use estados interativos (hover, focus)</li>
              <li>• Implemente acessibilidade (ARIA)</li>
              <li>• Teste responsividade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Customização</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Modifique cores usando tokens</li>
              <li>• Ajuste espaçamentos proporcionalmente</li>
              <li>• Mantenha hierarquia visual</li>
              <li>• Documente mudanças</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
