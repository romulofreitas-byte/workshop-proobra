# Workshop PROOBRA - Landing Page

Landing page do Workshop PROOBRA - O método que transforma execução de obra em gestão lucrativa.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3002

# Meta Pixel (opcional)
NEXT_PUBLIC_META_PIXEL_ID=seu-pixel-id

# Microsoft Clarity (opcional)
NEXT_PUBLIC_CLARITY_ID=seu-clarity-id

# Google Meet (obrigatório)
GOOGLE_MEET_LINK=https://meet.google.com/xxx-xxxx-xxx
GOOGLE_MEET_PHONE=+55 XX XXXX-XXXX
GOOGLE_MEET_PIN=XXX XXX XXX#
GOOGLE_MEET_PHONE_LINK=https://tel.meet/xxx-xxxx-xxx?pin=xxxxxxxxxxxx
```

## 🏃 Executando

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3002](http://localhost:3002) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globais
│   └── not-found.tsx      # Página 404
├── components/
│   ├── sections/          # Componentes de seção
│   │   ├── ProobraPageContent.tsx
│   │   ├── HeroSectionWorkshop.tsx
│   │   └── ...
│   ├── ui/                # Componentes UI reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── ClientComponents.tsx
│   ├── ErrorBoundary.tsx
│   └── ...
├── contexts/
│   └── ModalContext.tsx   # Contexto de modais
├── data/                  # Dados e constantes
│   ├── faq.ts
│   ├── benefits.ts
│   ├── comparison.ts
│   └── program.ts
└── lib/
    ├── constants.ts       # Constantes do workshop
    ├── metaPixel.ts       # Tracking Meta Pixel
    └── utils.ts           # Utilitários
```

## 📝 Conteúdo Personalizado

### Atualizar Informações do Workshop

Edite `src/lib/constants.ts`:

```typescript
export const WORKSHOP_INFO = {
  title: 'WORKSHOP PROOBRA | MÉTODO DE GESTÃO LUCRATIVA DE OBRAS',
  date: '07/03',
  time: '10h',
  price: 49.99,
  mentor: 'Gabriel Gelape',
  // ...
}
```

### Atualizar FAQ

Edite `src/data/faq.ts` para adicionar ou modificar perguntas frequentes.

### Atualizar Programa

Edite `src/data/program.ts` para modificar as 3 chaves do método.

## 🎨 Customização

### Cores

As cores podem ser personalizadas em `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Cor principal
    // ...
  }
}
```

### Fontes

As fontes (Ubuntu e Montserrat) são carregadas automaticamente via Google Fonts em `src/app/layout.tsx`.

## 📸 Imagens

As seguintes imagens devem estar na pasta `public/`:

- `icon-proobra.png` - Ícone do site (favicon)
- `workshop-proobra.png` - Imagem Open Graph (1200x630px)
- `gabriel-gelape.jpg` - Foto do mentor

## 🔧 Configurações Importantes

### WhatsApp

Atualize o número do WhatsApp em `src/components/FloatingWhatsAppButton.tsx`:

```typescript
const WHATSAPP_NUMBER = '5511999999999' // Substituir
```

### Google Meet

Configure as informações do Google Meet no arquivo `.env.local` (obrigatório para o workshop ao vivo).

## 📊 SEO

A metadata SEO está configurada em:
- `src/app/layout.tsx` - Metadata global
- `src/app/page.tsx` - Metadata da página principal

## 🚢 Deploy

O projeto está pronto para deploy em plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**

## 📄 Licença

Este projeto é privado e proprietário do Workshop PROOBRA.

---

**Criado por Gabriel Gelape** - Engenheiro Civil
