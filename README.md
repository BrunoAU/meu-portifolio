# Meu Portifólio

Um [portifólio](https://683ca156466de363ff63029a--delightful-brioche-c50ad2.netlify.app) para você conhecer um pouco mais sobre mim.

# Portfólio – Bruno Augusto

Bem-vindo ao repositório do meu portfólio pessoal! Aqui você encontrará três páginas HTML principais que apresentam minhas informações, certificados e um projeto chamado **Animal Quest**. Este README explica a estrutura do projeto, as tecnologias utilizadas, como executar localmente e um breve histórico de versões.

---

## Descrição

Este portfólio foi desenvolvido para exibir:

1. **Página Inicial (index.html)**  
   - Seção “Sobre”: breve apresentação pessoal.  
   - Seção “Certificados”: link para uma página com os certificados de Python e JavaScript.  
   - Seção “Projetos”: link para o projeto **Animal Quest**.  
   - Seção “Contato”: informações de contato (e-mail e GitHub).  
   - Funcionalidade de troca de idioma (Português ⇄ Inglês) e modo claro/escuro.

2. **Certificados e Tecnologias (certificados.html)**  
   - Lista de certificados (Cursos “Fundamentos do Python 1” e “JavaScript Essentials 1”), cada um com caixa indicando tecnologia e data de conclusão.  
   - Alternância de idioma Português ⇄ Inglês.  
   - Link de navegação de volta à página inicial.

3. **Projeto: Animal Quest (projeto-animalquest.html)**  
   - Descrição detalhada do projeto “Animal Quest”: objetivo, público-alvo e impacto esperado.  
   - Link para o repositório ou demonstração (caso haja).  
   - Alternância de idioma Português ⇄ Inglês.  
   - Modo claro/escuro.  
   - Link de volta à página inicial.

---

## Estrutura do Repositório

- **index.html**  
  Página principal do portfólio.

- **certificados.html**  
  Página que lista certificados e tecnologias (Python, arduino e JavaScript).

- **projeto-animalquest.html**  
  Página dedicada ao projeto Animal Quest, com descrição, impacto e link.

- **style.css**  
  Folha de estilos global que define cores, fontes, layout com Flexbox e Grid, e regras de modo claro/escuro.

- **script.js**  
  Script JavaScript responsável pela troca dinâmica de idioma (Português / Inglês) e alternância do tema (claro / escuro).

- **README.md**  
  Este arquivo de documentação.

---

## Tecnologias Utilizadas

- **HTML5**  
  Uso de tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` (para conteúdo estruturado), listas (`<ul>`, `<li>`) e cabeçalhos hierárquicos (`<h1>`, `<h2>`, `<h3>`).

- **CSS3**  
  - Layout responsivo com **Flexbox** e **Grid**.  
  - Tema claro/escuro alternável via classe `dark`.  
  - Media queries para ajustar responsividade em diferentes larguras de tela.  

- **JavaScript (ES6)**  
  - Troca de idioma: exibição/ocultação de elementos marcados como `.lang-pt` ou `.lang-en`.  
  - Alternância de tema: adiciona/remove classe `dark` no `<body>`.  
  - Manipulação básica do DOM e eventos de clique.

- **Sem dependências externas**  
  Não há frameworks ou bibliotecas externas (como React, Bootstrap ou jQuery). Tudo é “vanilla” (puro) para demonstrar lógica básica e semântica.

---
