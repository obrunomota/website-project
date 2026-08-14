// ===== Dados de Todas as Categorias =====
const categories = {

  fundamentos: {
    title: "Fundamentos de IA",
    subtitle: "Conceitos essenciais de Inteligência Artificial e Machine Learning",
    cards: [
      { term: "Inteligência Artificial (IA)", definition: "Campo da ciência da computação que cria sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana, como reconhecer imagens, entender linguagem e tomar decisões." },
      { term: "Machine Learning (ML)", definition: "Subcampo da IA em que os computadores aprendem com dados e exemplos, sem serem explicitamente programados para cada tarefa." },
      { term: "Deep Learning", definition: "Tipo de Machine Learning que usa redes neurais com muitas camadas para aprender representações complexas de dados, como reconhecimento de voz e imagens." },
      { term: "Rede Neural", definition: "Modelo computacional inspirado no cérebro humano, composto por nós (neurônios) interconectados que processam informações em camadas." },
      { term: "Dataset", definition: "Conjunto de dados usado para treinar, validar ou testar um modelo de IA. Quanto mais diverso e representativo, melhor o aprendizado do modelo." },
      { term: "Treinamento", definition: "Processo em que um modelo de IA aprende padrões a partir de um dataset, ajustando seus parâmetros internos para minimizar erros." },
      { term: "Modelo", definition: "Resultado do treinamento de um algoritmo de ML. É a representação matemática que faz previsões ou toma decisões com base em novos dados." },
      { term: "Overfitting", definition: "Quando um modelo aprende os dados de treinamento tão bem que perde a capacidade de generalizar para dados novos — ele decora em vez de aprender." },
      { term: "Underfitting", definition: "Quando um modelo é simples demais e não consegue capturar os padrões dos dados, resultando em desempenho ruim tanto no treino quanto em dados novos." },
      { term: "Aprendizado Supervisionado", definition: "Tipo de ML em que o modelo é treinado com exemplos rotulados (entrada + resposta correta), aprendendo a mapear entradas para saídas esperadas." },
      { term: "Aprendizado Não Supervisionado", definition: "Tipo de ML em que o modelo encontra padrões e estruturas em dados sem rótulos, como agrupamento de clientes por comportamento." },
      { term: "Aprendizado por Reforço", definition: "Tipo de ML em que um agente aprende tomando ações em um ambiente e recebendo recompensas ou punições, buscando maximizar sua pontuação ao longo do tempo." },
      { term: "NLP — Processamento de Linguagem Natural", definition: "Área da IA que permite que computadores entendam, interpretem e gerem linguagem humana. Base de chatbots, tradutores automáticos e assistentes de voz." },
      { term: "Visão Computacional", definition: "Campo da IA que treina computadores para interpretar e entender imagens e vídeos, como reconhecimento facial e detecção de objetos." },
      { term: "Algoritmo", definition: "Conjunto de instruções passo a passo que um computador segue para resolver um problema. Em ML, define como o modelo aprende a partir dos dados." },
      { term: "Feature (Característica)", definition: "Variável de entrada usada pelo modelo para fazer previsões. Ex: para prever o preço de uma casa, features podem ser área, número de quartos e localização." },
      { term: "Label (Rótulo)", definition: "A resposta correta associada a um exemplo de treinamento supervisionado. Ex: em um dataset de e-mails, o label pode ser 'spam' ou 'não spam'." },
      { term: "Viés (Bias) em IA", definition: "Tendência de um modelo produzir resultados injustos ou distorcidos, geralmente causada por dados de treinamento que não representam bem a diversidade do mundo real." },
      { term: "Inferência", definition: "Fase em que o modelo treinado é usado para fazer previsões sobre dados novos, que nunca viu antes. É o momento de 'uso' do modelo no mundo real." },
      { term: "Parâmetros", definition: "Valores internos de um modelo que são ajustados durante o treinamento. Modelos maiores possuem bilhões de parâmetros, o que aumenta sua capacidade de aprendizado." }
    ]
  },

  llms: {
    title: "LLMs",
    subtitle: "Como funcionam os Grandes Modelos de Linguagem por dentro",
    cards: [
      { term: "LLM — Modelo de Linguagem Grande", definition: "Modelo de IA treinado em enormes volumes de texto para gerar, resumir e responder em linguagem natural. Exemplos: GPT-4, Claude, Gemini, Llama." },
      { term: "Transformer", definition: "Arquitetura de rede neural que revolucionou o processamento de linguagem, usando mecanismos de atenção para entender o contexto de palavras em uma sequência." },
      { term: "Mecanismo de Atenção (Attention)", definition: "Componente central do Transformer que permite ao modelo focar em partes relevantes do texto ao processar cada palavra, capturando relações de longa distância." },
      { term: "Token", definition: "Unidade básica de texto processada por um LLM. Pode ser uma palavra inteira, parte de uma palavra ou um caractere. 'Inteligência' pode virar 2 tokens." },
      { term: "Tokenização", definition: "Processo de dividir o texto de entrada em tokens antes de enviá-lo ao modelo. Define como o LLM 'enxerga' e processa o texto." },
      { term: "Pré-treinamento", definition: "Fase inicial em que um LLM aprende padrões da linguagem a partir de enormes volumes de texto da internet, livros e outras fontes." },
      { term: "Fine-tuning", definition: "Ajuste fino de um modelo pré-treinado em um conjunto de dados menor e específico para que ele se comporte melhor em uma tarefa ou domínio particular." },
      { term: "RLHF", definition: "Reinforcement Learning from Human Feedback — técnica que usa feedback humano para treinar o modelo a dar respostas mais úteis, seguras e alinhadas com as expectativas." },
      { term: "GPT", definition: "Generative Pre-trained Transformer — família de modelos da OpenAI que popularizou os LLMs. Gera texto prevendo o próximo token com base no contexto anterior." },
      { term: "Embedding", definition: "Representação numérica (vetor) de um texto que captura seu significado semântico. Textos com significados similares têm embeddings próximos no espaço matemático." },
      { term: "Context Window (Janela de Contexto)", definition: "Quantidade máxima de tokens que um LLM pode processar de uma vez. Define o 'tamanho de memória' ativa do modelo em uma conversa." },
      { term: "Temperatura", definition: "Parâmetro que controla a criatividade das respostas do LLM. Valores baixos (0) tornam o modelo mais previsível; valores altos (1+) tornam as respostas mais variadas." },
      { term: "Top-p (Nucleus Sampling)", definition: "Técnica de geração de texto que limita as escolhas do modelo aos tokens cuja probabilidade acumulada atinge um valor p, equilibrando criatividade e coerência." },
      { term: "Top-k Sampling", definition: "Técnica que restringe a escolha do próximo token aos k tokens mais prováveis, reduzindo geração de texto sem sentido." },
      { term: "In-context Learning", definition: "Capacidade de um LLM de aprender uma tarefa com base em exemplos fornecidos diretamente no prompt, sem necessidade de novo treinamento." },
      { term: "Instruction Tuning", definition: "Técnica de fine-tuning em que o modelo é treinado para seguir instruções em linguagem natural, tornando-o mais útil e fácil de usar." },
      { term: "Alucinação (Hallucination)", definition: "Fenômeno em que um LLM gera informações falsas ou inventadas com confiança, como datas incorretas, citações fictícias ou fatos inexistentes." },
      { term: "Beam Search", definition: "Algoritmo de geração de texto que explora múltiplas sequências de tokens simultaneamente, escolhendo ao final a mais provável no conjunto." },
      { term: "Vocabulário do Modelo", definition: "Conjunto de todos os tokens que um modelo conhece e pode gerar. LLMs modernos têm vocabulários com dezenas de milhares de entradas." },
      { term: "Multimodalidade", definition: "Capacidade de um modelo processar e gerar diferentes tipos de dados além de texto, como imagens, áudio e vídeo. Ex: GPT-4o, Gemini Ultra." }
    ]
  },

  prompt: {
    title: "Engenharia de Prompt",
    subtitle: "Técnicas para extrair o melhor dos modelos de IA",
    cards: [
      { term: "Engenharia de Prompt", definition: "Arte e ciência de criar instruções eficazes para modelos de IA, de forma a obter respostas mais precisas, úteis e consistentes." },
      { term: "Zero-shot Prompting", definition: "Técnica em que você faz uma pergunta ao modelo sem fornecer exemplos, confiando apenas no conhecimento que ele adquiriu durante o treinamento." },
      { term: "Few-shot Prompting", definition: "Técnica em que você inclui alguns exemplos de entrada e saída no prompt para demonstrar ao modelo o formato ou estilo de resposta desejado." },
      { term: "Chain-of-Thought (CoT)", definition: "Técnica que instrui o modelo a pensar passo a passo antes de dar uma resposta final, melhorando muito o desempenho em problemas de raciocínio e matemática." },
      { term: "Role Prompting", definition: "Técnica de atribuir um papel ou persona ao modelo ('Você é um especialista em...') para direcionar o tom, estilo e nível de profundidade da resposta." },
      { term: "System Prompt", definition: "Instrução inicial que define o comportamento, personalidade e restrições do modelo antes de qualquer interação com o usuário. É o 'manual de regras' do assistente." },
      { term: "Prompt Template", definition: "Estrutura reutilizável de prompt com espaços para variáveis, permitindo gerar prompts consistentes para diferentes entradas sem reescrever do zero." },
      { term: "Instrução Direta", definition: "Técnica de ser explícito e específico sobre o que se quer: formato, tamanho, público-alvo, tom. Evita ambiguidades e melhora muito a qualidade da resposta." },
      { term: "Prompt Negativo", definition: "Instrução que diz ao modelo o que NÃO fazer ('não use jargão técnico', 'não inclua introdução'). Complementa a instrução positiva e reduz respostas indesejadas." },
      { term: "Delimitadores", definition: "Caracteres especiais (como ```, ###, ou <tags>) usados no prompt para separar claramente diferentes partes, como instruções, contexto e texto de entrada." },
      { term: "Saída Estruturada", definition: "Técnica de solicitar ao modelo uma resposta em formato específico como JSON, tabela ou lista, facilitando o uso programático da resposta." },
      { term: "ReAct Prompting", definition: "Técnica que combina Raciocínio (Reasoning) e Ação (Action), guiando o modelo a pensar em voz alta e executar ações iterativas para resolver tarefas complexas." },
      { term: "Self-consistency", definition: "Técnica em que o modelo é executado várias vezes com o mesmo prompt e a resposta mais frequente é escolhida, aumentando a confiabilidade em problemas de raciocínio." },
      { term: "Prompt Injection", definition: "Ataque em que entradas maliciosas tentam sobrescrever as instruções originais do sistema, fazendo o modelo ignorar suas regras e executar comandos não autorizados." },
      { term: "Jailbreak", definition: "Tentativa de contornar as salvaguardas de segurança de um modelo por meio de prompts engenhosos, fazendo-o responder a conteúdos normalmente bloqueados." },
      { term: "Iteração de Prompt", definition: "Processo de testar, avaliar e refinar prompts progressivamente até obter o resultado desejado. É a base do desenvolvimento eficaz com LLMs." },
      { term: "Meta-Prompt", definition: "Prompt que instrui o modelo a criar ou melhorar outros prompts, usando a própria IA para otimizar a engenharia de prompt." },
      { term: "Grounding", definition: "Técnica de ancorar as respostas do modelo em fatos verificáveis, fornecendo documentos ou dados reais no prompt para reduzir alucinações." },
      { term: "Persona do Usuário no Prompt", definition: "Descrever para quem a resposta é destinada no prompt ('Explique para um estudante do ensino médio') para calibrar o nível de linguagem e detalhe da resposta." },
      { term: "Prompt Chaining", definition: "Técnica de dividir uma tarefa complexa em múltiplos prompts sequenciais, onde a saída de um serve como entrada para o próximo, aumentando controle e precisão." }
    ]
  },

  contexto: {
    title: "Engenharia de Contexto",
    subtitle: "RAG, memória, embeddings e recuperação de informação",
    cards: [
      { term: "Engenharia de Contexto", definition: "Disciplina de projetar e gerenciar as informações fornecidas a um LLM para maximizar a qualidade e relevância de suas respostas, indo além da simples escrita de prompts." },
      { term: "RAG — Geração Aumentada por Recuperação", definition: "Técnica que combina busca de documentos relevantes com geração de texto: o modelo busca informações externas e as usa como contexto para responder com mais precisão." },
      { term: "Context Window (Janela de Contexto)", definition: "Limite máximo de tokens que um LLM pode receber e processar de uma vez. Gerenciar bem esse espaço é a essência da engenharia de contexto." },
      { term: "Chunking", definition: "Processo de dividir documentos longos em partes menores (chunks) para indexação e recuperação eficiente. O tamanho e a sobreposição dos chunks afetam a qualidade do RAG." },
      { term: "Embedding de Documento", definition: "Representação vetorial de um texto que captura seu significado. Usado para encontrar documentos semanticamente similares a uma pergunta do usuário." },
      { term: "Banco de Dados Vetorial", definition: "Tipo especial de banco de dados otimizado para armazenar e buscar embeddings por similaridade semântica. Exemplos: Pinecone, Weaviate, ChromaDB, pgvector." },
      { term: "Similaridade Cosseno", definition: "Métrica que mede o ângulo entre dois vetores para determinar quão semanticamente similares dois textos são. Valor próximo de 1 indica alta similaridade." },
      { term: "Retrieval (Recuperação)", definition: "Etapa do RAG que busca os chunks mais relevantes no banco vetorial com base na similaridade entre o embedding da pergunta e os embeddings dos documentos." },
      { term: "Reranking", definition: "Etapa após o retrieval que reordena os documentos recuperados usando um modelo mais preciso para garantir que os mais relevantes fiquem no topo antes de enviá-los ao LLM." },
      { term: "Memória em Agentes de IA", definition: "Mecanismo que permite a um agente de IA reter e acessar informações de interações passadas, tornando as conversas mais coerentes e personalizadas ao longo do tempo." },
      { term: "Memória de Curto Prazo", definition: "Informações mantidas dentro da context window durante uma única conversa. Desaparecem quando a janela é reiniciada ou excede seu limite." },
      { term: "Memória de Longo Prazo", definition: "Informações persistidas externamente (banco de dados, arquivos) e recuperadas quando relevantes, permitindo que o agente 'lembre' de conversas anteriores." },
      { term: "Compressão de Contexto", definition: "Técnica de resumir ou filtrar o histórico de conversa para liberar espaço na context window sem perder as informações mais importantes." },
      { term: "Lost in the Middle", definition: "Fenômeno em que LLMs tendem a ignorar informações posicionadas no meio de um contexto longo, prestando mais atenção ao início e ao fim. Afeta a qualidade do RAG." },
      { term: "Context Stuffing", definition: "Prática de inserir o máximo de informação possível na context window, sem curadoria. Geralmente piora a qualidade das respostas por diluir o que é relevante." },
      { term: "Índice Semântico", definition: "Estrutura de dados que organiza embeddings de documentos para permitir buscas rápidas por significado, em vez de palavras-chave exatas." },
      { term: "Grounding", definition: "Processo de conectar as respostas do LLM a fontes de dados verificáveis e atuais, reduzindo alucinações e aumentando a confiabilidade das informações geradas." },
      { term: "Multi-turn Conversation", definition: "Conversa com múltiplos turnos onde o histórico de mensagens é mantido e enviado ao modelo a cada nova interação, exigindo gerenciamento cuidadoso do contexto." },
      { term: "Relevância do Contexto", definition: "Medida de quão pertinente é a informação incluída no contexto para responder a uma pergunta específica. Contexto irrelevante pode confundir o modelo." },
      { term: "Janela Deslizante (Sliding Window)", definition: "Técnica de gerenciamento de contexto que mantém sempre as N mensagens mais recentes, descartando as mais antigas para não ultrapassar o limite da context window." }
    ]
  }

};

// ===== Lógica da Página de Flashcards =====

// Verifica se estamos na página de flashcards (ela possui o elemento #card)
if (document.getElementById('card')) {

  // Lê o parâmetro "category" da URL (ex: flashcards.html?category=llms)
  const params = new URLSearchParams(window.location.search);
  const categoryKey = params.get('category');
  const category = categories[categoryKey];

  // Se a categoria não existir, volta para a home
  if (!category) {
    window.location.href = 'index.html';
  }

  // Preenche o título e subtítulo da página com a categoria escolhida
  document.getElementById('category-title').textContent = category.title;
  document.getElementById('category-subtitle').textContent = category.subtitle;
  document.title = `${category.title} — AI Flashcards`;

  const flashcards = category.cards;

  // Estado da aplicação
  let currentIndex = 0;
  let isFlipped = false;

  // Referências aos elementos HTML
  const card = document.getElementById('card');
  const termEl = document.getElementById('term');
  const definitionEl = document.getElementById('definition');
  const counterEl = document.getElementById('counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');

  // Carrega o cartão atual na tela
  function loadCard() {
    const current = flashcards[currentIndex];
    termEl.textContent = current.term;
    definitionEl.textContent = current.definition;
    counterEl.textContent = `${currentIndex + 1} / ${flashcards.length}`;

    // Garante que o cartão começa na frente
    card.classList.remove('flipped');
    isFlipped = false;

    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === flashcards.length - 1;
  }

  // Vira o cartão
  function flipCard() {
    isFlipped = !isFlipped;
    card.classList.toggle('flipped', isFlipped);
  }

  // Navega para o cartão anterior
  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      loadCard();
    }
  }

  // Navega para o próximo cartão
  function nextCard() {
    if (currentIndex < flashcards.length - 1) {
      currentIndex++;
      loadCard();
    }
  }

  // Expõe as funções globalmente para os onclick no HTML
  window.flipCard = flipCard;
  window.prevCard = prevCard;
  window.nextCard = nextCard;

  // Inicializa
  loadCard();
}
