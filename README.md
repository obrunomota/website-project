# AI Flashcards

Aplicação web para aprender conceitos de Inteligência Artificial através de flashcards interativos com animação de flip 3D.

## Funcionalidades

- Página inicial com seleção de categorias
- 4 categorias com 20 flashcards cada (80 no total)
- Animação de virar cartão para revelar a definição
- Navegação entre cartões (anterior / próximo)
- Design dark mode responsivo
- Zero dependências de frontend (HTML, CSS e JS puro)

## Categorias

| Categoria | Descrição |
|---|---|
| Fundamentos de IA | Conceitos essenciais de IA e Machine Learning |
| LLMs | Como funcionam os Grandes Modelos de Linguagem |
| Engenharia de Prompt | Técnicas para extrair o melhor dos modelos de IA |
| Engenharia de Contexto | RAG, memória, embeddings e recuperação de informação |

## Estrutura do Projeto

```
website-project/
├── package.json       # Configuração do projeto e dependências
├── server.js          # Servidor Express (serve os arquivos estáticos)
└── public/            # Arquivos do frontend
    ├── index.html     # Página inicial com seleção de categorias
    ├── flashcards.html# Página de estudo dos flashcards
    ├── style.css      # Estilos (dark mode, flip 3D, responsividade)
    └── script.js      # Dados dos flashcards e lógica de navegação
```

## Como Executar Localmente

**Pré-requisito:** Node.js instalado ([nodejs.org](https://nodejs.org))

```bash
# 1. Acesse a pasta do projeto
cd website-project

# 2. Instale as dependências (apenas na primeira vez)
npm install

# 3. Inicie o servidor
npm start
```

Abra o navegador em `http://localhost:3000`.

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

## Deploy no Hostinger

1. Faça upload de todos os arquivos para o servidor
2. No painel do Hostinger, defina o comando de entrada como `node server.js`
3. O servidor iniciará automaticamente na porta definida pela variável de ambiente `PORT`

## Tecnologias

- **Backend:** Node.js + Express
- **Frontend:** HTML5, CSS3, JavaScript (sem frameworks)
- **Estilo:** Dark mode com tema roxo/neon, animação CSS flip 3D
