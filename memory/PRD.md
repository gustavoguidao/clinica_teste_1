# PRD - Clínica Vida Plena Website

## Declaração do Problema Original
Criar um site institucional completo para uma clínica fictícia chamada "Clínica Vida Plena" com as seguintes seções:
- Hero (chamada principal)
- Sobre a clínica
- Serviços (3 serviços: Nutrição, Psicologia, Fisioterapia)
- Diferenciais
- Depoimentos
- Chamada para ação
- Contato

Tom: profissional, claro e acolhedor
Público-alvo: adultos que buscam atendimento de saúde
Design: moderno, limpo e confiável

## Escolhas do Usuário
1. **Cores**: Tons profissionais de saúde (cyan/teal)
2. **Serviços**: Nutrição, Psicologia, Fisioterapia
3. **Imagens**: Profissionais de clínicas/médicos
4. **Funcionalidades**: Formulário de contato simples
5. **Extras**: Seção de depoimentos de pacientes

## Arquitetura Implementada
- **Frontend**: React 19 com Vite
- **Styling**: TailwindCSS + Shadcn UI
- **Componentes**: Modularizados (Header, Hero, About, Services, Differentials, Testimonials, CTA, Contact, Footer)
- **Ícones**: Lucide React
- **Imagens**: Unsplash + Pexels
- **Animações**: Transições CSS + hover effects

## Implementado (Data: 03/12/2025)

### Frontend Completo
1. **Header** (`/app/frontend/src/components/Header.jsx`)
   - Navegação fixa com logo e menu
   - Menu mobile responsivo
   - Smooth scroll para seções

2. **Hero** (`/app/frontend/src/components/Hero.jsx`)
   - Título impactante
   - Subtítulo descritivo
   - CTA button com animação
   - Imagem profissional de médico atendendo paciente

3. **About** (`/app/frontend/src/components/About.jsx`)
   - Descrição da clínica
   - 3 valores principais com ícones (Humanização, Excelência, Confiança)
   - Cards com hover effects

4. **Services** (`/app/frontend/src/components/Services.jsx`)
   - 3 serviços com imagens profissionais
   - Nutrição: com imagem de salada saudável
   - Psicologia: com imagem de sessão terapêutica
   - Fisioterapia: com imagem de tratamento
   - Cada serviço tem 4 detalhes listados

5. **Differentials** (`/app/frontend/src/components/Differentials.jsx`)
   - 4 diferenciais em grid
   - Ícones personalizados
   - Gradient backgrounds (cyan)

6. **Testimonials** (`/app/frontend/src/components/Testimonials.jsx`)
   - 3 depoimentos de pacientes satisfeitos
   - 5 estrelas de avaliação
   - Fotos dos pacientes
   - Design em cards com hover

7. **CTA Section** (`/app/frontend/src/components/CTA.jsx`)
   - Fundo cyan chamativo
   - Título e subtítulo impactantes
   - Botão de agendamento

8. **Contact** (`/app/frontend/src/components/Contact.jsx`)
   - Formulário funcional com validação
   - Informações de contato (telefone, email, endereço, horário)
   - Toast de confirmação ao enviar

9. **Footer** (`/app/frontend/src/components/Footer.jsx`)
   - Links rápidos
   - Informações de contato
   - Copyright

### Design System
- **Cores principais**: Cyan (#0891B2, #06B6D4)
- **Cores secundárias**: White, Gray-50 a Gray-900
- **Tipografia**: System fonts (sans-serif)
- **Espaçamento**: Consistente com Tailwind
- **Animações**: 
  - Fade-in na entrada
  - Hover effects em cards e imagens
  - Smooth transitions (0.3s)
  - Scale em imagens (1.1x no hover)

### Dados Mockados (`/app/frontend/src/mockData.js`)
- Informações da clínica
- Conteúdo hero
- Valores da clínica
- 3 serviços completos
- 4 diferenciais
- 3 depoimentos
- CTA text

### Arquivos Criados
```
/app/frontend/src/
├── components/
│   ├── Home.jsx (componente principal)
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Differentials.jsx
│   ├── Testimonials.jsx
│   ├── CTA.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── mockData.js
├── App.js (atualizado)
└── App.css (atualizado com animações)
```

## Backlog Prioritizado

### P0 (Crítico) - ✅ Completo
- [x] Estrutura completa do site
- [x] Todas as seções solicitadas
- [x] Design responsivo
- [x] Formulário de contato
- [x] Navegação funcional

### P1 (Alta Prioridade) - Para Futuro
- [ ] Backend com FastAPI
  - [ ] API de contato (enviar emails)
  - [ ] Armazenamento de mensagens no MongoDB
  - [ ] API de depoimentos
- [ ] Integração de agendamento
  - [ ] Sistema de calendário
  - [ ] Confirmação por email
- [ ] Validação avançada de formulários
- [ ] SEO optimization
  - [ ] Meta tags
  - [ ] Schema markup
  - [ ] Sitemap

### P2 (Média Prioridade)
- [ ] Blog/artigos de saúde
- [ ] Área de FAQ
- [ ] Chat online
- [ ] Integração com WhatsApp
- [ ] Google Maps integrado
- [ ] Galeria de fotos da clínica
- [ ] Vídeos institucionais

### P3 (Baixa Prioridade)
- [ ] Portal do paciente
- [ ] Sistema de prontuário
- [ ] Telemedicina
- [ ] App mobile

## Próximas Tarefas
1. **Implementar Backend**:
   - Criar endpoints de API em FastAPI
   - Conectar formulário de contato ao email
   - Salvar mensagens no MongoDB
   
2. **Melhorias de UX**:
   - Adicionar loading states
   - Melhorar feedback visual
   - Animações de entrada de seções

3. **SEO & Performance**:
   - Otimizar imagens
   - Lazy loading
   - Meta tags
   - Analytics

## Notas Técnicas
- Problema com babel-metadata-plugin: Resolvido evitando map/reduce complexos e usando acesso direto a índices
- Todas as imagens são de Unsplash/Pexels com URLs diretas
- Formulário usa toast (sonner) para feedback
- Smooth scroll implementado com JavaScript nativo
- Layout 100% responsivo com breakpoints md e lg
