# Configuracao de Campanha - Meta Ads (Mensagens WhatsApp)

## Estrutura recomendada

- Campanha: `CAMP_WPP_WORKSHOP_ORCAMENTOACO_2026-03-07_TESTE7D`
- Objetivo: `Engajamento > Mensagens`
- App de mensagens: `WhatsApp`
- Orcamento total teste: `R$210` (R$30/dia por 7 dias)

## Conjuntos de anuncios

1. `ADSET_InteressesAmplos_BR_25-44`
2. `ADSET_BroadBrasil_BR_21-55`

## Distribuicao de verba inicial

- R$15/dia para cada conjunto nos dias 1 a 3.
- A partir do dia 5, priorizar o conjunto com melhor custo por conversa qualificada.

## Segmentacao por conjunto

## ADSET_InteressesAmplos_BR_25-44

- Local: Brasil
- Idade: 25 a 44
- Genero: Todos
- Idioma: Portugues (opcional)
- Interesses (combinar 6 a 10):
  - Reforma residencial
  - Construcao civil
  - Engenharia civil
  - Arquitetura
  - Empreiteiro
  - Orcamento de obras
  - Gestao de obras
  - Materiais de construcao
- Posicionamentos: Advantage+ (automaticos)

## ADSET_BroadBrasil_BR_21-55

- Local: Brasil
- Idade: 21 a 55
- Genero: Todos
- Sem detalhamento por interesse (publico amplo)
- Posicionamentos: Advantage+ (automaticos)

## Anuncios por conjunto (3 variacoes)

Para cada conjunto, publicar os mesmos 3 anuncios:

1. `AD_Dor_Video30s`
2. `AD_Promessa_Imagem`
3. `AD_Urgencia_Imagem`

Usar os materiais de `02-criativos-e-copys.md`.

## Configuracao de mensagem

- Botao de CTA: `Enviar mensagem`
- Destino: `WhatsApp`
- Texto inicial sugerido:
  - "Oi! Quero garantir minha vaga no Workshop Orcamento de Aco."

## Checklist de publicacao

- Pixel ativo na landing page (se aplicavel).
- Conta de WhatsApp vinculada ao Business Manager.
- Politica de anuncios revisada (evitar promessas irreais).
- UTMs aplicadas no link de apoio (se houver link adicional):
  - `utm_source=meta`
  - `utm_medium=paid_social`
  - `utm_campaign=workshop_orcamentoaco_20260307`
  - `utm_content={{ad.name}}`

## Critérios de pausa/troca (durante teste)

- Pausar anuncio com baixo volume e pior custo relativo apos dia 3.
- Manter sempre pelo menos 2 anuncios ativos por conjunto.
- Trocar criativo se houver queda clara de resposta por 2 dias seguidos.
