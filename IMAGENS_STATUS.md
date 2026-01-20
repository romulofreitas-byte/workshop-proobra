# Status das Imagens - Workshop PROOBRA

## ✅ Referências de Código Atualizadas

Todas as referências de imagens no código já foram atualizadas para os nomes PROOBRA.

### Imagens Configuradas no Código

1. **Logo/Ícone**: `/icon-proobra.png`
   - ✅ `HeroSectionWorkshop.tsx` (linha ~26)
   - Tamanho: 28x28px no header

2. **Foto do Mentor**: `/gabriel-gelape.jpg`
   - ✅ `HeroSectionWorkshop.tsx` (linha ~65 - mobile)
   - ✅ `HeroSectionWorkshop.tsx` (linha ~226 - desktop)
   - ✅ `AboutGabrielProobraSection.tsx` (linha ~20)
   - Mobile: usando `fill` com `sizes="100vw"`
   - Desktop: width 800px, height 1000px

3. **Imagem Open Graph**: `/workshop-proobra.png`
   - ✅ `src/app/layout.tsx` (metadata openGraph)
   - ✅ `src/app/page.tsx` (metadata openGraph e Twitter)
   - Tamanho: 1200x630px

## ⚠️ Imagens Faltando na Pasta `/public`

As seguintes imagens precisam ser adicionadas à pasta `/public`:

### Prioridade Alta
- [ ] `/public/icon-proobra.png` - Logo/ícone do PROOBRA
  - Tamanho recomendado: 512x512px ou maior (será redimensionado automaticamente)
  - Formato: PNG com transparência

- [ ] `/public/gabriel-gelape.jpg` - Foto do mentor
  - Tamanho recomendado: mínimo 1318x1318px para qualidade
  - Formato: JPG otimizado (qualidade 80-85)
  - Background removido ou fundo neutro recomendado

- [ ] `/public/workshop-proobra.png` - Imagem Open Graph
  - Tamanho: exatamente 1200x630px
  - Formato: PNG ou JPG
  - Deve conter: Logo PROOBRA, título do workshop, visual de construção/obras

## 📁 Imagens Antigas que Podem Ser Removidas

As seguintes imagens do projeto anterior ainda estão na pasta `/public` e podem ser removidas após criar as novas:

- `icon-escuderia.png`
- `romulo-hero.png`
- `romulo-hero-2.png`
- `romulo-mentor-destrava.jpg`
- `workshop-metodo.png`
- `Escuderia Branco.png`
- `Logo Método Pódium horizontal branco cheio.png`
- `thumb-cold-call.jpg`
- `background-podium-hero.jpg`
- `Depoimento Workshop Destrava Ligações 2ª Edição.png`

## 🎨 Especificações Detalhadas

### icon-proobra.png
- **Uso**: Logo no header mobile, favicon
- **Dimensões**: 512x512px ou maior (será redimensionado)
- **Formato**: PNG com transparência
- **Background**: Transparente
- **Qualidade**: Alta resolução

### gabriel-gelape.jpg
- **Uso**: Imagem principal do Hero (mobile e desktop)
- **Dimensões**: Mínimo 1318x1318px
- **Formato**: JPG (qualidade 80-85)
- **Aspect Ratio**: 1:1 (quadrado)
- **Background**: Removido ou neutro (cinza escuro/preto)
- **Foco**: Rosto e parte superior do corpo

### workshop-proobra.png
- **Uso**: Preview em redes sociais (Open Graph)
- **Dimensões**: Exatamente 1200x630px
- **Formato**: PNG ou JPG
- **Conteúdo Sugerido**:
  - Logo PROOBRA (canto superior esquerdo)
  - Título: "Workshop PROOBRA"
  - Subtítulo: "Gestão Lucrativa de Obras"
  - Visual relacionado a construção civil/obras
  - Cores PROOBRA: laranja (#f29829), azul (#0477bf)

## ✅ Checklist Final

### Preparação
- [ ] Criar `/public/icon-proobra.png`
- [ ] Criar `/public/gabriel-gelape.jpg`
- [ ] Criar `/public/workshop-proobra.png`

### Verificação
- [ ] Todas as imagens carregam corretamente
- [ ] Hero mobile exibe imagem corretamente
- [ ] Hero desktop exibe imagem corretamente
- [ ] Logo aparece no header
- [ ] Open Graph funciona (testar em preview tools)

### Otimização
- [ ] Imagens otimizadas (tamanho de arquivo adequado)
- [ ] Imagens têm alt text apropriado
- [ ] Performance verificada (PageSpeed)

### Limpeza (Opcional)
- [ ] Remover imagens antigas não utilizadas
- [ ] Atualizar favicon.ico se necessário

## 🔗 Ferramentas para Teste de Open Graph

Após criar a imagem, testar em:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

**Status**: Código atualizado ✅ | Imagens pendentes ⚠️
