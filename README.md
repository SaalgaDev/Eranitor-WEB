# ERANITOR

Plataforma de gerenciamento e otimização de estudos, desenvolvida como projeto acadêmico (TCC) de Desenvolvimento de Sistemas.

> **Planejar → Estudar → Registrar → Analisar → Adaptar → Melhorar**

---

## Sumário

- [Visão geral](#visão-geral)
- [Componentes do projeto](#componentes-do-projeto)
- [Site institucional](#site-institucional)
- [Aplicativo (TCC)](#aplicativo-tcc)
- [Banco de dados](#banco-de-dados)
- [Backend](#backend)
- [Regras de negócio](#regras-de-negócio)
- [Endpoints REST](#endpoints-rest)
- [Fases de implementação](#fases-de-implementação)
- [Equipe e cronograma](#equipe-e-cronograma)
- [Pontos em aberto](#pontos-em-aberto)

---

## Visão geral

| Item | Descrição |
| --- | --- |
| Produto principal | Aplicativo mobile |
| Público-alvo | Estudantes do ensino médio e candidatos a vestibular |
| Posicionamento | Assistente de gerenciamento de estudos. Não é professor nem substituto do estudante |
| Visão futura | Gamificação (XP, streaks, conquistas), inspirada em plataformas como Duolingo |

### Conceitos do projeto

Matérias, tópicos, tarefas, agenda, sessões de estudo, controle de tempo, metas, progresso, dashboards, métricas, relatórios, Pomodoro, Active Recall, Spaced Repetition, Técnica Feynman, Mapas Mentais, gamificação e sugestões baseadas em dados.

### Regras de comunicação

- O ERANITOR **organiza, acompanha, mede, lembra, analisa, sugere e incentiva**.
- Nunca prometer aprovação, aumento de notas ou resultados garantidos.
- Nunca afirmar que uma funcionalidade existe se ela não foi implementada ou oficialmente definida. Se não estiver definida, perguntar ou apresentar como proposta.

---

## Componentes do projeto

| Componente | Tecnologia | Estado |
| --- | --- | --- |
| Site + área do estudante | Angular 18, SCSS | Pronto e integrado à API |
| App mobile | (equipe do mobile) | Em desenvolvimento, usará a mesma API |
| Backend | Java, Spring Boot, JWT, PostgreSQL (Supabase), Render | No ar e conectado ao site |

---

## Site institucional

### Objetivo

Ser a porta de entrada oficial do ERANITOR, com foco total em conversão:

**Conhecer → Entender → Baixar**

O site **não substitui o app**. Ele apresenta o produto, gera confiança e direciona para o download.

### Premissas técnicas

- Login e cadastro reais (JWT); a área do estudante lê e grava matérias, tópicos, tarefas, agenda e tempo de estudo na API.
- O site chama sempre `/api/...`: em desenvolvimento o `proxy.conf.json` repassa para `https://eranitor-backend.onrender.com`; na Vercel, o `vercel.json` faz o mesmo. Assim não há bloqueio de CORS.
- Prioridade das tarefas calculada com a mesma fórmula do backend (`services/prioridade.ts`), com o bloco "O que estudar hoje".
- Cronômetro de estudo (livre ou pomodoro) com tela cheia; o tempo é registrado após confirmação.
- Rodar localmente: `npm install` e `npm start` (precisa de internet, pois usa a API).
- Angular 18, escolhido para casar com o código do app.
- SCSS com design tokens centralizados.

### Páginas

| Página | Conteúdo |
| --- | --- |
| Home | Identidade visual, slogan, explicação breve, CTA de download, botão "conhecer mais", elementos visuais do app. Deve responder: "O que é o ERANITOR e por que eu deveria conhecê-lo?" |
| Sobre Nós | Proposta, como funciona, recursos, benefícios e diferenciais. Sem linguagem técnica (nada de banco, API, JWT ou arquitetura) |
| Contato | Totalmente estática, sem formulário com backend |
| Download | Foco quase exclusivo na instalação: chamada clara, plataformas, botões das lojas, QR Code quando aplicável, instruções e compatibilidade |

**Páginas futuras** (preparar a arquitetura, não criar sem necessidade): Quem somos, Suporte, FAQ, Política de Privacidade, Termos de Uso, Funcionalidades, Novidades, Blog e páginas por plataforma.

### Componentes

- **Compartilhados:** Logo, CtaButton, LoopDiagram, PhoneMockup, FeatureCard, StoreBadge.
- **Layout:** Header, Footer.

### Identidade visual

- Estética **"sticker"**: sombras offset duras, bordas grossas em formato pílula, tom jovem e gamificado.
- Tecnológica, jovem, acadêmica, moderna, limpa, profissional e levemente futurista.
- Mockups de referência foram usados apenas como estilo visual, não como template.
- Não alterar arbitrariamente logotipo, cores, tipografia, proporções ou elementos gráficos. Mudança significativa exige justificativa de UX/UI ou branding.

**Paleta oficial (tokens):**

| Cor | Hex |
| --- | --- |
| Fundo escuro | `#060A10` |
| Azul profundo | `#101A2B` |
| Azul claro | `#95C5EB` |
| Cinza | `#BCBCBF` |
| Creme | `#FFF5E8` |

### Decisões travadas

- **Tokens em arquivo único** (`_tokens.scss`): trocar a paleta exige editar só esse arquivo.
- **Logo isolado em componente próprio**: trocar o asset exige alterar um único arquivo.
- **Sem dados inventados**: badges das lojas marcados como "em breve", sem links de download falsos.
- **Prova social** (estrelas, avatares) apenas como placeholders visuais genéricos, sem números inventados.
- **Estilo de trabalho iterativo**: versão funcional primeiro, depois conteúdo definitivo, links reais e refinamentos.
- Facilidade de atualização futura vale mais que completude inicial.

### Próximos passos

- [ ] Substituir placeholders por copy, links e assets oficiais.
- [ ] Trocar o SVG placeholder do Logo pelo oficial.
- [ ] Ativar os links reais das lojas quando o app for publicado.
- [ ] Refinar páginas conforme a identidade do produto se consolidar.

### Diretrizes de desenvolvimento

**Prioridade de decisão:**
Segurança → Funcionalidade → Experiência do usuário → Performance → Manutenibilidade → Estética

| Área | Diretrizes |
| --- | --- |
| UX | Clareza, hierarquia visual, feedback, consistência. CTAs com texto claro. Evitar excesso de elementos, animações, pop-ups e textos longos |
| Responsividade | Mobile-first. Deve funcionar em smartphones, tablets, notebooks e desktops |
| Acessibilidade | HTML semântico, headings hierárquicos, `alt` em imagens, contraste, navegação por teclado, estados de foco, labels, respeito a `prefers-reduced-motion` |
| Segurança | Sem secrets ou API keys no repositório, sem `eval`, sem HTML arbitrário sem sanitização, links externos tratados com segurança, downloads apenas de fontes oficiais |
| Código | Legível, reutilizável, baixo acoplamento, alta coesão, componentes pequenos, sem duplicação, sem dependências desnecessárias |
| Arquitetura | Simples e proporcional. Separar componentes, páginas, layouts, estilos, assets, dados, serviços e configurações |
| Performance | Imagens otimizadas, lazy loading, pouco JS, fontes eficientes, cache, Core Web Vitals |
| SEO | Title e meta description por página, headings semânticos, URLs amigáveis, Open Graph, favicon, sitemap, robots.txt, dados estruturados quando fizer sentido |
| Download | Botões claros e consistentes. Nunca inventar links. Usar placeholders identificados até a publicação. Priorizar Google Play, App Store e plataformas oficiais. Nunca apontar para APKs de origem desconhecida |
| Assets | Screenshots reais, mockups do app e ilustrações coerentes com a marca. Sem imagens genéricas |

**Regra contra overengineering:** antes de adicionar biblioteca, framework, serviço, backend ou dependência, perguntar se a tecnologia é realmente necessária para o objetivo do site.

**Checklist antes de implementar:** é necessário? Condiz com o ERANITOR? Melhora a UX? Mantém o código saudável? É seguro, responsivo e acessível? Tem impacto aceitável na performance? É fácil de manter? Está preparado para evoluir?

---

## Aplicativo (TCC)

### Frontend

- Angular 17+ com standalone components, TypeScript, SCSS, routing e Git/GitHub.
- Arquivo `CLAUDE.md` com contexto do projeto.
- Estrutura de pastas: `core`, `shared`, `layout`, `features`.
- Convenção do Angular CLI neste projeto: sem sufixo `Component` (o arquivo `perfil.ts` exporta a classe `Perfil`).
- Componente compartilhado `Logo` com inputs `variant`, `size` e `layout`.
- Telas prontas: Splash e Login.
- Implementação deve seguir fielmente os wireframes.

### Design system do app

| Item | Valor |
| --- | --- |
| Cores | `#101A2B`, `#D2CFCB`, `#9ECCFA` |
| Fundo | `linear-gradient` |
| Fonte | Righteous |

---

## Banco de dados

PostgreSQL. Todas as chaves estrangeiras usam `ON DELETE CASCADE`.

### Tabelas

**Usuario**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idUsuario` | SERIAL | PK |
| `Nome` | VARCHAR(100) | NOT NULL |
| `Login` | VARCHAR(50) | NOT NULL, UNIQUE |
| `SenhaHash` | VARCHAR(255) | NOT NULL |
| `Serie` | VARCHAR(20) | |
| `Instituicao` | VARCHAR(150) | |
| `CriadoEm` | TIMESTAMP | NOT NULL |

**Materia**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idMateria` | SERIAL | PK |
| `Usuario_idUsuario` | INT | FK → Usuario, NOT NULL |
| `nome` | VARCHAR(100) | NOT NULL |
| `ativa` | BOOLEAN | NOT NULL, DEFAULT TRUE |

**Topico**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idTopico` | SERIAL | PK |
| `Materia_idMateria` | INT | FK → Materia, NOT NULL |
| `Nome` | VARCHAR(150) | NOT NULL |
| `Concluido` | BOOLEAN | NOT NULL, DEFAULT FALSE |

**Tarefa**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idTarefa` | SERIAL | PK |
| `Materia_idMateria` | INT | FK → Materia, NOT NULL |
| `Usuario_idUsuario` | INT | FK → Usuario, NOT NULL |
| `Titulo` | VARCHAR(150) | NOT NULL |
| `Descricao` | TEXT | |
| `DataVencimento` | DATE | |
| `Cor` | VARCHAR(20) | |
| `Concluida` | BOOLEAN | NOT NULL, DEFAULT FALSE |
| `CriadoEm` | TIMESTAMP | NOT NULL |

**Agenda**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idAgenda` | SERIAL | PK |
| `Usuario_idUsuario` | INT | FK → Usuario, NOT NULL |
| `Data_2` | DATE | NOT NULL |
| `Titulo` | VARCHAR(150) | NOT NULL |
| `Tipo` | VARCHAR(20) | |

**Desempenho**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idDesempenho` | SERIAL | PK |
| `Materia_idMateria` | INT | FK → Materia, NOT NULL |
| `Usuario_idUsuario` | INT | FK → Usuario, NOT NULL |
| `Mes` | SMALLINT | NOT NULL |
| `Ano` | INT | NOT NULL |
| `HorasConcluidas` | INT | NOT NULL, DEFAULT 0 |
| `HorasMeta` | INT | NOT NULL |

**TempoEstudo**

| Coluna | Tipo | Restrições |
| --- | --- | --- |
| `idTempoEstudo` | SERIAL | PK |
| `Materia_idMateria` | INT | FK → Materia, NOT NULL |
| `Usuario_idUsuario` | INT | FK → Usuario, NOT NULL |
| `Mes` | SMALLINT | NOT NULL |
| `Ano` | INT | NOT NULL |
| `MinutosAtividade` | INT | NOT NULL, DEFAULT 0 |
| `MinutosVideo` | INT | NOT NULL, DEFAULT 0 |
| `MinutosApostila` | INT | NOT NULL, DEFAULT 0 |

### Relacionamentos

- `Usuario` 1:N `Materia`, `Agenda`, `Tarefa`, `Desempenho`, `TempoEstudo`
- `Materia` 1:N `Topico`, `Tarefa`, `Desempenho`, `TempoEstudo`

---

## Backend

**Stack:** Java, Spring Boot, JPA/Hibernate, PostgreSQL, JWT (access + refresh token), BCrypt, Spring Security.

**Pacote base:** `com.eranitor.tcc`

### Camadas

| Camada | Classes |
| --- | --- |
| Entities | Usuario, Materia, Topico, Tarefa, Desempenho, TempoEstudo, Agenda |
| Services | AuthService, UsuarioService, MateriaService, TopicoService, TarefaService, PriorizacaoService, MetaService, ProgressoService, DesempenhoService, TempoEstudoService, AgendaService, NotificacaoService, RelatorioService |
| Controllers | Auth, Usuario, Materia, Topico, Tarefa, Progresso, Meta, Desempenho, TempoEstudo, Agenda, Notificacao, Relatorio |
| Repositories | Um `JpaRepository` por entidade, com queries derivadas por usuário, matéria, período, status e tipo |

---

## Regras de negócio

| RN | Descrição | Status |
| --- | --- | --- |
| RN001 | **Autenticação**: login e senha validados com BCrypt, retorna JWT e refresh token | Implementável |
| RN002 | **Criação de conta**: nome, login, senha, série e instituição. Senha forte (8+ caracteres, maiúscula, minúscula, número e especial). Login único | Implementável |
| RN003 | **Meta semanal**: o usuário define a meta total (ex.: 28h). O `MetaService` sugere divisão igual entre matérias ativas (28 ÷ 4 = 7h). O usuário ajusta por matéria. Salva em `Desempenho.horasmeta` | Adaptada |
| RN004 | **Progresso**: % de tarefas concluídas (geral e por matéria) e `horasconcluidas` vs `horasmeta` | Implementável |
| RN005 | **Registro manual de tempo**: 3 tipos (atividade, vídeo, apostila) em `TempoEstudo` | Implementável |
| RN006 | **CRUD de matérias** (hard delete) | Implementável |
| RN007 | **CRUD de tópicos** (hard delete, marcar concluído) | Implementável |
| RN008 | **CRUD de tarefas e priorização**: prioridade calculada em tempo real, não armazenada | Adaptada |
| RN009 | **Calendário**: agenda (PROVA, ATIVIDADE, APRESENTACAO, TRABALHO) e tarefas com data de vencimento e cor | Implementável |
| RN010 | **Notificações**: sem tabela e sem scheduler. O `NotificacaoService` monta a mensagem e o frontend exibe | Adaptada |
| RN011 | **Sincronização** com o banco (persistência) | Implementável |
| RN012 | **Perfil**: nome, login, série, instituição, lista de matérias e alteração de senha | Implementável |
| RN013 | **Sempre online**: responsabilidade do frontend Angular (`navigator.onLine`, modal "Sem conexão", fila de requisições offline). O backend retorna 503 se o banco estiver indisponível | Frontend |
| RN014 | **Relatórios**: JSON gerado por queries, o frontend faz o download. Sem arquivo no servidor | Adaptada |

### Fórmula de priorização (RN008)

```
prioridade = (atraso × 5) + (proximidade × 3) − (progresso_materia × 2)
```

- **Atraso:** dias após `datavencimento`, se `concluida = false` e hoje > vencimento.
- **Proximidade:** dias até o vencimento (janela de 0 a 14 dias, com peso crescente).
- **Progresso da matéria:** % de tarefas concluídas (reduz a prioridade).
- Calculada sob demanda em `PriorizacaoService.getTarefasOrdenadas(usuarioId)`.

> O histórico do projeto cita uma versão com o termo `Dificuldade × 2`. Esse campo não existe no schema atual, por isso foi removido na adaptação.

### Mensagem diária (RN010)

- Template: `Você completou X% esta semana! Próximas: [tarefa1, tarefa2]`
- Headers: `X-Notificacao-Diaria` e `X-Ultima-Notificacao`.

### Relatório (RN014)

```json
{
  "periodo": "Jan-Jun 2026",
  "desempenho": [{ "materia": "", "percentual": 0, "horas": 0 }],
  "tempo_estudo": [{ "materia": "", "exercicio": 0, "video": 0, "apostila": 0 }],
  "eventos": [{ "data": "", "tipo": "", "titulo": "" }]
}
```

---

## Endpoints REST

| Domínio | Endpoints |
| --- | --- |
| Auth | `POST /auth/login`, `POST /auth/refresh`, `POST /auth/register` |
| Usuário | `GET /usuarios/perfil`, `PUT /usuarios/perfil`, `PUT /usuarios/senha` |
| Matérias | `GET /materias`, `POST /materias`, `PUT /materias/{id}`, `DELETE /materias/{id}` |
| Tópicos | `GET /materias/{id}/topicos`, `POST /topicos`, `PUT /topicos/{id}`, `DELETE /topicos/{id}` |
| Tarefas | `GET /tarefas`, `GET /materias/{id}/tarefas`, `GET /tarefas/proximas`, `POST /tarefas`, `PUT /tarefas/{id}`, `PATCH /tarefas/{id}/concluir`, `DELETE /tarefas/{id}` |
| Progresso | `GET /progresso` |
| Metas | `POST /metas`, `GET /metas/distribuicao`, `PUT /metas/{materiaId}/{mes}/{ano}`, `GET /metas/{mes}/{ano}` |
| Desempenho | `GET /desempenho/{mes}/{ano}` |
| Tempo de estudo | `POST /tempo-estudo`, `GET /tempo-estudo/{mes}/{ano}`, `GET /tempo-estudo/semana` |
| Agenda | `GET /agenda/{mes}/{ano}`, `GET /agenda/{data}`, `POST /agenda`, `PUT /agenda/{id}`, `DELETE /agenda/{id}` |
| Notificações | `GET /notificacoes/diaria` |
| Relatórios | `GET /relatorios/periodo`, `GET /relatorios/materia/{id}`, `GET /relatorios/tempo-estudo` |

---

## Fases de implementação

- [ ] **Fase 1 — Auth e Perfil:** Usuario, AuthService/Controller, UsuarioService/Controller, JWT, BCrypt, Spring Security, testes.
- [ ] **Fase 2 — Matérias e Tópicos:** entities, services, controllers e testes de CRUD.
- [ ] **Fase 3 — Tarefas e Priorização:** Tarefa, TarefaService/Controller, PriorizacaoService, `/tarefas/proximas`, testes de ordenação.
- [ ] **Fase 4 — Tempo, Meta e Progresso:** TempoEstudo, Desempenho, MetaService, ProgressoService, DesempenhoService e controllers.
- [ ] **Fase 5 — Calendário e Eventos:** Agenda, AgendaService/Controller, listagem por período.
- [ ] **Fase 6 — Notificações e Relatórios:** NotificacaoService/Controller, RelatorioService/Controller.

---

## Equipe e cronograma

- Equipe de 4 pessoas.
- Cronograma de 18 semanas, com **MVP previsto para as semanas 15 a 18**.

---

## Pontos em aberto

Divergências entre os materiais que precisam ser resolvidas:

| # | Ponto | Detalhe |
| --- | --- | --- |
| 1 | Coluna `role` | Aparece no documento de RNs (0 = USUARIO, 1 = ADMIN), mas não existe no SQL |
| 2 | Tipos de id | O documento de RNs usa BIGINT em alguns ids e FKs, o SQL usa SERIAL/INT |
| 3 | Tópico × Tarefa | O documento diz que Tópico 1:N Tarefa, mas a tabela `Tarefa` não tem FK para `Topico`. Métodos como `getTarefasByTopico` dependem disso |
| 4 | `Tarefa.CriadoEm` | TIMESTAMP no SQL, DATE no documento de RNs |
| 5 | Meta semanal | A RN003 fala em meta semanal, mas `Desempenho` armazena por mês e ano |
| 6 | Páginas do site | A instrução mestre prevê Home, Conheça e Download. O site gerado tem Home, Sobre Nós, Contato e Download, sem uma página "Conheça" separada |
| 7 | Versões do Angular | App em 17+, site em 18. Provavelmente intencional, vale confirmar |
| 8 | Status das RNs | O documento marca as RNs como ✅ (implementáveis), mas o checklist está desmarcado. Nenhuma deve ser tratada como já implementada |
| 9 | Diagramas | DER, Casos de Uso, Classes e Objeto ainda não foram incorporados a este documento |