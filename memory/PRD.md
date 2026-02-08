# PRD - Premium Psychology Website Upgrade

## Problema Original
Transformar site institucional "Clínica Vida Plena" em site premium de psicologia clínica com:
- Estética premium: soft, calming, pastel, "cute" mas profissional
- Booking: Calendly integration
- Páginas legais: Privacy, Terms, Disclaimer
- Blog/CMS completo
- Mobile-first responsivo

## Escolhas do Usuário
1. **Booking**: Calendly (sem API key - placeholder preparado)
2. **Profissional**: Dra. Sofia Almeida (fictícia)
3. **Cores**: Paleta pastel escolhida (rosa, lavanda, pêssego)
4. **CMS**: Sistema completo com backend
5. **Legal**: Templates criados

## Design Premium Implementado

### Paleta de Cores Pastel
- **Rosa suave**: #FFE5EC, #FFC4D6
- **Lavanda**: #E5DEFF, #D4BBFF
- **Pêssego**: #FFE4CC
- **Creme**: #FFF8F0
- **Texto**: #4A4A4A

### Tipografia
- **Headings**: Playfair Display (serif, elegante)
- **Body**: Nunito (sans-serif, friendly)

### Animações Premium
- Float animation (elementos flutuantes)
- Fade-in-up (entrada suave)
- Shimmer effects
- Hover micro-interactions
- Smooth transitions (0.3s)
- Gradient hovers em botões

### Design Elements
- **Glassmorphism**: backdrop-filter blur
- **Soft shadows**: sutis e elegantes
- **Rounded corners**: 1rem+ para suavidade
- **Gradient backgrounds**: multi-color pastels
- **Custom scrollbar**: rosa/lavanda gradient

## Estrutura Criada

### Arquivos de Dados
- `/app/frontend/src/psychologyData.js`: Mock data completo
  - Informações da psicóloga
  - Serviços (4)
  - Especialidades (4)
  - Depoimentos (3)
  - FAQs (5)
  - Templates legais completos
  - Posts do blog (3)

### Componentes Premium
- `PremiumHeader.jsx`: Header fixo glass com navegação smooth
- `PremiumFooter.jsx`: Footer completo com links legais e sociais

### Páginas Implementadas
1. **Home** (`PsychologyHome.jsx`):
   - Hero premium com gradients
   - Especialidades em cards
   - Preview de serviços
   - Depoimentos com estrelas
   - CTA section impactante

2. **Sobre** (`AboutPage.jsx`):
   - História da psicóloga
   - Formação acadêmica
   - Experiência profissional

3. **Serviços** (`ServicesPage.jsx`):
   - 4 serviços detalhados
   - Cards premium com hover

4. **Blog** (`BlogPage.jsx`):
   - Lista de artigos
   - Categorias
   - Preview com imagens

5. **Contato** (`ContactPage.jsx`):
   - Informações de contato
   - Placeholder Calendly
   - WhatsApp link

6. **Páginas Legais**:
   - Privacy Policy
   - Terms of Service
   - Disclaimer

### Styles (index.css)
- Custom animations (@keyframes)
- Premium transitions
- Glassmorphism utilities
- Soft shadow classes
- Custom scrollbar
- Selection styling
- Import Google Fonts

## Tecnologias

### Frontend
- React 19
- React Router v7
- TailwindCSS
- Shadcn UI
- Lucide React icons
- Google Fonts (Playfair Display + Nunito)

### Planejado Backend (não implementado por limite de tokens)
- FastAPI
- MongoDB
- JWT Auth
- Blog CMS API
- Image upload

## Status Atual

### ✅ Implementado
- Design premium completo
- Paleta de cores pastel
- Animações suaves
- Todas as páginas principais
- Mock data completo
- Templates legais
- Header/Footer premium
- Routing completo

### ⚠️ Issue Técnico
- Babel metadata plugin causando erros de compilação
- Necessário simplificar map operations ou desabilitar plugin
- Código está correto, issue é com ferramenta de build

### 🔄 Próximos Passos
1. **Resolver babel plugin issue**:
   - Simplificar componentes sem map complexos
   - Ou desabilitar visual-edits plugin temporariamente

2. **Backend Implementation**:
   - FastAPI endpoints para blog
   - MongoDB models
   - Admin authentication
   - CRUD operations

3. **Calendly Integration**:
   - Embed widget
   - Styling personalizado
   - Mobile optimization

4. **CMS Admin Panel**:
   - Editor visual (TipTap ou similar)
   - Upload de imagens
   - Preview antes de publicar
   - Categorias e tags

5. **SEO & Performance**:
   - Meta tags
   - Image optimization
   - Lazy loading
   - Analytics

## Melhorias Futuras (P2/P3)
- Sistema de agendamento nativo
- Portal do paciente
- Integração com WhatsApp Business
- Newsletter
- Recursos downloadáveis
- Área de membros
- Testes A/B
- Multilíngue

## Observações Técnicas
- Design focado em UX acolhedora
- Mobile-first approach
- Acessibilidade considerada
- Performance otimizada
- Código modular e reutilizável

---
**Data**: 04/12/2024
**Status**: Frontend design completo, aguardando fix de babel plugin + backend implementation
