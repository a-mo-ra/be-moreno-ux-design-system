import React, { useState } from 'react';
import { Book, Code, Palette, Type, Grid, Zap, ChevronDown, ChevronRight, Copy, Check, Eye, Lightbulb, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const DocumentationGuide = () => {
  const [openSections, setOpenSections] = useState<string[]>(['intro']);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [openCodeSections, setOpenCodeSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    if (openSections.includes(sectionId)) {
      setOpenSections(openSections.filter(id => id !== sectionId));
    } else {
      setOpenSections([...openSections, sectionId]);
    }
  };

  const toggleCodeSection = (sectionId: string) => {
    if (openCodeSections.includes(sectionId)) {
      setOpenCodeSections(openCodeSections.filter(id => id !== sectionId));
    } else {
      setOpenCodeSections([...openCodeSections, sectionId]);
    }
  };

  const copyToClipboard = async (text: string, codeId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(codeId);
      toast({
        title: "Código copiado!",
        description: "O código foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o código.",
        variant: "destructive",
      });
    }
  };

  const handlePrintDocumentation = () => {
    window.print();
  };

  const documentationSections = [
    {
      id: 'intro',
      title: 'Como Usar Este Design System',
      icon: Book,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3">Bem-vindo ao Bê Creative Design System</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Este guia explica como aplicar corretamente todos os elementos do nosso design system. 
              Aqui você encontrará instruções práticas, exemplos de código e diretrizes de acessibilidade.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border">
              <h4 className="font-semibold mb-2">O que você vai aprender:</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Como aplicar cores considerando acessibilidade</li>
                <li>• Quando usar cada tipo de botão</li>
                <li>• Como implementar tokens de design</li>
                <li>• Diretrizes de tipografia e espaçamento</li>
                <li>• Boas práticas de documentação</li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="text-blue-600" size={20} />
                <h4 className="font-semibold text-gray-900 dark:text-white">Para Designers</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Configure tokens no Figma, aplique componentes consistentes e documente suas decisões.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Code className="text-green-600" size={20} />
                <h4 className="font-semibold text-gray-900 dark:text-white">Para Desenvolvedores</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Implemente componentes usando classes CSS e mantenha consistência no código.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700 flex items-start gap-3">
            <Lightbulb className="text-amber-600 mt-0.5" size={20} />
            <div>
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Importante</h4>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Sempre teste suas implementações em diferentes dispositivos e com ferramentas de acessibilidade.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'colors',
      title: 'Sistema de Cores - Como Aplicar',
      icon: Palette,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Diretrizes de Aplicação de Cores</h3>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Cores Primárias (Purple) - Quando Usar</h4>
              <div className="space-y-3">
                <p className="text-sm text-blue-700 dark:text-blue-400">Use para elementos que precisam de destaque máximo:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1 ml-4">
                  <li>• Botões de ação principal (CTA)</li>
                  <li>• Links importantes</li>
                  <li>• Estados ativos de navegação</li>
                  <li>• Elementos interativos em foco</li>
                </ul>
                
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-white dark:bg-gray-800 rounded border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <Code size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Ver Implementação CSS</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                      <h5 className="text-sm font-semibold mb-2">Implementação CSS:</h5>
                      <code className="text-xs text-gray-800 dark:text-gray-200 block">
                        /* Light Mode */
                        <br />--bc-color-primary: #7c3aed; /* purple-600 */
                        <br />--bc-color-primary-hover: #6d28d9; /* purple-700 */
                        <br />--bc-color-primary-light: #a855f7; /* purple-500 */
                        <br /><br />
                        /* Dark Mode */
                        <br />--bc-color-primary-dark: #a855f7; /* purple-500 */
                        <br />--bc-color-primary-hover-dark: #8b5cf6; /* purple-400 */
                      </code>
                      <button 
                        onClick={() => copyToClipboard(`--bc-color-primary: #7c3aed;\n--bc-color-primary-hover: #6d28d9;`, 'primary-colors')}
                        className="mt-2 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-1"
                      >
                        {copiedCode === 'primary-colors' ? <Check size={12} /> : <Copy size={12} />}
                        Copiar
                      </button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-300 mb-3">Cores Neutras - Hierarquia de Texto</h4>
              <div className="space-y-3">
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded">
                    <div className="w-6 h-6 bg-gray-900 dark:bg-white rounded border"></div>
                    <div>
                      <span className="text-sm font-medium">bc-text-primary</span>
                      <p className="text-xs text-gray-500">Títulos e textos principais</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-auto">Contraste 21:1</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded">
                    <div className="w-6 h-6 bg-gray-700 dark:bg-gray-300 rounded border"></div>
                    <div>
                      <span className="text-sm font-medium">bc-text-secondary</span>
                      <p className="text-xs text-gray-500">Textos de apoio e descrições</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-auto">Contraste 7:1</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded">
                    <div className="w-6 h-6 bg-gray-500 dark:bg-gray-400 rounded border"></div>
                    <div>
                      <span className="text-sm font-medium">bc-text-tertiary</span>
                      <p className="text-xs text-gray-500">Legendas e informações extras</p>
                    </div>
                    <span className="text-xs text-gray-400 ml-auto">Contraste 4.5:1</span>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-700">
                  <h5 className="text-sm font-semibold text-green-800 dark:text-green-300 mb-1">✓ Acessibilidade</h5>
                  <p className="text-xs text-green-700 dark:text-green-400">
                    Todas as combinações atendem às normas WCAG 2.1 AA para contraste de cores.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Cores de Status - Feedback Visual</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-700">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-green-600 rounded"></div>
                      <span className="text-sm font-medium text-green-800 dark:text-green-300">Sucesso</span>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-400">Confirmações e estados positivos</p>
                  </div>
                  
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-200 dark:border-red-700">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-red-600 rounded"></div>
                      <span className="text-sm font-medium text-red-800 dark:text-red-300">Erro</span>
                    </div>
                    <p className="text-xs text-red-700 dark:text-red-400">Mensagens de erro e alertas</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-700">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-amber-600 rounded"></div>
                      <span className="text-sm font-medium text-amber-800 dark:text-amber-300">Atenção</span>
                    </div>
                    <p className="text-xs text-amber-700 dark:text-amber-400">Avisos importantes</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-700">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-blue-600 rounded"></div>
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Informação</span>
                    </div>
                    <p className="text-xs text-blue-700 dark:text-blue-400">Dicas e informações</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Evite Estes Erros</h4>
                  <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
                    <li>• Usar cores muito saturadas para textos longos</li>
                    <li>• Combinar cores com contraste insuficiente (menor que 4.5:1)</li>
                    <li>• Usar apenas cor para transmitir informação importante</li>
                    <li>• Misturar mais de 3 cores primárias na mesma interface</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'buttons',
      title: 'Sistema de Botões - Quando e Como Usar',
      icon: Grid,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hierarquia de Botões</h3>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Botão Primário</h4>
              <div className="space-y-3">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                  Ação Principal
                </button>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <p className="text-sm font-medium mb-2">Quando usar:</p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Máximo 1 por tela ou seção</li>
                    <li>• Para a ação mais importante (enviar, comprar, confirmar)</li>
                    <li>• Quando você quer guiar o usuário para uma ação específica</li>
                  </ul>
                </div>
                
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-gray-50 dark:bg-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Code size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Ver Código CSS</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="bg-gray-900 dark:bg-gray-800 p-3 rounded">
                      <code className="text-sm text-gray-100">
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg 
                        <br />         hover:bg-purple-700 transition-colors font-medium
                        <br />         focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      </code>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Botão Secundário</h4>
              <div className="space-y-3">
                <button className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                  Ação Secundária
                </button>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <p className="text-sm font-medium mb-2">Quando usar:</p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Ações importantes mas não principais</li>
                    <li>• Junto com botões primários (ex: "Cancelar" e "Confirmar")</li>
                    <li>• Para navegação entre etapas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Estados dos Botões</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-medium">
                    Normal
                  </button>
                  <button className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg font-medium">
                    Hover
                  </button>
                </div>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-purple-800 text-white rounded-lg font-medium ring-2 ring-purple-500 ring-offset-2">
                    Focus
                  </button>
                  <button disabled className="w-full px-4 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                    Desabilitado
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Acessibilidade em Botões</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• Sempre use focus visível (ring) para navegação por teclado</li>
                <li>• Mantenha área de toque mínima de 44px (recomendação WCAG)</li>
                <li>• Use textos descritivos (evite apenas "Clique aqui")</li>
                <li>• States disabled devem ter contraste reduzido mas ainda legível</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tokens',
      title: 'Design Tokens - Sistema de Padronização',
      icon: Code,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">O que são Design Tokens</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Definição</h4>
              <p className="text-sm text-green-700 dark:text-green-400 mb-3">
                Design tokens são pequenos pedaços de informação que armazenam elementos visuais. 
                Eles garantem consistência entre diferentes plataformas e facilitam mudanças globais.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                <p className="text-sm font-medium mb-2">Prefixo "bc" (Be Creative):</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Todos os tokens começam com "bc-" para identificar sua origem e evitar conflitos.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tokens de Cor</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <h5 className="text-sm font-semibold mb-2">Superfícies (Backgrounds)</h5>
                  <div className="space-y-1 text-xs font-mono">
                    <div>bc-surface-primary: #ffffff / #1f2937</div>
                    <div>bc-surface-secondary: #f9fafb / #374151</div>
                    <div>bc-surface-elevated: #ffffff / #1f2937 + shadow</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <h5 className="text-sm font-semibold mb-2">Interação (Botões/Links)</h5>
                  <div className="space-y-1 text-xs font-mono">
                    <div>bc-interactive-primary: #7c3aed</div>
                    <div>bc-interactive-primary-hover: #6d28d9</div>
                    <div>bc-interactive-secondary: #ffffff</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <h5 className="text-sm font-semibold mb-2">Bordas</h5>
                  <div className="space-y-1 text-xs font-mono">
                    <div>bc-border-default: #e5e7eb</div>
                    <div>bc-border-focus: #7c3aed</div>
                    <div>bc-border-error: #ef4444</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tokens de Espaçamento</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                    <h5 className="text-sm font-semibold mb-2">Padrão</h5>
                    <div className="space-y-1 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-purple-600"></div>
                        <span>bc-space-xs: 4px</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-4 bg-purple-600"></div>
                        <span>bc-space-sm: 8px</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-600"></div>
                        <span>bc-space-md: 16px</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-4 bg-purple-600"></div>
                        <span>bc-space-lg: 24px</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                    <h5 className="text-sm font-semibold mb-2">Aplicação</h5>
                    <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <div>• xs: Entre ícones pequenos</div>
                      <div>• sm: Entre elementos relacionados</div>
                      <div>• md: Entre componentes</div>
                      <div>• lg: Entre seções</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tokens de Tipografia</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">bc-text-display: 32px/bold</div>
                    <div className="text-xl font-semibold">bc-text-title: 24px/semibold</div>
                    <div className="text-lg font-medium">bc-text-heading: 20px/medium</div>
                    <div className="text-base">bc-text-body: 16px/regular</div>
                    <div className="text-sm text-gray-600">bc-text-caption: 14px/regular</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Por que usar Design Tokens?</h4>
              <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                <li>• <strong>Consistência:</strong> Mesmos valores em todos os produtos</li>
                <li>• <strong>Manutenção:</strong> Mudança em um lugar reflete em todos</li>
                <li>• <strong>Escalabilidade:</strong> Facilita crescimento do sistema</li>
                <li>• <strong>Comunicação:</strong> Linguagem comum entre design e dev</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'typography',
      title: 'Tipografia - Hierarquia e Legibilidade',
      icon: Type,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Como Aplicar a Hierarquia Tipográfica</h3>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Título Principal (H1)</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Quando usar:</strong> Título da página, apenas um por página</p>
                      <p><strong>Classe:</strong> text-3xl font-bold</p>
                      <p><strong>Token:</strong> bc-text-display</p>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h5 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Seção Principal (H2)</h5>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Quando usar:</strong> Divisões principais do conteúdo</p>
                      <p><strong>Classe:</strong> text-2xl font-semibold</p>
                      <p><strong>Token:</strong> bc-text-title</p>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h6 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Subseção (H3)</h6>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Quando usar:</strong> Subdivisões de conteúdo</p>
                      <p><strong>Classe:</strong> text-xl font-medium</p>
                      <p><strong>Token:</strong> bc-text-heading</p>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <p className="text-base text-gray-900 dark:text-white mb-2">Texto Corporal (Body)</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Quando usar:</strong> Conteúdo principal, parágrafos</p>
                      <p><strong>Classe:</strong> text-base</p>
                      <p><strong>Token:</strong> bc-text-body</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Texto Pequeno (Caption)</p>
                    <div className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                      <p><strong>Quando usar:</strong> Legendas, metadados, texto auxiliar</p>
                      <p><strong>Classe:</strong> text-sm text-gray-600</p>
                      <p><strong>Token:</strong> bc-text-caption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Diretrizes de Legibilidade</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-400">
                <div>
                  <h5 className="font-semibold mb-1">Espaçamento:</h5>
                  <ul className="space-y-1 text-xs">
                    <li>• Line-height mínimo: 1.5x para textos</li>
                    <li>• Espaço entre parágrafos: 1em</li>
                    <li>• Largura máxima: 60-70 caracteres</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Contraste:</h5>
                  <ul className="space-y-1 text-xs">
                    <li>• Texto normal: mínimo 4.5:1</li>
                    <li>• Texto grande: mínimo 3:1</li>
                    <li>• Sempre testar com daltonismo</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Exemplo Prático de Implementação</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border">
                  <article>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      Como Implementar Hierarquia
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      Estrutura do Conteúdo
                    </h2>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                      Este é um exemplo de como estruturar conteúdo seguindo nossa hierarquia tipográfica. 
                      Note como cada elemento tem seu peso visual adequado.
                    </p>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      Subseção
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 mb-2">
                      Texto explicativo da subseção.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Informação adicional ou metadata.
                    </p>
                  </article>
                </div>
                
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center gap-2 w-full p-3 bg-gray-50 dark:bg-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Code size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">Ver Código HTML</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2">
                    <div className="bg-gray-900 dark:bg-black p-3 rounded text-xs">
                      <code className="text-gray-100">
                        {`<article>
  <h1 className="text-3xl font-bold text-gray-900 mb-4">
    Título Principal
  </h1>
  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
    Seção
  </h2>
  <p className="text-base text-gray-700 mb-4">
    Parágrafo principal...
  </p>
  <h3 className="text-xl font-medium text-gray-900 mb-2">
    Subseção
  </h3>
  <p className="text-sm text-gray-500">
    Informação adicional...
  </p>
</article>`}
                      </code>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'accessibility',
      title: 'Acessibilidade - Diretrizes Essenciais',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Implementando Acessibilidade</h3>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Princípios WCAG 2.1</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Perceptível</h5>
                  <ul className="text-sm text-green-600 dark:text-green-500 space-y-1">
                    <li>• Contraste adequado</li>
                    <li>• Texto alternativo para imagens</li>
                    <li>• Conteúdo não dependente apenas de cor</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Operável</h5>
                  <ul className="text-sm text-green-600 dark:text-green-500 space-y-1">
                    <li>• Navegação por teclado</li>
                    <li>• Foco visível</li>
                    <li>• Tempo suficiente para interações</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Checklist de Implementação</h4>
              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <div className="text-sm">
                    <strong>Contraste de cores:</strong> Mínimo 4.5:1 para texto normal, 3:1 para texto grande
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <div className="text-sm">
                    <strong>Foco visível:</strong> Estados de foco claros em todos os elementos interativos
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <div className="text-sm">
                    <strong>Labels adequados:</strong> Todos os campos de formulário com labels descritivos
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <div className="text-sm">
                    <strong>Hierarquia semântica:</strong> Uso correto de heading tags (h1, h2, h3...)
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 rounded" />
                  <div className="text-sm">
                    <strong>Área de toque:</strong> Mínimo 44x44px para elementos touch
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Ferramentas de Teste</h4>
              <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-1">
                <li>• <strong>axe DevTools:</strong> Extension do Chrome para auditorias automáticas</li>
                <li>• <strong>WAVE:</strong> Ferramenta online para avaliar acessibilidade</li>
                <li>• <strong>Colour Contrast Analyser:</strong> Para verificar contraste de cores</li>
                <li>• <strong>NVDA/VoiceOver:</strong> Testadores de tela para navegação</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'documentation',
      title: 'Como Documentar Modificações',
      icon: Book,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Processo de Documentação</h3>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Template de Modificação</h4>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded border">
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Data:</strong> [DD/MM/YYYY]
                  </div>
                  <div>
                    <strong>Componente/Token modificado:</strong> [Nome do elemento]
                  </div>
                  <div>
                    <strong>Tipo de mudança:</strong> [Nova funcionalidade / Correção / Melhoria]
                  </div>
                  <div>
                    <strong>Descrição:</strong> [O que foi alterado e por quê]
                  </div>
                  <div>
                    <strong>Impacto:</strong> [Onde a mudança afeta o sistema]
                  </div>
                  <div>
                    <strong>Teste necessário:</strong> [Como validar a mudança]
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Exemplo Prático</h4>
              <div className="bg-white dark:bg-gray-800 p-3 rounded border text-sm">
                <div className="space-y-2">
                  <div><strong>Data:</strong> 15/12/2024</div>
                  <div><strong>Componente:</strong> Botão Primário</div>
                  <div><strong>Tipo:</strong> Melhoria de acessibilidade</div>
                  <div><strong>Descrição:</strong> Adicionado estado de foco mais visível com ring de 2px</div>
                  <div><strong>Impacto:</strong> Todos os botões primários do sistema</div>
                  <div><strong>Teste:</strong> Navegar por teclado e verificar visibilidade do foco</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Versionamento</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <h5 className="font-medium mb-2">Semantic Versioning (SemVer)</h5>
                  <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <div><strong>MAJOR.MINOR.PATCH</strong></div>
                    <div>• <strong>MAJOR:</strong> Mudanças que quebram compatibilidade</div>
                    <div>• <strong>MINOR:</strong> Novas funcionalidades compatíveis</div>
                    <div>• <strong>PATCH:</strong> Correções de bugs</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                  <h5 className="font-medium mb-2">Exemplo:</h5>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <div>v1.2.3 → v1.2.4 (correção de bug)</div>
                    <div>v1.2.4 → v1.3.0 (novo componente)</div>
                    <div>v1.3.0 → v2.0.0 (mudança na estrutura de tokens)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Comunicação da Mudança</h4>
              <ol className="text-sm text-green-700 dark:text-green-400 space-y-1 list-decimal list-inside">
                <li>Documente a mudança usando o template</li>
                <li>Atualize o changelog do projeto</li>
                <li>Comunique à equipe via Slack/email</li>
                <li>Atualize a documentação técnica</li>
                <li>Execute testes de regressão</li>
              </ol>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 print:p-0 print:bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 print:mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center print:bg-purple-600">
              <Book className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white print:text-black">
              Manual de Uso - Design System Bê Creative
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto print:text-gray-700">
            Guia completo sobre como implementar e usar todos os elementos do Design System. 
            Inclui diretrizes de acessibilidade, exemplos práticos e boas práticas.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-4">
          {documentationSections.map((section) => {
            const IconComponent = section.icon;
            const isOpen = openSections.includes(section.id);
            
            return (
              <div key={section.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden print:bg-white print:border-gray-300 print:break-inside-avoid">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors print:hover:bg-white print:py-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center print:bg-purple-100">
                      <IconComponent className="text-purple-600 dark:text-purple-400 print:text-purple-600" size={20} />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white text-left print:text-black">
                      {section.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 print:hidden">
                    {isOpen ? (
                      <ChevronDown className="text-gray-400" size={20} />
                    ) : (
                      <ChevronRight className="text-gray-400" size={20} />
                    )}
                  </div>
                </button>
                
                {(isOpen || typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print').matches) && (
                  <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 print:border-gray-200">
                    <div className="pt-6 print:pt-3">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center print:mt-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg print:bg-purple-600 print:text-white">
            <h3 className="text-xl font-semibold mb-2">Documentação Viva</h3>
            <p className="text-purple-100 mb-4 print:text-gray-100">
              Este guia evolui constantemente. Sempre consulte a versão mais recente online para atualizações.
            </p>
            <div className="text-sm text-purple-200 print:text-gray-200">
              <p>Design System Bê Creative - v1.0.0</p>
              <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationGuide;
