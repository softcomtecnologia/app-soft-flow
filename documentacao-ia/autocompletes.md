# Guia de criacao de autocompletes (assistants)

Este guia descreve como estao estruturados os autocompletes (assistants) do SoftFlow e qual o fluxo para criar novos itens reaproveitando o padrao existente.

## Estrutura atual
- **Tipos (`src/types/assistant`)**: cada assistant expoe uma interface TypeScript (`IUserAssistant`, `IProductAssistant`, `IProjectAssistant`, etc.) com o formato retornado pelo backend.
- **Services (`src/services/*Services.tsx`)**: funcoes `assistant` responsaveis por chamar as rotas internas (`/api/assistant/...`) com suporte a parametros de pesquisa.
- **Rotas Next (`src/app/api/assistant`)**: arquivos `*.ts` que tratam cookies, montam a chamada para a API externa (`/auxiliar/...`) e pastas com `route.ts` reexportando o metodo HTTP.
- **Camada de UI**: os filtros usam `react-select/async` e o hook `useAsyncSelect` para lidar com debounce, labels e valores.
- **Helpers compartilhados**: `getBaseApiUrl` resolve a URL base do backend; `js-cookie` fornece o `user_id` logado quando necessario.

## Passo a passo para um novo autocomplete
1. **Definir o tipo**: crie uma interface em `src/types/assistant` contendo exatamente os campos retornados pela API externa.
2. **Service**: adicione um arquivo em `src/services` exportando `async function assistant(data)` que chama `axios.get('/api/assistant/<nome>')` repassando os parametros.
3. **Rota interna**: crie `src/app/api/assistant/<nome>.ts` copiando a estrutura existente (cookies -> headers -> chamada a `${getBaseApiUrl()}/auxiliar/<endpoint>`). Crie tambem `src/app/api/assistant/<nomePlural>/route.ts` reexportando o metodo `GET`.
4. **Integracao no front**:
   - Importe o novo service no componente correspondente.
   - Configure `useAsyncSelect` com `fetchItems`, `getOptionLabel` e `getOptionValue`.
   - No `fetchItems` passe sempre os parametros exigidos pelo backend. Quando houver dependencia de usuario, mande `usuario_id` do filtro selecionado ou, em fallback, `Cookies.get('user_id')`.
   - O hook dispara automaticamente uma busca em branco apos 1 segundo sem digitar quando o menu e aberto (onMenuOpen). Isso garante que ao apenas clicar no autocomplete as opcoes iniciais sejam recuperadas. Ajuste `debounceMs` conforme o caso.
5. **Atualizar filtros e payloads**: inclua o novo campo no tipo de filtros (`ICaseFilter`, por exemplo) e garanta que o payload enviado aos services/tabelas contenha o identificador retornado pelo autocomplete.

## Boas praticas
- Reutilize o hook `useAsyncSelect` para manter o comportamento de debounce e selecao consistente.
- Normalize os rotulos exibidos (nome, setor, etc.) para evitar `undefined` na UI.
- Sempre trate erros na camada de service (try/catch) e logue no backend para facilitar diagnostico.
- Documente particularidades (por exemplo, parametros obrigatorios como `usuario_id`) diretamente no componente ou neste guia.

Seguindo esses passos e possivel criar novos autocompletes com comportamento padronizado e integracao transparente entre frontend e backend.
